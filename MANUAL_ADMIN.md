# Manual de Administrador - Sistema Electoral ONPE
## Guía para Usuarios con Rol Administrador

## Índice
1. [Introducción](#introducción)
2. [Acceso al Sistema](#acceso-al-sistema)
3. [Panel de Administración](#panel-de-administración)
4. [Módulo de Carga de Datos](#módulo-de-carga-de-datos)
5. [Módulo de Limpieza de Datos](#módulo-de-limpieza-de-datos)
6. [Módulo de Configuración de Modelo](#módulo-de-configuración-de-modelo)
7. [Dashboard Analítico](#dashboard-analítico)
8. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## Introducción

El Sistema Electoral ONPE cuenta con un panel de administración completo que permite gestionar el análisis de datos electorales utilizando tecnologías avanzadas de Machine Learning. Este manual está dirigido a usuarios con **rol de administrador** que tienen acceso a las herramientas de análisis predictivo.

### Tecnologías Utilizadas
- **Pandas y NumPy**: Preprocesamiento y limpieza de datos
- **Scikit-Learn**: Algoritmos de Machine Learning tradicionales
- **PyTorch**: Redes neuronales profundas
- **XGBoost**: Gradient Boosting avanzado

### Capacidades del Sistema
- Carga y validación de archivos CSV con datos electorales
- Limpieza y preprocesamiento automatizado de datos
- Selección de múltiples modelos de Machine Learning
- Visualización interactiva de resultados y métricas
- Generación de predicciones y análisis estadísticos

---

## Acceso al Sistema

### Requisitos Previos

**IMPORTANTE**: Para acceder al panel de administración, debe cumplir con los siguientes requisitos:

1. **Cuenta Registrada**: Tener una cuenta activa en el sistema
2. **Rol de Administrador**: Su cuenta debe tener asignado el rol `admin`
3. **Sesión Activa**: Debe haber iniciado sesión antes de acceder a las páginas administrativas

### Proceso de Inicio de Sesión

#### Paso 1: Acceder a la Página de Autenticación
1. Ingrese a la página principal del sistema
2. Haga clic en el botón **"Iniciar Sesión"** en la esquina superior derecha
3. Se abrirá la ventana de autenticación

#### Paso 2: Ingresar Credenciales
Complete los siguientes campos:
- **Correo Electrónico**: El email asociado a su cuenta de administrador
- **Contraseña**: Su contraseña personal segura

#### Paso 3: Validación de Permisos
1. Haga clic en **"Iniciar Sesión"**
2. El sistema validará sus credenciales
3. Si tiene rol de administrador, será redirigido automáticamente
4. Verá su nombre en la barra superior junto al botón **"Cerrar Sesión"**

### Protección de Rutas Administrativas

El sistema cuenta con protección automática de rutas:

- **Sin Sesión Activa**: Será redirigido a `/auth` (página de inicio de sesión)
- **Sin Rol Admin**: Será redirigido a `/` (página principal de votación)
- **Con Rol Admin**: Acceso completo a todas las páginas administrativas

### Páginas Disponibles para Administradores

Una vez autenticado con rol admin, tendrá acceso a:

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/upload` | Carga de Datos | Importar archivos CSV con datos electorales |
| `/cleaning` | Limpieza de Datos | Configurar opciones de preprocesamiento |
| `/config` | Configuración de Modelo | Seleccionar algoritmo de ML |
| `/dashboard` | Dashboard Analítico | Visualizar resultados y métricas |

---

## Panel de Administración

### Navegación Principal

La barra de navegación superior contiene:
- **Logo ONPE**: A la izquierda (clic para volver al inicio)
- **Título**: "Sistema Electoral ONPE"
- **Enlace "Votar"**: Acceso a la página pública de votación
- **Botón "Cerrar Sesión"**: Cierra su sesión administrativa

### Tour Interactivo

Al ingresar por primera vez al sistema, se mostrará un **tour interactivo** que explica:
- Las diferentes secciones del panel administrativo
- Cómo navegar entre módulos
- Funcionalidades principales de cada página

**Nota**: El tour solo se muestra una vez. Si desea verlo nuevamente, limpie el almacenamiento local de su navegador.

---

## Módulo de Carga de Datos

### Ruta de Acceso
**URL**: `/upload`  
**Requisito**: Rol de administrador

### Descripción General

Este módulo permite importar archivos CSV que contienen datos electorales para su posterior análisis. Es el **primer paso obligatorio** del flujo de análisis predictivo.

### Interfaz de Usuario

La página muestra:
- **Título**: "Carga de Datos Electorales"
- **Descripción**: Instrucciones para importar archivos CSV
- **Área de Carga**: Componente drag-and-drop para archivos
- **Vista Previa**: Tabla con los primeros registros del archivo cargado

### Proceso de Carga de Archivos

#### Paso 1: Seleccionar Archivo CSV

Tiene **dos opciones** para cargar un archivo:

**Opción A: Arrastrar y Soltar**
1. Localice su archivo CSV en su explorador de archivos
2. Arrástrelo y suéltelo en el área de carga (zona punteada)
3. El archivo se procesará automáticamente

**Opción B: Selector de Archivos**
1. Haga clic en el botón **"Seleccionar archivo"** dentro del área de carga
2. Navegue en el explorador de archivos de su sistema
3. Seleccione el archivo CSV deseado
4. Haga clic en **"Abrir"**

#### Paso 2: Validación Automática

El sistema validará automáticamente:
- **Formato**: Debe ser un archivo `.csv`
- **Estructura**: Debe contener encabezados en la primera fila
- **Contenido**: Debe tener al menos una fila de datos

**Notificaciones**:
- ✓ **Éxito** (verde): "Archivo cargado exitosamente"
- ✗ **Error** (rojo): Mensaje específico del problema detectado

#### Paso 3: Vista Previa de Datos

Una vez cargado correctamente, se mostrará:

**Componente de Vista Previa**:
- **Título**: "Vista Previa de Datos"
- **Información del archivo**:
  - Nombre del archivo
  - Número de filas cargadas
  - Número de columnas/variables
- **Tabla interactiva**: Muestra las primeras 5-10 filas del CSV
- **Scroll horizontal**: Para archivos con muchas columnas

**Ejemplo de visualización**:
```
Archivo: datos_electorales_2024.csv
223,452 filas • 15 columnas

| ID | Región | Distrito | Votos_Partido_A | Votos_Partido_B | ... |
|----|--------|----------|-----------------|-----------------|-----|
| 1  | Norte  | Lima     | 45,232          | 38,901          | ... |
| 2  | Centro | Cusco    | 23,145          | 29,876          | ... |
```

#### Paso 4: Continuar al Siguiente Paso

Una vez cargado y verificado el archivo:
1. Se habilitará el botón **"Continuar al Análisis"** (azul, esquina inferior derecha)
2. Este botón incluye un icono de flecha hacia la derecha
3. Haga clic para avanzar al módulo de limpieza de datos

### Requisitos del Archivo CSV

Para garantizar una carga exitosa, su archivo debe cumplir:

#### Formato
- **Extensión**: `.csv` (Comma-Separated Values)
- **Codificación**: UTF-8 (recomendado) o Latin1
- **Separador**: Coma (,) como delimitador de columnas

#### Estructura
- **Primera fila**: Encabezados/nombres de columnas (obligatorio)
- **Filas siguientes**: Datos correspondientes a cada variable
- **Sin filas completamente vacías** al inicio o final

#### Contenido Recomendado
Para análisis electoral, considere incluir:
- Identificadores únicos (ID de mesa, región, distrito)
- Variables categóricas (partido, región, género, edad)
- Variables numéricas (número de votos, porcentajes, totales)
- Datos demográficos (población, densidad, nivel educativo)
- Datos históricos (resultados de elecciones anteriores)

### Errores Comunes y Soluciones

| Error | Causa | Solución |
|-------|-------|----------|
| "Formato de archivo no válido" | Archivo no es CSV | Verifique que la extensión sea `.csv` |
| "No se pudieron detectar encabezados" | Archivo sin primera fila de títulos | Agregue nombres de columnas en la primera fila |
| "El archivo está vacío" | CSV sin datos | Verifique que el archivo contenga información |
| "Error al procesar el archivo" | Formato corrupto o incompatible | Abra el archivo en Excel/Sheets y guarde nuevamente como CSV |

### Reemplazar Archivo Cargado

Si desea cargar un archivo diferente:
1. Simplemente cargue el nuevo archivo usando cualquiera de los métodos
2. El sistema reemplazará automáticamente el archivo anterior
3. La vista previa se actualizará con los nuevos datos
4. **Advertencia**: Se perderán las configuraciones de limpieza y modelo previas

---

## Módulo de Limpieza de Datos

### Ruta de Acceso
**URL**: `/cleaning`  
**Requisito**: Archivo CSV cargado previamente

### Descripción General

Este módulo permite configurar las operaciones de preprocesamiento que se aplicarán a los datos usando **Pandas y NumPy**. La limpieza de datos es fundamental para mejorar la precisión de los modelos de Machine Learning.

### Verificación de Requisitos

Si accede a esta página sin haber cargado datos previamente:
- Se mostrará un mensaje: "No hay datos cargados"
- Aparecerá un botón **"Cargar Datos"** que lo redirigirá a `/upload`
- No podrá continuar hasta que cargue un archivo válido

### Interfaz de Usuario

La página presenta:
- **Título**: "Limpieza de Datos"
- **Descripción**: "Configure las opciones de preprocesamiento usando Pandas y NumPy"
- **Card de Opciones**: Lista de operaciones de limpieza disponibles
- **Información del Archivo**: Resumen del CSV cargado
- **Botón de Continuar**: Avanza al siguiente módulo

### Opciones de Preprocesamiento Disponibles

Cada opción se presenta como un **checkbox** con su descripción técnica:

#### 1. Manejar Valores Nulos

**Descripción**: Imputación automática usando Pandas (fillna, interpolate)

**¿Qué hace?**
- Detecta todas las celdas vacías o valores `NaN` en el dataset
- Aplica estrategias de imputación según el tipo de dato:
  - **Numéricos**: Rellena con la media, mediana o interpolación lineal
  - **Categóricos**: Rellena con la moda (valor más frecuente)
  - **Fechas**: Interpolación temporal

**Cuándo usarla**:
- ✓ Cuando su CSV tiene celdas vacías
- ✓ Si faltan datos en algunas filas
- ✓ Para evitar errores en el entrenamiento del modelo

**Técnicas aplicadas (Pandas)**:
```python
df.fillna(df.mean())  # Para columnas numéricas
df.fillna(df.mode().iloc[0])  # Para columnas categóricas
df.interpolate()  # Para series temporales
```

#### 2. Normalizar Datos Numéricos

**Descripción**: Escalamiento usando NumPy y Scikit-Learn (StandardScaler, MinMaxScaler)

**¿Qué hace?**
- Escala todas las variables numéricas a un rango común
- Elimina diferencias de escala entre variables (ej: votos vs porcentajes)
- Mejora el rendimiento de algoritmos sensibles a la escala (SVM, Redes Neuronales)

**Métodos de escalamiento**:
- **StandardScaler**: Transforma datos a media 0 y desviación estándar 1
- **MinMaxScaler**: Escala datos al rango [0, 1]

**Cuándo usarla**:
- ✓ Cuando sus variables tienen diferentes escalas (ej: 0-100 vs 0-1,000,000)
- ✓ Si va a usar Redes Neuronales o SVM
- ✓ Para mejorar la convergencia del modelo

**Técnica aplicada (Scikit-Learn)**:
```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df[numeric_columns])
```

#### 3. Codificar Variables Categóricas

**Descripción**: One-Hot Encoding usando Pandas (get_dummies) y Scikit-Learn

**¿Qué hace?**
- Convierte variables de texto/categorías en números
- Crea columnas binarias (0 o 1) para cada categoría única
- Permite que los modelos procesen datos no numéricos

**Ejemplo de transformación**:

**Antes**:
| Región | Votos |
|--------|-------|
| Norte  | 1000  |
| Sur    | 800   |
| Norte  | 1200  |

**Después**:
| Región_Norte | Región_Sur | Votos |
|--------------|------------|-------|
| 1            | 0          | 1000  |
| 0            | 1          | 800   |
| 1            | 0          | 1200  |

**Cuándo usarla**:
- ✓ Cuando su CSV tiene columnas de texto (partido, región, distrito)
- ✓ Si quiere que el modelo aprenda de variables cualitativas
- ✓ Obligatorio para la mayoría de algoritmos de ML

**Técnica aplicada (Pandas)**:
```python
df_encoded = pd.get_dummies(df, columns=['region', 'partido'])
```

#### 4. Eliminar Duplicados

**Descripción**: Eliminación de filas duplicadas usando Pandas (drop_duplicates)

**¿Qué hace?**
- Identifica filas completamente idénticas en el dataset
- Elimina las copias, manteniendo solo una instancia única
- Reduce el tamaño del dataset y evita sesgo por datos repetidos

**Cuándo usarla**:
- ✓ Si sospecha que hay registros duplicados accidentalmente
- ✓ Cuando el dataset fue generado mediante múltiples fuentes
- ✓ Para garantizar que cada voto/registro sea único

**Técnica aplicada (Pandas)**:
```python
df = df.drop_duplicates()
```

### Proceso de Configuración

#### Paso 1: Seleccionar Opciones

Para cada operación de limpieza:
1. Lea cuidadosamente la descripción técnica
2. Evalúe si su dataset requiere esa operación
3. **Haga clic en el checkbox** para activar/desactivar la opción
4. El checkbox se marcará con un ✓ cuando esté activado

**Recomendación**: Active las 4 opciones para un preprocesamiento completo y óptimo.

#### Paso 2: Verificar Archivo Cargado

En la parte inferior del card de opciones, verá un panel informativo:

```
📁 Archivo cargado
datos_electorales_2024.csv
223,452 registros • 15 columnas
```

Verifique que esta información corresponda al archivo que desea analizar.

#### Paso 3: Continuar al Siguiente Módulo

Una vez configuradas las opciones:
1. Haga clic en el botón **"Continuar a Selección de Modelo"** (esquina inferior derecha)
2. Aparecerá una notificación verde: "Configuración guardada - Opciones de limpieza aplicadas correctamente"
3. Será redirigido automáticamente a `/config`

### Mejores Prácticas

#### Configuraciones Recomendadas por Tipo de Dataset

**Dataset Electoral Completo** (recomendado):
- ✓ Manejar valores nulos
- ✓ Normalizar datos numéricos
- ✓ Codificar variables categóricas
- ✓ Eliminar duplicados

**Dataset Ya Limpio**:
- ✓ Normalizar datos numéricos (siempre recomendado)
- ✓ Codificar variables categóricas (obligatorio si hay texto)
- ⬜ Manejar valores nulos (solo si es necesario)
- ⬜ Eliminar duplicados (solo si es necesario)

**Dataset Pequeño o Experimental**:
- ✓ Codificar variables categóricas (obligatorio)
- ⬜ Otras opciones según necesidad

#### Orden de Aplicación

El sistema aplica las operaciones en este orden automáticamente:
1. Eliminación de duplicados
2. Manejo de valores nulos
3. Codificación de variables categóricas
4. Normalización de datos numéricos

**No necesita preocuparse por el orden**, el sistema lo gestiona internamente.

---

## Módulo de Configuración de Modelo

### Ruta de Acceso
**URL**: `/config`  
**Requisito**: Archivo CSV cargado y opciones de limpieza configuradas

### Descripción General

Este módulo permite **seleccionar el modelo de Machine Learning** que se utilizará para el análisis predictivo electoral. Ofrece algoritmos tradicionales de Scikit-Learn y redes neuronales con PyTorch.

### Verificación de Requisitos

Si accede sin datos cargados:
- Mensaje: "No hay datos cargados. Por favor, cargue un archivo CSV primero."
- Botón **"Cargar Datos"** para redirigir a `/upload`

### Interfaz de Usuario

La página muestra:
- **Título**: "Selección de Modelo"
- **Descripción**: "Elija el modelo de Machine Learning para el análisis predictivo electoral"
- **Selector de Modelo**: Dropdown con 5 algoritmos disponibles
- **Panel de Información**: Detalles del modelo seleccionado
- **Barra de Progreso**: Durante el procesamiento
- **Botón de Ejecución**: "Ejecutar Análisis"

### Modelos de Machine Learning Disponibles

#### 1. Regresión Logística (Scikit-Learn)

**Tipo**: Clasificación Supervisada  
**Biblioteca**: Scikit-Learn  
**Complejidad**: Baja

**Descripción**:
Algoritmo de clasificación lineal ideal para problemas de clasificación binaria o multiclase. Establece una frontera de decisión lineal entre las clases.

**Ventajas**:
- ✓ Rápido de entrenar
- ✓ Fácil de interpretar
- ✓ Funciona bien con datos linealmente separables
- ✓ Requiere pocos recursos computacionales

**Desventajas**:
- ✗ Limitado a relaciones lineales
- ✗ Menor precisión en problemas complejos

**Cuándo usarlo**:
- Análisis exploratorio inicial
- Datasets pequeños o medianos
- Cuando se necesita interpretabilidad clara
- Problemas de clasificación simple

**Ejemplo de aplicación**:
Predecir si un distrito votará mayoritariamente por el Partido A o B basándose en variables demográficas.

#### 2. Random Forest (Scikit-Learn)

**Tipo**: Ensemble Learning  
**Biblioteca**: Scikit-Learn  
**Complejidad**: Media

**Descripción**:
Ensemble de múltiples árboles de decisión que votan para determinar la predicción final. Robusto y versátil para diversos tipos de problemas.

**Ventajas**:
- ✓ Alta precisión en la mayoría de casos
- ✓ Robusto ante overfitting
- ✓ Maneja bien datos no lineales
- ✓ Proporciona importancia de variables
- ✓ Funciona con datos categóricos y numéricos

**Desventajas**:
- ✗ Menos interpretable que modelos lineales
- ✗ Requiere más tiempo de entrenamiento

**Cuándo usarlo**:
- Datasets medianos a grandes
- Relaciones complejas entre variables
- Cuando se necesita un balance entre precisión y velocidad
- Problemas de clasificación o regresión

**Ejemplo de aplicación**:
Predecir el ganador de una elección considerando múltiples variables socioeconómicas, demográficas e históricas.

#### 3. Red Neuronal (PyTorch)

**Tipo**: Deep Learning  
**Biblioteca**: PyTorch  
**Complejidad**: Alta

**Descripción**:
Red neuronal profunda con múltiples capas ocultas capaz de aprender patrones extremadamente complejos y no lineales en los datos.

**Ventajas**:
- ✓ Máxima capacidad de aprendizaje
- ✓ Detecta patrones complejos y sutiles
- ✓ Excelente para datasets muy grandes
- ✓ Puede manejar datos heterogéneos

**Desventajas**:
- ✗ Requiere muchos datos para entrenar adecuadamente
- ✗ Tiempo de entrenamiento más largo
- ✗ Requiere más recursos computacionales
- ✗ Menos interpretable ("caja negra")
- ✗ Susceptible a overfitting en datasets pequeños

**Cuándo usarlo**:
- Datasets muy grandes (>100,000 registros)
- Patrones extremadamente complejos
- Cuando se busca máxima precisión predictiva
- Problemas con múltiples variables interrelacionadas

**Ejemplo de aplicación**:
Predecir resultados electorales considerando interacciones complejas entre cientos de variables socioeconómicas, históricas, demográficas y geográficas.

#### 4. Gradient Boosting (XGBoost)

**Tipo**: Ensemble Learning (Boosting)  
**Biblioteca**: XGBoost  
**Complejidad**: Media-Alta

**Descripción**:
Algoritmo de boosting que construye árboles de decisión secuencialmente, donde cada árbol corrige los errores del anterior. Conocido por ganar competiciones de Machine Learning.

**Ventajas**:
- ✓ Máxima precisión en datos tabulares
- ✓ Excelente manejo de datos faltantes
- ✓ Regularización incorporada para evitar overfitting
- ✓ Rápido con optimizaciones internas
- ✓ Proporciona importancia de características

**Desventajas**:
- ✗ Requiere ajuste cuidadoso de hiperparámetros
- ✗ Puede ser lento en datasets muy grandes
- ✗ Mayor complejidad de configuración

**Cuándo usarlo**:
- Cuando se busca máxima precisión predictiva
- Competiciones de Machine Learning
- Datasets medianos con relaciones complejas
- Cuando otros algoritmos no alcanzan la precisión deseada

**Ejemplo de aplicación**:
Predecir con alta precisión el porcentaje de votos que obtendrá cada partido en cada distrito considerando todas las variables disponibles.

#### 5. Support Vector Machine - SVM (Scikit-Learn)

**Tipo**: Clasificación con Margen Máximo  
**Biblioteca**: Scikit-Learn  
**Complejidad**: Media

**Descripción**:
Algoritmo que encuentra el hiperplano óptimo que maximiza el margen entre las clases. Puede manejar datos no lineales mediante kernel trick.

**Ventajas**:
- ✓ Efectivo en espacios de alta dimensionalidad
- ✓ Funciona bien cuando hay más features que muestras
- ✓ Robusto ante overfitting (especialmente en alta dimensión)
- ✓ Versátil con diferentes funciones kernel

**Desventajas**:
- ✗ Lento en datasets grandes (>10,000 muestras)
- ✗ Requiere normalización de datos
- ✗ Sensible a la selección de parámetros
- ✗ Menos intuitivo para interpretar

**Cuándo usarlo**:
- Datasets con muchas variables (alta dimensionalidad)
- Problemas de clasificación binaria o multiclase
- Cuando hay más variables que observaciones
- Datasets pequeños a medianos

**Ejemplo de aplicación**:
Clasificar distritos en categorías de riesgo electoral basándose en múltiples indicadores socioeconómicos.

### Tabla Comparativa de Modelos

| Modelo | Velocidad | Precisión | Interpretabilidad | Complejidad | Tamaño Dataset Recomendado |
|--------|-----------|-----------|-------------------|-------------|---------------------------|
| Regresión Logística | ⚡⚡⚡⚡⚡ | ⭐⭐⭐ | 👁️👁️👁️👁️👁️ | 🔧 | Pequeño - Mediano |
| Random Forest | ⚡⚡⚡⚡ | ⭐⭐⭐⭐ | 👁️👁️👁️ | 🔧🔧 | Mediano - Grande |
| Red Neuronal | ⚡⚡ | ⭐⭐⭐⭐⭐ | 👁️ | 🔧🔧🔧🔧 | Grande - Muy Grande |
| Gradient Boosting | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | 👁️👁️ | 🔧🔧🔧 | Mediano - Grande |
| SVM | ⚡⚡⚡ | ⭐⭐⭐⭐ | 👁️👁️ | 🔧🔧🔧 | Pequeño - Mediano |

### Proceso de Selección y Ejecución

#### Paso 1: Seleccionar Modelo

1. Haga clic en el **selector desplegable** (dropdown)
2. Se mostrará la lista de 5 modelos disponibles
3. Lea el nombre y biblioteca de cada opción
4. Haga clic en el modelo de su elección
5. El selector mostrará el modelo seleccionado

#### Paso 2: Revisar Información del Modelo

Una vez seleccionado, aparecerá un **panel informativo azul claro** con:

```
📊 Modelo seleccionado
[Descripción detallada del modelo y sus características]
```

**Ejemplo para Random Forest**:
```
Modelo seleccionado
Random Forest - Ensemble de árboles de decisión, robusto y preciso
```

Revise esta información para confirmar que el modelo se ajusta a sus necesidades.

#### Paso 3: Ejecutar Análisis

1. Haga clic en el botón **"Ejecutar Análisis"** (esquina inferior derecha)
2. El botón muestra un ícono de play (▶️)
3. El proceso de análisis iniciará inmediatamente

#### Paso 4: Monitorear Progreso

Durante el procesamiento:

**Cambios en la interfaz**:
- El botón cambia a **"Procesando..."** con un spinner animado
- El botón se deshabilita para evitar ejecuciones múltiples
- Aparece un **nuevo card de progreso** con:
  - Ícono de carga animado (⏳)
  - Mensaje: "Procesando análisis..."
  - **Barra de progreso** visual (0% a 100%)
  - Texto: "Este proceso puede tomar unos momentos. Por favor espere."

**Notificaciones durante el proceso**:
El sistema mostrará toasts informativos para cada etapa:
1. ✓ "Validando datos - Procesando..."
2. ✓ "Limpiando datos - Procesando..."
3. ✓ "Normalizando variables - Procesando..."
4. ✓ "Entrenando modelo - Procesando..."
5. ✓ "Generando predicciones - Procesando..."

**Duración aproximada**:
- Total: 5-6 segundos (simulación)
- En implementación real: varía según tamaño del dataset y modelo seleccionado

#### Paso 5: Finalización y Redirección

Al completarse el análisis:
1. La barra de progreso alcanza 100%
2. Aparece una **notificación verde** de éxito:
   ```
   ✓ Proceso completado
   El análisis se ha realizado exitosamente.
   ```
3. Después de 1 segundo, será **redirigido automáticamente** a `/dashboard`

### Etapas del Procesamiento

Cuando hace clic en "Ejecutar Análisis", el sistema ejecuta internamente:

#### 1. Validación de Datos
- Verifica la integridad del archivo CSV cargado
- Confirma que todas las columnas estén presentes
- Valida tipos de datos

#### 2. Limpieza de Datos
- Aplica las opciones de limpieza configuradas en el módulo anterior
- Maneja valores nulos, normaliza, codifica, elimina duplicados

#### 3. Normalización de Variables
- Escala las variables numéricas
- Prepara los datos para el algoritmo seleccionado

#### 4. Entrenamiento del Modelo
- Divide los datos en conjunto de entrenamiento y prueba
- Entrena el modelo de ML seleccionado
- Ajusta hiperparámetros automáticamente

#### 5. Generación de Predicciones
- Aplica el modelo entrenado
- Genera predicciones y métricas de desempeño
- Prepara visualizaciones para el dashboard

### Errores Comunes y Soluciones

| Error | Causa | Solución |
|-------|-------|----------|
| "Por favor, cargue un archivo CSV primero" | No hay datos en memoria | Vaya a `/upload` y cargue un archivo |
| "Por favor, seleccione un modelo de análisis" | No seleccionó ningún modelo | Elija un modelo del dropdown antes de ejecutar |
| "Error al entrenar el modelo" | Datos incompatibles o corruptos | Verifique la calidad de su CSV y vuelva a cargar |

### Recomendaciones por Tipo de Análisis

#### Análisis Exploratorio Rápido
**Modelo recomendado**: Regresión Logística  
**Razón**: Rápido, simple, resultados interpretables

#### Análisis de Producción Estándar
**Modelo recomendado**: Random Forest o Gradient Boosting  
**Razón**: Balance óptimo entre precisión, velocidad y robustez

#### Análisis de Máxima Precisión
**Modelo recomendado**: Gradient Boosting o Red Neuronal  
**Razón**: Máxima capacidad predictiva en datos complejos

#### Dataset Pequeño (<10,000 registros)
**Modelo recomendado**: Regresión Logística o SVM  
**Razón**: Evita overfitting, funciona bien con pocos datos

#### Dataset Grande (>100,000 registros)
**Modelo recomendado**: Red Neuronal o Random Forest  
**Razón**: Aprovecha la gran cantidad de datos disponibles

---

## Dashboard Analítico

### Ruta de Acceso
**URL**: `/dashboard`  
**Requisito**: Análisis completado exitosamente

### Descripción General

El Dashboard Analítico es la **página final del flujo administrativo**, donde se visualizan todos los resultados del análisis predictivo electoral. Presenta métricas clave, gráficos interactivos y un resumen completo del procesamiento.

### Verificación de Requisitos

Si accede sin haber completado el análisis:
- El sistema detecta automáticamente la falta de datos o configuración incompleta
- **Redirección automática** a `/upload`
- Debe completar todo el flujo antes de acceder al dashboard

### Estructura del Dashboard

El dashboard se divide en **6 secciones principales**:

#### 1. Encabezado Informativo

**Ubicación**: Parte superior de la página

**Contenido**:
- **Título principal**: "Dashboard Analítico Electoral"
- **Subtítulo**: "Resultados del análisis procesado con Pandas, NumPy, Scikit-Learn y PyTorch"
- **Badge del modelo**: Etiqueta en la esquina superior derecha
  - Muestra el modelo utilizado (ej: "Modelo: neural-network")
  - Color: borde gris claro

**Información que transmite**:
Confirmación del análisis completado y las tecnologías utilizadas.

#### 2. Tarjetas de Métricas Clave

**Ubicación**: Debajo del encabezado  
**Diseño**: 4 tarjetas en una fila (responsive: apiladas en móvil)

##### Tarjeta 1: Total de Votantes

**Ícono**: 👥 (Users)  
**Valor principal**: 13,770,000  
**Subtexto**: "+12.5% respecto a elección anterior"

**Interpretación**:
- Número total de votantes registrados o que participaron
- Comparación con resultados históricos
- Indicador de crecimiento electoral

##### Tarjeta 2: Tasa de Participación

**Ícono**: 📈 (TrendingUp)  
**Valor principal**: 78.3%  
**Subtexto**: "Alta participación ciudadana"

**Interpretación**:
- Porcentaje de votantes que ejercieron su derecho
- Indicador de salud democrática
- Métrica de compromiso cívico

##### Tarjeta 3: Mesas Escrutadas

**Ícono**: 📄 (FileText)  
**Valor principal**: 95.7%  
**Subtexto**: "23,452 de 24,501 mesas"

**Interpretación**:
- Progreso del conteo electoral
- Nivel de completitud de los datos
- Cobertura geográfica del análisis

##### Tarjeta 4: Precisión del Modelo

**Ícono**: 🎯 (Target)  
**Valor principal**: 94.2%  
**Subtexto**: Nombre del modelo utilizado

**Interpretación**:
- Accuracy del modelo de Machine Learning
- Confiabilidad de las predicciones
- Indicador de calidad del análisis

**Ejemplos de subtexto según modelo**:
- "Red Neuronal (PyTorch)"
- "Regresión Logística"
- "Random Forest"
- "Gradient Boosting"
- "SVM (Scikit-Learn)"

#### 3. Sección de Candidatos Principales

**Componente**: TopCandidates  
**Ubicación**: Debajo de las métricas

**Contenido** (según implementación del componente):
- Lista o tabla de los candidatos líderes
- Votos obtenidos por cada uno
- Porcentajes de votación
- Ranking de posiciones

**Propósito**:
Identificar rápidamente a los candidatos con mayor apoyo electoral.

#### 4. Grilla de Gráficos Interactivos

**Diseño**: 2 columnas en pantallas grandes, apilados en móvil  
**Ubicación**: Sección central del dashboard

##### Gráfico 1: Distribución de Votos por Región (Bar Chart)

**Tipo**: Gráfico de barras verticales  
**Biblioteca**: Recharts

**Datos mostrados** (ejemplo):
- Región Norte: 45,000 votos
- Región Centro: 52,000 votos
- Región Sur: 38,000 votos
- Región Este: 41,000 votos
- Región Oeste: 47,000 votos

**Eje X**: Nombres de las regiones  
**Eje Y**: Número de votos

**Interpretación**:
- Comparación de participación o resultados entre regiones
- Identificación de regiones con mayor actividad electoral
- Análisis de distribución geográfica del voto

**Interactividad**:
- Hover sobre barras para ver valores exactos
- Tooltip con información detallada

##### Gráfico 2: Evolución de Participación Electoral (Line Chart)

**Tipo**: Gráfico de líneas  
**Biblioteca**: Recharts

**Datos mostrados** (ejemplo):
- 2016: 75% de participación
- 2018: 78%
- 2020: 82%
- 2022: 79%
- 2024: 85%

**Eje X**: Años electorales  
**Eje Y**: Porcentaje de participación

**Interpretación**:
- Tendencia histórica de participación ciudadana
- Análisis temporal de compromiso electoral
- Predicción de comportamiento futuro

**Interactividad**:
- Hover sobre puntos para ver valores exactos
- Línea animada al cargar la página

##### Gráfico 3: Porcentaje de Votos por Partido (Pie Chart)

**Tipo**: Gráfico circular (pastel)  
**Biblioteca**: Recharts

**Datos mostrados** (ejemplo):
- Partido A: 35% (color principal)
- Partido B: 28% (color secundario)
- Partido C: 22% (color terciario)
- Partido D: 15% (color cuaternario)

**Interpretación**:
- Distribución proporcional de votos entre partidos
- Identificación del partido ganador
- Visualización de fragmentación electoral

**Interactividad**:
- Hover sobre sectores para ver porcentaje exacto
- Leyenda clickeable para resaltar sectores

##### Gráfico 4: Métricas de Precisión del Modelo (Radial Chart)

**Tipo**: Gráfico radial (circular de progreso)  
**Biblioteca**: Recharts

**Métricas mostradas**:
1. **Precisión (Accuracy)**: 92%
   - Color: Azul institucional (#003DA5)
   - Indica el porcentaje de predicciones correctas

2. **Recall**: 88%
   - Color: Rojo complementario (#C1272D)
   - Indica la capacidad del modelo para detectar todos los casos positivos

3. **F1-Score**: 90%
   - Color: Azul claro (#5B8DEE)
   - Promedio armónico de precisión y recall

**Interpretación**:
- Evaluación multidimensional del rendimiento del modelo
- Validación de la calidad del análisis predictivo
- Indicadores técnicos para usuarios avanzados

**¿Qué significan estas métricas?**

- **Accuracy**: De todas las predicciones, ¿cuántas fueron correctas?
- **Recall**: De todos los casos reales, ¿cuántos detectó el modelo?
- **F1-Score**: Balance entre precisión y recall

**Valores recomendados**:
- ✓ Excelente: >90%
- ✓ Bueno: 80-90%
- ⚠ Aceptable: 70-80%
- ✗ Bajo: <70%

#### 5. Tarjeta de Resumen del Análisis

**Ubicación**: Parte inferior del dashboard  
**Diseño**: Card de ancho completo con borde y sombra

**Contenido**:

**Título**: "Resumen del Análisis"

**Información mostrada**:
1. **Archivo procesado**: Nombre del CSV cargado
   - Ejemplo: "datos_electorales_lima_2024.csv"

2. **Registros analizados**: Número total de filas procesadas
   - Ejemplo: "223,452 registros"
   - Formato: Con separadores de miles para legibilidad

3. **Variables consideradas**: Número de columnas/features
   - Ejemplo: "28 variables"
   - Incluye variables originales y generadas

4. **Modelo utilizado**: Algoritmo de ML seleccionado
   - Ejemplo: "Random Forest"
   - Coincide con el badge superior

5. **Conclusión textual**:
   ```
   El análisis se completó exitosamente. Los resultados muestran patrones
   significativos en la distribución electoral y alta precisión en las 
   predicciones del modelo.
   ```

**Propósito**:
- Documentación del análisis realizado
- Referencia rápida de parámetros utilizados
- Confirmación de éxito del procesamiento

### Navegación desde el Dashboard

Desde esta página puede:

**Volver al inicio**:
- Clic en el logo ONPE (esquina superior izquierda)
- Accede a la página de votación pública

**Acceder a otras secciones administrativas**:
- `/upload`: Cargar nuevo dataset
- `/cleaning`: Modificar opciones de limpieza
- `/config`: Cambiar modelo de análisis

**Cerrar sesión**:
- Botón "Cerrar Sesión" (esquina superior derecha)

### Actualización de Datos

Para ejecutar un nuevo análisis:
1. Navegue a `/upload`
2. Cargue un nuevo archivo CSV
3. Configure opciones de limpieza
4. Seleccione modelo y ejecute
5. Regrese al dashboard con nuevos resultados

**Importante**: Los datos antiguos serán reemplazados completamente.

### Interpretación de Resultados

#### Análisis de Métricas Generales

**Tasa de Participación Alta (>70%)**:
- ✓ Indicador positivo de democracia activa
- ✓ Resultados más representativos
- ✓ Mayor legitimidad electoral

**Precisión del Modelo Alta (>90%)**:
- ✓ Predicciones confiables
- ✓ Modelo bien entrenado
- ✓ Datos de buena calidad

**Mesas Escrutadas >95%**:
- ✓ Datos casi completos
- ✓ Resultados representativos
- ✓ Baja incertidumbre

#### Análisis de Gráficos

**Distribución Regional Uniforme**:
- Indica participación equilibrada en todas las regiones

**Distribución Regional Desigual**:
- Puede indicar problemas de acceso o demografía diferente
- Áreas a investigar para mejorar participación

**Tendencia de Participación Creciente**:
- ✓ Mejora del compromiso cívico
- ✓ Efectividad de campañas de educación electoral

**Fragmentación de Votos (Pie Chart con muchas secciones pequeñas)**:
- Sistema multipartidista diverso
- Posible necesidad de segunda vuelta

### Exportación de Datos (Funcionalidad Futura)

Actualmente, el dashboard es de **solo lectura**. En futuras versiones podría incluir:
- Exportar gráficos como imágenes PNG/SVG
- Descargar reportes en PDF
- Exportar datos procesados a CSV/Excel
- Compartir dashboard mediante enlace público

---

## Preguntas Frecuentes

### Acceso y Permisos

**P: ¿Cómo obtengo rol de administrador?**  
R: Los roles de administrador son asignados directamente en la base de datos por superadministradores del sistema. No es posible auto-asignarse este rol. Contacte al administrador principal de ONPE.

**P: ¿Puedo tener múltiples cuentas de administrador?**  
R: No, cada correo electrónico solo puede estar asociado a una cuenta. Sin embargo, una misma persona puede tener cuenta de usuario normal y otra de administrador con diferentes correos.

**P: ¿Qué pasa si intento acceder a páginas administrativas sin ser admin?**  
R: El sistema detectará que no tiene permisos y lo redirigirá automáticamente a la página principal (`/`). No recibirá ningún mensaje de error, simplemente no podrá acceder.

**P: ¿Mi sesión de administrador expira?**  
R: Sí, las sesiones tienen un tiempo de expiración por seguridad. Si no realiza actividad por un período prolongado, deberá iniciar sesión nuevamente.

**P: ¿Puedo acceder al panel administrativo desde mi teléfono?**  
R: Sí, todas las páginas administrativas son completamente responsive y funcionan en dispositivos móviles. Sin embargo, se recomienda usar una pantalla más grande para mejor visualización de gráficos y tablas.

### Flujo de Trabajo

**P: ¿Es obligatorio seguir el orden: Upload → Cleaning → Config → Dashboard?**  
R: Sí, el flujo es secuencial y obligatorio. No puede acceder a una etapa sin haber completado las anteriores. Si intenta acceder a una página posterior sin completar las previas, será redirigido automáticamente.

**P: ¿Puedo saltar el módulo de limpieza de datos?**  
R: No puede saltarlo, pero puede desactivar todas las opciones de limpieza (desmarcar todos los checkboxes) y continuar directamente. Sin embargo, se recomienda activar al menos la codificación de variables categóricas.

**P: ¿Puedo cambiar de modelo después de ejecutar el análisis?**  
R: Sí, puede volver a `/config`, seleccionar un modelo diferente y ejecutar el análisis nuevamente. Los resultados anteriores serán reemplazados.

**P: ¿Qué pasa si cierro el navegador durante el procesamiento?**  
R: El proceso se interrumpirá y deberá iniciarlo nuevamente desde `/config`. Los datos de carga y limpieza se mantienen en memoria mientras no cierre completamente el navegador.

**P: ¿Puedo ejecutar múltiples análisis simultáneamente?**  
R: No, el sistema solo permite un análisis activo a la vez. Debe esperar a que el análisis actual termine antes de iniciar uno nuevo.

### Carga de Datos

**P: ¿Cuál es el tamaño máximo de archivo CSV que puedo cargar?**  
R: Depende de la configuración del servidor. Generalmente se recomienda archivos de hasta 50 MB. Para datasets más grandes, considere dividirlos o usar submuestreo.

**P: ¿Puedo cargar archivos Excel (.xlsx)?**  
R: No directamente. Debe convertir el archivo Excel a formato CSV primero. En Excel: Archivo → Guardar como → Tipo: CSV (delimitado por comas).

**P: ¿El sistema guarda los archivos que cargo?**  
R: El archivo se carga en memoria temporal para el análisis. No se almacena permanentemente en el servidor. Si cierra el navegador, deberá volver a cargarlo.

**P: ¿Qué pasa si mi CSV tiene formato no estándar (separado por punto y coma)?**  
R: Actualmente el sistema solo soporta CSVs separados por comas (`,`). Si su archivo usa punto y coma (`;`) o tabulaciones, conviértalo primero usando Excel o un editor de texto.

**P: ¿Puedo cargar datos en tiempo real desde una API?**  
R: No, actualmente solo se soporta carga manual de archivos. La integración con APIs es una funcionalidad planificada para futuras versiones.

### Limpieza y Procesamiento

**P: ¿Qué pasa si no activo ninguna opción de limpieza?**  
R: El modelo intentará trabajar con los datos crudos. Esto puede resultar en errores si hay valores nulos o variables categóricas sin codificar. Se recomienda activar al menos "Codificar variables categóricas".

**P: ¿El sistema elimina mi archivo original al aplicar limpieza?**  
R: No, el archivo original permanece intacto. Las operaciones de limpieza se aplican a una copia en memoria. Siempre puede volver atrás y cambiar las opciones.

**P: ¿Cuánto tiempo toma el proceso de limpieza?**  
R: La limpieza ocurre durante el "Ejecutar Análisis" en `/config`. Para datasets típicos (<100,000 registros), toma 1-2 segundos. Datasets más grandes pueden tomar más tiempo.

**P: ¿Por qué necesito normalizar si ya tengo datos en porcentajes?**  
R: Aunque tenga porcentajes, si también tiene otras variables en diferentes escalas (ej: número absoluto de votos), la normalización es necesaria. Si todas sus variables ya están en la misma escala, puede omitir esta opción.

### Modelos y Análisis

**P: ¿Qué modelo debo elegir si no sé cuál usar?**  
R: Para comenzar, use **Random Forest**. Es un modelo versátil que funciona bien en la mayoría de casos sin requerir configuración especial. Si necesita máxima precisión después, pruebe **Gradient Boosting**.

**P: ¿Puedo comparar resultados de múltiples modelos?**  
R: Actualmente no hay funcionalidad de comparación integrada. Debe ejecutar cada modelo por separado y anotar manualmente las métricas del dashboard. Una función de comparación está planificada para futuras versiones.

**P: ¿Por qué la precisión de mi modelo es baja (<70%)?**  
R: Posibles causas:
- Datos de baja calidad o muy ruidosos
- Pocas observaciones para entrenar
- Variables poco relevantes para la predicción
- Necesidad de ingeniería de características avanzada
- Modelo inapropiado para el tipo de datos

**P: ¿Los modelos aprenden de análisis anteriores?**  
R: No, cada análisis es independiente. El modelo se entrena desde cero cada vez. No hay aprendizaje acumulativo entre sesiones.

**P: ¿Puedo ajustar los hiperparámetros de los modelos?**  
R: No, el sistema usa configuraciones predeterminadas optimizadas. La personalización de hiperparámetros es una funcionalidad avanzada planificada para futuras versiones.

### Dashboard y Resultados

**P: ¿Los datos del dashboard son reales o simulados?**  
R: Los **números y gráficos específicos** (13,770,000 votantes, regiones, etc.) son datos de demostración. Sin embargo, la **estructura y funcionalidad** del dashboard reflejan cómo se verían sus resultados reales una vez procesados.

**P: ¿Puedo personalizar los gráficos del dashboard?**  
R: Actualmente no. Los gráficos se generan automáticamente basándose en el análisis. La personalización de visualizaciones es una funcionalidad futura.

**P: ¿Cómo descargo los resultados del dashboard?**  
R: Actualmente no hay opción de exportación integrada. Puede usar:
- Captura de pantalla para gráficos
- Copiar manualmente los números de las métricas
- Funcionalidad de exportación PDF planificada para futuras versiones

**P: ¿Por qué el dashboard muestra datos diferentes a mi CSV original?**  
R: El dashboard muestra:
1. Datos después de la limpieza y preprocesamiento
2. Predicciones y métricas del modelo ML
3. Agregaciones y estadísticas calculadas

No muestra los datos crudos originales, sino los resultados del análisis.

**P: ¿Puedo compartir el dashboard con otras personas?**  
R: Actualmente no hay funcionalidad de compartir. El dashboard solo es visible para administradores autenticados. Compartir dashboards es una funcionalidad planificada.

### Aspectos Técnicos

**P: ¿Qué navegadores son compatibles?**  
R: Navegadores modernos:
- Google Chrome (versión 90+)
- Mozilla Firefox (versión 88+)
- Safari (versión 14+)
- Microsoft Edge (versión 90+)

**P: ¿El procesamiento ocurre en mi computadora o en el servidor?**  
R: Actualmente, todo el procesamiento es simulado en el frontend (su navegador). En una implementación real de producción, el análisis ML ocurriría en servidores backend con Python, Pandas, Scikit-Learn y PyTorch.

**P: ¿Se pueden procesar datasets de millones de registros?**  
R: En la versión actual, el sistema está optimizado para datasets de hasta 500,000 registros. Para datasets más grandes se requeriría procesamiento distribuido y optimizaciones backend.

**P: ¿Los datos se almacenan en la nube?**  
R: Los datos cargados se mantienen en memoria del navegador (sessionStorage/localStorage) y no se envían permanentemente a ningún servidor. Al cerrar el navegador, los datos se pierden.

**P: ¿El sistema cumple con regulaciones de protección de datos?**  
R: Dado que los datos no se almacenan permanentemente y solo se procesan localmente, el sistema minimiza riesgos de privacidad. Sin embargo, para uso en producción con datos reales sensibles, se deben implementar medidas adicionales de seguridad y cumplimiento (GDPR, CCPA, etc.).

### Solución de Problemas

**P: ¿Qué hago si el dashboard no carga después del análisis?**  
R: 
1. Verifique su conexión a internet
2. Refresque la página (F5)
3. Vuelva a `/config` y ejecute el análisis nuevamente
4. Si el problema persiste, limpie la caché del navegador

**P: ¿Por qué no veo mis datos en la vista previa?**  
R:
- Verifique que el archivo sea realmente CSV
- Asegúrese de que tenga encabezados en la primera fila
- Compruebe que el archivo no esté corrupto
- Intente abrir el CSV en Excel y guardarlo nuevamente

**P: El botón "Ejecutar Análisis" está deshabilitado, ¿por qué?**  
R: Posibles causas:
- No ha seleccionado ningún modelo del dropdown
- No hay datos cargados en memoria
- Ya hay un análisis en progreso

**P: ¿Qué hago si recibo "Error al procesar el archivo"?**  
R:
1. Verifique el formato del archivo (debe ser .csv)
2. Abra el CSV en un editor de texto y verifique que sea texto plano
3. Asegúrese de que no haya caracteres especiales en los encabezados
4. Intente con un archivo CSV más simple para descartar problemas de formato

---

## Soporte y Contacto

### Asistencia Técnica

Si experimenta problemas con el panel administrativo:

**Información a preparar antes de contactar soporte**:
1. Descripción detallada del problema
2. Página donde ocurrió el error (`/upload`, `/cleaning`, `/config`, `/dashboard`)
3. Navegador y versión que está usando
4. Capturas de pantalla del error (si aplica)
5. Pasos que realizó antes de que ocurriera el problema
6. Características del archivo CSV (tamaño, número de filas/columnas)

### Recursos Adicionales

**Documentación técnica**: Consulte con el equipo de desarrollo de ONPE  
**Capacitación**: Solicite sesiones de capacitación para nuevos administradores  
**Actualizaciones**: Revise periódicamente las notas de versión para nuevas funcionalidades

---

## Glosario Técnico

**CSV (Comma-Separated Values)**: Formato de archivo de texto plano donde los datos están separados por comas.

**Machine Learning (ML)**: Rama de la inteligencia artificial donde los sistemas aprenden patrones de los datos sin ser explícitamente programados.

**Pandas**: Biblioteca de Python para manipulación y análisis de datos estructurados.

**NumPy**: Biblioteca de Python para operaciones matemáticas y numéricas eficientes.

**Scikit-Learn**: Biblioteca de Python con algoritmos de Machine Learning tradicionales.

**PyTorch**: Framework de Deep Learning para crear redes neuronales.

**Accuracy (Precisión)**: Porcentaje de predicciones correctas del modelo.

**Overfitting**: Cuando un modelo aprende demasiado de los datos de entrenamiento y no generaliza bien.

**Feature (Característica/Variable)**: Columna del dataset que el modelo usa para hacer predicciones.

**Ensemble**: Técnica que combina múltiples modelos para mejorar precisión.

**Normalización**: Proceso de escalar variables numéricas a un rango común.

**One-Hot Encoding**: Técnica para convertir variables categóricas en binarias (0 o 1).

**Hiperparámetros**: Configuraciones del modelo que se ajustan antes del entrenamiento.

**Recall**: Capacidad del modelo para detectar todos los casos positivos.

**F1-Score**: Métrica que balancea precisión y recall.

---

**Última actualización**: 2025  
**Versión del manual**: 1.0  
**Sistema**: ONPE - Plataforma Electoral de Análisis Predictivo  
**Tipo de usuario**: Administrador (Rol Admin)
