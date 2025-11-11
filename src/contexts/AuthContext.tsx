import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signInWithDNI: (dni: string) => Promise<{ error: any; profile?: any }>;
  registerWithDNI: (dni: string, fullName: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check admin status
        if (session?.user) {
          setTimeout(async () => {
            try {
              const { data, error } = await supabase
                .from('user_roles')
                .select('role')
                .eq('user_id', session.user.id)
                .eq('role', 'admin')
                .maybeSingle();
              
              if (!error && data) {
                setIsAdmin(true);
              } else {
                setIsAdmin(false);
              }
            } catch (error) {
              console.error('Error checking admin status:', error);
              setIsAdmin(false);
            }
          }, 0);
        } else {
          setIsAdmin(false);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "¡Registro exitoso!",
        description: "Bienvenido al sistema electoral ONPE",
      });
    }

    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "¡Inicio de sesión exitoso!",
        description: "Bienvenido de vuelta",
      });
    }

    return { error };
  };

  const signInWithDNI = async (dni: string) => {
    try {
      // Buscar el perfil por DNI
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('dni', dni)
        .maybeSingle();

      if (profileError) {
        return { error: profileError };
      }

      if (!profile) {
        return { 
          error: { message: 'DNI no registrado. Por favor, regístrese primero.' },
          profile: null
        };
      }

      // Iniciar sesión anónima para el usuario
      const { error: signInError } = await supabase.auth.signInAnonymously();
      
      if (signInError) {
        return { error: signInError };
      }

      toast({
        title: "¡Inicio de sesión exitoso!",
        description: `Bienvenido, ${profile.full_name}`,
      });

      return { error: null, profile };
    } catch (error: any) {
      return { error };
    }
  };

  const registerWithDNI = async (dni: string, fullName: string) => {
    try {
      // Verificar si el DNI ya existe
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('dni')
        .eq('dni', dni)
        .maybeSingle();

      if (existingProfile) {
        return { error: { message: 'Este DNI ya está registrado. Por favor, inicie sesión.' } };
      }

      // Crear una cuenta anónima
      const { data: authData, error: signUpError } = await supabase.auth.signInAnonymously();
      
      if (signUpError || !authData.user) {
        return { error: signUpError };
      }

      // Actualizar el perfil con DNI y nombre
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ 
          dni: dni,
          full_name: fullName
        })
        .eq('id', authData.user.id);

      if (updateError) {
        return { error: updateError };
      }

      toast({
        title: "¡Registro exitoso!",
        description: "Bienvenido al sistema electoral ONPE",
      });

      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isAdmin,
        signUp,
        signIn,
        signInWithDNI,
        registerWithDNI,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
