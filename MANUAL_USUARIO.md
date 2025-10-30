# Manual de Usuario - Sistema Electoral ONPE

## Índice
1. [Introducción](#introducción)
2. [Acceso al Sistema](#acceso-al-sistema)
3. [Interfaz de Usuario](#interfaz-de-usuario)
4. [Módulo de Votación Pública](#módulo-de-votación-pública)
5. [Módulo de Administración](#módulo-de-administración)
6. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## Introducción

El Sistema Electoral ONPE es una plataforma web que permite tanto la votación pública como la administración electoral con herramientas de análisis avanzado. Este manual describe cómo utilizar todas las funcionalidades disponibles en la interfaz de usuario.

### Características Principales
- **Votación Pública**: Los ciudadanos pueden votar de manera segura por sus candidatos preferidos
- **Análisis Electoral**: Herramientas administrativas para procesar y analizar datos electorales
- **Visualización de Datos**: Gráficos y estadísticas en tiempo real
- **Interfaz Intuitiva**: Diseño moderno y fácil de usar

---

## Acceso al Sistema

### Para Ciudadanos
1. Acceda a la página principal del sistema
2. Podrá votar directamente sin necesidad de iniciar sesión
3. Solo se requieren datos personales al momento de emitir el voto

### Para Administradores
1. Haga clic en el botón **"Administrador"** en la esquina superior derecha
2. Ingrese sus credenciales:
   - **Correo electrónico**
   - **Contraseña**
3. Si es su primera vez, use la pestaña **"Registrarse"** para crear una cuenta

#### Registro de Nuevo Administrador
1. En la página de autenticación, seleccione la pestaña **"Registrarse"**
2. Complete los siguientes campos:
   - **Nombre Completo**
   - **Correo Electrónico**
   - **Contraseña** (mínimo 6 caracteres)
3. Haga clic en **"Registrarse"**
4. El sistema lo redirigirá automáticamente al panel de administración

---

## Interfaz de Usuario

### Navegación Principal

La barra de navegación superior contiene los siguientes elementos:

#### Para Usuarios Públicos
- **Votar**: Página principal para emitir votos

#### Para Administradores
- **Votar**: Acceso a la votación pública
- **Cargar Datos**: Importar archivos CSV con datos electorales
- **Limpiar Datos**: Configurar opciones de preprocesamiento
- **Configurar Modelo**: Seleccionar algoritmos de análisis
- **Dashboard**: Ver resultados y estadísticas
- **Cerrar Sesión**: Salir del sistema

### Modos de Visualización

El sistema se adapta automáticamente a diferentes dispositivos:
- **Escritorio**: Vista completa con todas las funcionalidades
- **Tablet**: Interfaz adaptada para pantallas medianas
- **Móvil**: Diseño optimizado para smartphones

---

## Módulo de Votación Pública

### Cómo Votar

#### Paso 1: Ver Candidatos
1. En la página principal, verá la lista completa de candidatos
2. Cada tarjeta de candidato muestra:
   - **Fotografía** del candidato
   - **Nombre completo**
   - **Partido político**
   - **Descripción** breve
   - **Propuestas** principales
   - **Total de votos** recibidos

#### Paso 2: Seleccionar Candidato
1. Revise cuidadosamente las propuestas de cada candidato
2. Haga clic en el botón **"Votar"** del candidato de su preferencia
3. Se abrirá un formulario de confirmación

#### Paso 3: Ingresar Datos Personales
Complete los siguientes campos obligatorios:
- **Nombre Completo**: Su nombre tal como aparece en su documento de identidad
- **Correo Electrónico**: Dirección de email válida
- **Teléfono**: Número de contacto
- **Dirección**: Domicilio actual

#### Paso 4: Confirmar Voto
1. Revise que toda la información esté correcta
2. Haga clic en **"Confirmar Voto"**
3. Recibirá una notificación de confirmación
4. El contador de votos del candidato se actualizará automáticamente

### Restricciones de Votación
- Solo se permite **un voto por usuario**
- Una vez emitido el voto, **no se puede cambiar**
- El candidato por el que votó aparecerá destacado con un borde verde

### Actualizaciones en Tiempo Real
- Los contadores de votos se actualizan automáticamente
- No es necesario recargar la página para ver nuevos votos
- Los cambios se reflejan instantáneamente para todos los usuarios

---

## Módulo de Administración

### 1. Carga de Datos Electorales

#### Acceso
- Navegue a **"Cargar Datos"** desde el menú principal

#### Formatos Soportados
- Archivos **CSV** (Comma-Separated Values)
- El archivo debe incluir encabezados en la primera fila
- Codificación recomendada: UTF-8

#### Proceso de Carga
1. Haga clic en el área de carga o arrastre el archivo CSV
2. El sistema validará el archivo automáticamente
3. Se mostrará una vista previa con:
   - **Nombre del archivo**
   - **Número de filas**
   - **Número de columnas**
   - **Primeras filas** de datos
4. Haga clic en **"Continuar al Análisis"** para proceder

#### Requisitos del Archivo
- Formato válido CSV
- Encabezados descriptivos
- Sin celdas completamente vacías en encabezados
- Tamaño máximo recomendado: 50 MB

---

### 2. Limpieza de Datos

#### Acceso
- Navegue a **"Limpiar Datos"** después de cargar un archivo

#### Opciones de Preprocesamiento

##### Manejo de Valores Nulos
- **Función**: Elimina o imputa valores faltantes
- **Equivalente Pandas**: `fillna()`, `dropna()`
- **Uso recomendado**: Cuando el dataset tiene celdas vacías

##### Normalización de Datos Numéricos
- **Función**: Escala valores numéricos a un rango estándar (0-1)
- **Equivalente Scikit-Learn**: `StandardScaler`, `MinMaxScaler`
- **Uso recomendado**: Para modelos de machine learning que requieren datos normalizados

##### Codificación de Variables Categóricas
- **Función**: Convierte texto en valores numéricos
- **Equivalente Pandas**: `get_dummies()`, `LabelEncoder`
- **Uso recomendado**: Para procesar columnas con categorías (ej: "Sí"/"No", "Norte"/"Sur")

##### Eliminar Duplicados
- **Función**: Remueve filas idénticas del dataset
- **Equivalente Pandas**: `drop_duplicates()`
- **Uso recomendado**: Para asegurar integridad de datos

#### Proceso
1. Seleccione las opciones deseadas marcando las casillas
2. Puede combinar múltiples opciones
3. Haga clic en **"Continuar a Selección de Modelo"**
4. Las opciones se aplicarán automáticamente al procesar

---

### 3. Configuración de Modelo

#### Acceso
- Navegue a **"Configurar Modelo"** después de configurar limpieza

#### Modelos Disponibles

##### Regresión Logística
- **Tipo**: Clasificación binaria/multiclase
- **Biblioteca**: Scikit-Learn
- **Uso**: Predicción de resultados electorales, clasificación de votantes
- **Ventajas**: Rápido, interpretable, eficiente
- **Ideal para**: Datasets pequeños a medianos

##### Redes Neuronales
- **Tipo**: Deep Learning
- **Biblioteca**: PyTorch
- **Uso**: Patrones complejos, predicciones avanzadas
- **Ventajas**: Alta precisión, maneja relaciones no lineales
- **Ideal para**: Datasets grandes con relaciones complejas

##### Random Forest
- **Tipo**: Ensemble learning
- **Biblioteca**: Scikit-Learn
- **Uso**: Clasificación y regresión robusta
- **Ventajas**: Resistente a overfitting, maneja datos ruidosos
- **Ideal para**: Análisis general con múltiples variables

##### Análisis de Clustering
- **Tipo**: Aprendizaje no supervisado
- **Biblioteca**: Scikit-Learn (K-Means)
- **Uso**: Segmentación de votantes, identificación de patrones
- **Ventajas**: Descubre grupos naturales en los datos
- **Ideal para**: Exploración de datos sin etiquetas previas

#### Proceso de Ejecución
1. Seleccione un modelo del menú desplegable
2. Lea la descripción para confirmar que es apropiado
3. Haga clic en **"Ejecutar Análisis"**
4. Observe la barra de progreso:
   - Inicializando modelo
   - Preprocesando datos
   - Entrenando modelo
   - Generando resultados
5. Será redirigido automáticamente al Dashboard

---

### 4. Dashboard de Resultados

#### Acceso
- Se accede automáticamente después del análisis
- También disponible desde el menú **"Dashboard"**

#### Secciones del Dashboard

##### Métricas Principales
Cuatro tarjetas con estadísticas clave:
- **Total de Votantes**: Número total de personas que votaron
- **Tasa de Participación**: Porcentaje de participación electoral
- **Mesas Escrutadas**: Cantidad de mesas de votación procesadas
- **Precisión del Modelo**: Exactitud del algoritmo utilizado (0-100%)

##### Top 5 Candidatos
- Lista de los cinco candidatos más votados
- Ordenados por número de votos
- Incluye nombre, partido y total de votos

##### Gráfico de Barras
- **Visualiza**: Votos por candidato
- **Eje X**: Nombres de candidatos
- **Eje Y**: Número de votos
- **Uso**: Comparación directa entre candidatos

##### Gráfico de Líneas
- **Visualiza**: Tendencias temporales
- **Eje X**: Período de tiempo
- **Eje Y**: Número de votos
- **Uso**: Seguimiento de evolución de votos

##### Gráfico Circular
- **Visualiza**: Distribución porcentual de votos
- **Uso**: Proporciones relativas por partido/candidato

##### Gráfico Radial
- **Visualiza**: Comparación multidimensional
- **Uso**: Análisis de múltiples métricas simultáneamente

##### Resumen del Análisis
Información detallada sobre:
- **Archivo procesado**: Nombre y características del CSV
- **Filas procesadas**: Cantidad de registros analizados
- **Columnas analizadas**: Número de variables consideradas
- **Modelo utilizado**: Algoritmo seleccionado
- **Opciones de limpieza**: Preprocesamientos aplicados

#### Interacción con Gráficos
- **Hover**: Pase el cursor sobre elementos para ver detalles
- **Responsive**: Todos los gráficos se adaptan al tamaño de pantalla
- **Exportación**: Los datos pueden ser exportados (funcionalidad futura)

---

## Características Adicionales

### Sistema de Notificaciones
- **Toast Messages**: Mensajes emergentes para confirmaciones y errores
- **Posición**: Esquina superior derecha
- **Tipos**:
  - ✓ Éxito (verde): Operaciones completadas
  - ⚠ Advertencia (amarillo): Acciones que requieren atención
  - ✗ Error (rojo): Problemas o errores
  - ℹ Información (azul): Mensajes informativos

### Tour Guiado
Al iniciar sesión por primera vez, el sistema ofrece un tour interactivo:
1. Bienvenida al sistema
2. Explicación de funcionalidades públicas
3. Descripción de herramientas administrativas
4. Puede saltarse el tour en cualquier momento

### Temas y Colores
El sistema utiliza los colores institucionales de ONPE:
- **Azul Institucional**: Color primario (#003DA5)
- **Rojo Complementario**: Color secundario (#C1272D)
- **Modo Claro/Oscuro**: Soporte para ambos esquemas (automático según preferencias del sistema)

---

## Preguntas Frecuentes

### Para Usuarios Públicos

**P: ¿Necesito crear una cuenta para votar?**
R: No, puede votar directamente sin registro previo. Solo necesita proporcionar sus datos personales al confirmar el voto.

**P: ¿Puedo cambiar mi voto después de emitirlo?**
R: No, una vez confirmado el voto, no es posible modificarlo. Asegúrese de seleccionar el candidato correcto antes de confirmar.

**P: ¿Cómo sé si mi voto fue registrado?**
R: Recibirá una notificación de confirmación en pantalla, y el candidato por el que votó aparecerá destacado con un borde verde.

**P: ¿Puedo ver los resultados en tiempo real?**
R: Sí, los contadores de votos se actualizan automáticamente sin necesidad de recargar la página.

**P: ¿Es seguro votar a través de este sistema?**
R: Sí, el sistema utiliza encriptación y validaciones para garantizar la integridad del proceso electoral.

### Para Administradores

**P: ¿Qué formato debe tener mi archivo de datos?**
R: El archivo debe ser CSV con encabezados en la primera fila y codificación UTF-8.

**P: ¿Cuál modelo debo elegir?**
R: Depende de su caso:
- Datasets pequeños: Regresión Logística
- Datasets grandes con patrones complejos: Redes Neuronales
- Análisis general: Random Forest
- Exploración de grupos: Clustering

**P: ¿Puedo procesar múltiples archivos simultáneamente?**
R: No, el sistema procesa un archivo a la vez. Para cambiar de dataset, cargue un nuevo archivo.

**P: ¿Se guardan mis análisis anteriores?**
R: Actualmente, el sistema mantiene el último análisis realizado. Para análisis histórico, exporte los resultados antes de procesar nuevos datos.

**P: ¿Qué hago si el análisis falla?**
R: Verifique que:
- El archivo CSV esté correctamente formateado
- No haya columnas completamente vacías
- El tamaño del archivo sea razonable (<50 MB)
- Las opciones de limpieza sean apropiadas para sus datos

**P: ¿Puedo acceder al Dashboard sin procesar datos?**
R: No, debe cargar y procesar un archivo antes de acceder al Dashboard.

---

## Soporte Técnico

Para asistencia adicional o reporte de problemas:
1. Capture una captura de pantalla del error
2. Anote los pasos que realizó antes del problema
3. Contacte al equipo de soporte técnico de ONPE

---

## Actualizaciones del Sistema

Este manual corresponde a la versión actual del sistema. Las funcionalidades pueden cambiar con futuras actualizaciones. Consulte regularmente la documentación más reciente.

---

**Última actualización**: 2025
**Versión del manual**: 1.0
**Sistema**: ONPE - Plataforma Electoral