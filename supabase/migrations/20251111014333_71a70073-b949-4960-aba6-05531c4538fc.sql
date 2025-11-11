-- Agregar columna DNI a profiles
ALTER TABLE public.profiles
ADD COLUMN dni TEXT UNIQUE;

-- Crear índice para búsquedas rápidas por DNI
CREATE INDEX idx_profiles_dni ON public.profiles(dni);

-- Crear enum para categorías electorales
CREATE TYPE public.election_category AS ENUM ('presidencial', 'distrital', 'regional');

-- Agregar categoría a candidatos
ALTER TABLE public.candidates
ADD COLUMN category election_category NOT NULL DEFAULT 'presidencial';

-- Agregar categoría a votos
ALTER TABLE public.votes
ADD COLUMN category election_category NOT NULL DEFAULT 'presidencial';

-- Crear tabla para datos electorales en tiempo real
CREATE TABLE public.electoral_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  region TEXT NOT NULL,
  district TEXT,
  total_voters INTEGER NOT NULL DEFAULT 0,
  votes_counted INTEGER NOT NULL DEFAULT 0,
  participation_rate DECIMAL(5,2),
  null_votes INTEGER DEFAULT 0,
  blank_votes INTEGER DEFAULT 0,
  valid_votes INTEGER DEFAULT 0,
  category election_category NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS en electoral_data
ALTER TABLE public.electoral_data ENABLE ROW LEVEL SECURITY;

-- Políticas para electoral_data
CREATE POLICY "Anyone can view electoral data"
ON public.electoral_data
FOR SELECT
USING (true);

CREATE POLICY "Admins can insert electoral data"
ON public.electoral_data
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update electoral data"
ON public.electoral_data
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete electoral data"
ON public.electoral_data
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger para actualizar updated_at en electoral_data
CREATE TRIGGER update_electoral_data_updated_at
BEFORE UPDATE ON public.electoral_data
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();