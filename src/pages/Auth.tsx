import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Vote } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [fullName, setFullName] = useState('');
  const { signIn, signInWithDNI, registerWithDNI } = useAuth();
  const navigate = useNavigate();

  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (!error) {
      navigate('/');
    }
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      const { error } = await signInWithDNI(dni);
      if (!error) {
        navigate('/voting');
      }
    } else {
      const { error } = await registerWithDNI(dni, fullName);
      if (!error) {
        navigate('/voting');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-institutional p-4">
      <Card className="w-full max-w-md shadow-strong">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <Vote className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Sistema Electoral ONPE</CardTitle>
          <CardDescription>Acceso al sistema de elecciones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Tabs value={isAdmin ? 'admin' : 'user'} onValueChange={(v) => setIsAdmin(v === 'admin')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user">Votante</TabsTrigger>
                <TabsTrigger value="admin">Administrador</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {isAdmin ? (
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Correo Electrónico</Label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@onpe.gob.pe"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Contraseña</Label>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Iniciar Sesión como Administrador
              </Button>
            </form>
          ) : (
            <Tabs value={isLogin ? 'login' : 'register'} onValueChange={(v) => setIsLogin(v === 'login')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register">Registrarse</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleUserSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-dni">DNI</Label>
                    <Input
                      id="login-dni"
                      type="text"
                      placeholder="12345678"
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      required
                      maxLength={8}
                      pattern="[0-9]{8}"
                    />
                    <p className="text-xs text-muted-foreground">
                      Ingrese su DNI de 8 dígitos
                    </p>
                  </div>
                  <Button type="submit" className="w-full">
                    Iniciar Sesión
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleUserSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-dni">DNI</Label>
                    <Input
                      id="register-dni"
                      type="text"
                      placeholder="12345678"
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      required
                      maxLength={8}
                      pattern="[0-9]{8}"
                    />
                    <p className="text-xs text-muted-foreground">
                      Ingrese su DNI de 8 dígitos
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nombre Completo</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Juan Pérez García"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Registrarse
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
