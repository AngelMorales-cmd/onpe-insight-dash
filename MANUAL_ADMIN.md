# Manual de Usuario - Panel de Administración
## ONPE Insight Dash - Interfaz Administrativa

---

## Índice
1. [Introducción](#introducción)
2. [Acceso al Sistema](#acceso-al-sistema)
3. [Navegación Principal](#navegación-principal)
4. [Carga de Datos](#carga-de-datos)
5. [Limpieza de Datos](#limpieza-de-datos)
6. [Selección de Modelo](#selección-de-modelo)
7. [Dashboard de Resultados](#dashboard-de-resultados)
8. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## Introducción

Bienvenido al manual de usuario del **Panel de Administración de ONPE Insight Dash**, la plataforma de análisis electoral que permite procesar, analizar y visualizar datos electorales de manera intuitiva y profesional.

Este manual está diseñado para usuarios con **rol de administrador** y describe paso a paso cómo utilizar cada función disponible en la interfaz gráfica del sistema.

### ¿Qué puede hacer con este sistema?

Como administrador, usted puede:

✓ **Cargar archivos CSV** con datos electorales  
✓ **Configurar opciones de limpieza** para preparar los datos  
✓ **Seleccionar modelos de análisis** según sus necesidades  
✓ **Visualizar resultados** a través de gráficos y métricas interactivas  
✓ **Interpretar predicciones** con indicadores claros y concisos

### Flujo de Trabajo

El sistema sigue un proceso lineal en 4 pasos:

```
1. CARGA DE DATOS → 2. LIMPIEZA → 3. SELECCIÓN DE MODELO → 4. DASHBOARD
```

Cada paso es necesario para continuar al siguiente, garantizando un análisis completo y confiable.

---

## Acceso al Sistema

### Requisitos Previos

Para acceder al panel de administración necesita:

1. **Cuenta con rol de administrador** asignada por el sistema
2. **Credenciales de acceso** (correo electrónico y contraseña)
3. **Navegador web actualizado** (Chrome, Firefox, Safari o Edge)

### Iniciar Sesión

#### Paso 1: Acceder al Sistema

1. Abra su navegador web
2. Ingrese a la página principal de **ONPE Insight Dash**
3. Localice el botón **"Iniciar Sesión"** en la esquina superior derecha
4. Haga clic para abrir el formulario de autenticación

#### Paso 2: Ingresar sus Credenciales

En la pantalla de inicio de sesión complete:

- **Correo Electrónico**: Su email de administrador registrado
- **Contraseña**: Su contraseña personal y segura

#### Paso 3: Confirmar el Acceso

1. Presione el botón **"Iniciar Sesión"**
2. El sistema verificará sus credenciales
3. Si la autenticación es exitosa:
   - Será redirigido automáticamente al panel administrativo
   - Verá su nombre de usuario en la barra superior
   - Aparecerá el botón **"Cerrar Sesión"** disponible

### Niveles de Acceso

El sistema distingue entre dos tipos de usuarios:

| Rol | Acceso | Páginas Disponibles |
|-----|--------|---------------------|
| **Usuario** | Limitado | Solo página de votación pública |
| **Administrador** | Completo | Carga de datos, limpieza, configuración y dashboard |

**Importante**: Solo usuarios con rol de administrador pueden acceder al panel de análisis.

---

## Navegación Principal

### Barra de Navegación Superior

Una vez autenticado, la barra superior contiene:

| Elemento | Ubicación | Función |
|----------|-----------|---------|
| **Logo ONPE** | Izquierda | Volver a la página principal |
| **Título del Sistema** | Centro-izquierda | "Sistema Electoral ONPE" |
| **Enlace "Votar"** | Centro-derecha | Acceso a la votación pública |
| **Botón "Cerrar Sesión"** | Derecha | Finalizar sesión administrativa |

### Tour Interactivo

La primera vez que acceda al sistema, se mostrará un **tour guiado** que explica:

- Las secciones principales del panel
- Cómo navegar entre módulos
- Funcionalidades de cada página

**Nota**: El tour se muestra solo una vez. Si desea verlo nuevamente, contacte al soporte técnico o limpie la caché de su navegador.

### Rutas del Sistema

El panel administrativo cuenta con 4 páginas principales:

| Página | URL | Función |
|--------|-----|---------|
| **Carga de Datos** | `/upload` | Importar archivos CSV |
| **Limpieza de Datos** | `/cleaning` | Configurar preprocesamiento |
| **Selección de Modelo** | `/config` | Elegir algoritmo de análisis |
| **Dashboard** | `/dashboard` | Ver resultados y gráficos |

---

## Carga de Datos

### Descripción General

Esta es la **primera página** del flujo de análisis. Aquí puede importar archivos CSV con datos electorales que desea procesar.

**Acceso**: Ruta `/upload`

### Elementos de la Interfaz

La página muestra:

- **Título**: "Carga de Datos Electorales"
- **Área de carga**: Zona de arrastrar y soltar archivos
- **Vista previa**: Tabla con las primeras filas del archivo cargado
- **Botón de continuar**: Avanza al siguiente paso (aparece tras cargar el archivo)

### Cómo Cargar un Archivo

Tiene dos opciones para subir su archivo CSV:

#### Opción A: Arrastrar y Soltar

1. Localice su archivo CSV en su explorador de archivos
2. Arrástrelo hacia el área punteada de carga
3. Suelte el archivo sobre el área
4. El sistema procesará el archivo automáticamente

#### Opción B: Seleccionar Archivo

1. Haga clic en el botón **"Seleccionar archivo"** dentro del área de carga
2. Se abrirá el explorador de archivos de su sistema
3. Navegue y seleccione el archivo CSV deseado
4. Haga clic en **"Abrir"**

### Validación Automática

El sistema verifica automáticamente:

✓ Que el archivo tenga extensión `.csv`  
✓ Que contenga encabezados en la primera fila  
✓ Que tenga al menos una fila de datos

**Notificaciones**:
- **Verde** (✓): "Archivo cargado exitosamente"
- **Rojo** (✗): Mensaje de error describiendo el problema

### Vista Previa de Datos

Una vez cargado correctamente, aparecerá:

**Card de Vista Previa** con:
- Nombre del archivo
- Cantidad de filas detectadas
- Cantidad de columnas detectadas
- Tabla interactiva mostrando las primeras 5-10 filas
- Scroll horizontal para archivos con muchas columnas

**Ejemplo**:
```
Archivo: datos_electorales_2024.csv
223,452 filas • 15 columnas

| ID | Región | Distrito | Votos_A | Votos_B | ... |
|----|--------|----------|---------|---------|-----|
| 1  | Norte  | Lima     | 45,232  | 38,901  | ... |
| 2  | Centro | Cusco    | 23,145  | 29,876  | ... |
```

### Continuar al Siguiente Paso

Una vez verificado el archivo:

1. Se habilitará el botón **"Continuar al Análisis"** (azul, inferior derecha)
2. Haga clic para avanzar a la página de limpieza de datos
3. Será redirigido automáticamente a `/cleaning`

### Requisitos del Archivo CSV

Para una carga exitosa, su archivo debe cumplir:

**Formato**:
- Extensión: `.csv` (valores separados por comas)
- Codificación: UTF-8 o Latin1
- Separador: coma (`,`)

**Estructura**:
- Primera fila: nombres de columnas (encabezados)
- Filas siguientes: datos correspondientes
- Sin filas completamente vacías

**Contenido recomendado para análisis electoral**:
- Identificadores (ID de mesa, región, distrito)
- Variables categóricas (partido, región, género)
- Variables numéricas (votos, porcentajes, totales)
- Datos demográficos (población, nivel educativo)

### Solución de Problemas

| Error | Posible Causa | Solución |
|-------|---------------|----------|
| "Formato no válido" | Archivo no es CSV | Verifique que la extensión sea `.csv` |
| "Sin encabezados" | Falta primera fila de títulos | Agregue nombres de columnas |
| "Archivo vacío" | CSV sin datos | Verifique que el archivo tenga información |
| "Error al procesar" | Formato corrupto | Abra en Excel y guarde nuevamente como CSV |

### Reemplazar Archivo

Si desea cargar un archivo diferente:

1. Simplemente cargue el nuevo archivo usando cualquiera de los métodos
2. El archivo anterior será reemplazado automáticamente
3. La vista previa se actualizará con los nuevos datos

⚠️ **Advertencia**: Al reemplazar el archivo, se perderán las configuraciones previas de limpieza y modelo.

---

## Limpieza de Datos

### Descripción General

En esta página puede configurar las opciones de preprocesamiento que se aplicarán a sus datos antes del análisis. La limpieza de datos mejora la calidad y precisión de los resultados.

**Acceso**: Ruta `/cleaning` (requiere haber cargado un archivo CSV previamente)

### Elementos de la Interfaz

La página muestra:

- **Título**: "Limpieza de Datos"
- **Descripción**: Instrucciones sobre el preprocesamiento
- **Card de opciones**: Cuatro checkboxes con operaciones de limpieza
- **Información del archivo**: Resumen del CSV cargado
- **Botón de continuar**: "Continuar a Selección de Modelo"

### Opciones Disponibles

El sistema ofrece 4 operaciones de limpieza que puede activar o desactivar según sus necesidades:

#### 1️⃣ Manejar Valores Nulos

**¿Qué hace?**  
Completa automáticamente las celdas vacías en su dataset.

**Cuándo activarla**:
- ✓ Si su CSV tiene celdas vacías o datos faltantes
- ✓ Para evitar errores durante el análisis
- ✓ Cuando hay información incompleta en algunas filas

**Método**: El sistema rellena valores numéricos con promedios y valores de texto con el dato más frecuente.

#### 2️⃣ Normalizar Datos Numéricos

**¿Qué hace?**  
Ajusta todas las variables numéricas a una escala común.

**Cuándo activarla**:
- ✓ Si sus columnas tienen diferentes escalas (ej: 0-100 vs 0-1,000,000)
- ✓ Para mejorar la precisión del modelo
- ✓ Especialmente importante si elige Redes Neuronales o SVM

**Método**: Transforma los datos para que tengan rangos similares sin perder información.

#### 3️⃣ Codificar Variables Categóricas

**¿Qué hace?**  
Convierte texto en números para que el modelo pueda procesarlo.

**Ejemplo**:
- **Antes**: Región = "Norte", "Sur", "Este"
- **Después**: Región_Norte = 1 ó 0, Región_Sur = 1 ó 0, Región_Este = 1 ó 0

**Cuándo activarla**:
- ✓ Si su CSV tiene columnas con texto (partido, región, distrito, género)
- ✓ **Obligatorio** para que el modelo pueda usar estas variables
- ✓ Siempre recomendado en datos electorales

#### 4️⃣ Eliminar Duplicados

**¿Qué hace?**  
Identifica y elimina filas idénticas en el dataset.

**Cuándo activarla**:
- ✓ Si sospecha que hay registros repetidos
- ✓ Cuando los datos provienen de múltiples fuentes
- ✓ Para garantizar que cada registro sea único

### Cómo Configurar las Opciones

#### Paso 1: Revisar las Opciones

1. Lea la descripción de cada operación
2. Evalúe cuáles son necesarias para sus datos
3. Haga clic en los **checkboxes** para activar (✓) o desactivar (⬜)

💡 **Recomendación**: Active las 4 opciones para un análisis óptimo.

#### Paso 2: Verificar el Archivo

En la parte inferior verá un resumen del archivo cargado:

```
📁 Archivo cargado
datos_electorales_2024.csv
223,452 registros • 15 columnas
```

Confirme que corresponde al archivo que desea analizar.

#### Paso 3: Continuar

1. Haga clic en **"Continuar a Selección de Modelo"** (esquina inferior derecha)
2. Aparecerá una notificación verde: "Opciones de limpieza aplicadas correctamente"
3. Será redirigido automáticamente a la página de selección de modelo

### Configuraciones Recomendadas

**Para la mayoría de análisis** (recomendado):
- ✓ Manejar valores nulos
- ✓ Normalizar datos numéricos
- ✓ Codificar variables categóricas
- ✓ Eliminar duplicados

**Si sus datos ya están limpios**:
- ✓ Normalizar datos numéricos (siempre recomendado)
- ✓ Codificar variables categóricas (obligatorio si hay texto)
- ⬜ Las demás según necesidad

---

## Selección de Modelo

### Descripción General

En esta página puede elegir el modelo de análisis que se aplicará a sus datos. El sistema ofrece 5 algoritmos diferentes, cada uno con características distintas según el tipo de análisis que desee realizar.

**Acceso**: Ruta `/config` (requiere haber completado la carga de datos y configuración de limpieza)

### Elementos de la Interfaz

La página muestra:

- **Título**: "Selección de Modelo"
- **Descripción**: Instrucciones sobre los modelos disponibles
- **Selector desplegable**: Menú con 5 opciones de modelos
- **Panel informativo**: Detalles del modelo seleccionado
- **Barra de progreso**: Aparece durante el procesamiento
- **Botón "Ejecutar Análisis"**: Inicia el análisis con el modelo elegido

### Modelos Disponibles

#### 1️⃣ Regresión Logística

**Características**:
- ⚡ Velocidad: Muy rápida
- 🎯 Precisión: Buena
- 📊 Complejidad: Baja

**Recomendado para**:
- Análisis exploratorio rápido
- Datasets pequeños o medianos
- Primeras aproximaciones al problema

#### 2️⃣ Random Forest

**Características**:
- ⚡ Velocidad: Rápida
- 🎯 Precisión: Muy buena
- 📊 Complejidad: Media

**Recomendado para**:
- Análisis de producción estándar
- Balance entre precisión y velocidad
- Datasets medianos a grandes

#### 3️⃣ Red Neuronal

**Características**:
- ⚡ Velocidad: Media
- 🎯 Precisión: Excelente
- 📊 Complejidad: Alta

**Recomendado para**:
- Máxima precisión predictiva
- Datasets muy grandes (>100,000 registros)
- Patrones complejos en los datos

#### 4️⃣ Gradient Boosting

**Características**:
- ⚡ Velocidad: Media
- 🎯 Precisión: Excelente
- 📊 Complejidad: Alta

**Recomendado para**:
- Análisis de máxima precisión
- Datasets medianos con relaciones complejas
- Cuando se necesita la mejor performance posible

#### 5️⃣ Support Vector Machine (SVM)

**Características**:
- ⚡ Velocidad: Media
- 🎯 Precisión: Muy buena
- 📊 Complejidad: Media

**Recomendado para**:
- Datasets con muchas variables
- Problemas de clasificación binaria o multiclase
- Datasets pequeños a medianos

### Tabla Comparativa Rápida

| Modelo | Velocidad | Precisión | Mejor Para |
|--------|-----------|-----------|------------|
| Regresión Logística | ⚡⚡⚡⚡⚡ | ⭐⭐⭐ | Análisis rápido |
| Random Forest | ⚡⚡⚡⚡ | ⭐⭐⭐⭐ | Uso general |
| Red Neuronal | ⚡⚡ | ⭐⭐⭐⭐⭐ | Máxima precisión |
| Gradient Boosting | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | Competiciones |
| SVM | ⚡⚡⚡ | ⭐⭐⭐⭐ | Alta dimensionalidad |

### Cómo Ejecutar el Análisis

#### Paso 1: Seleccionar el Modelo

1. Haga clic en el **selector desplegable** (menú dropdown)
2. Se mostrará la lista de 5 modelos disponibles
3. Lea las opciones y seleccione el modelo que mejor se adapte a sus necesidades
4. Haga clic sobre su elección

#### Paso 2: Revisar la Información

Una vez seleccionado, aparecerá un panel informativo con:

```
📊 Modelo seleccionado
[Descripción del modelo y sus características principales]
```

Revise esta información para confirmar que el modelo elegido es el adecuado.

#### Paso 3: Iniciar el Análisis

1. Haga clic en el botón **"Ejecutar Análisis"** (esquina inferior derecha)
2. El botón mostrará un ícono de reproducción (▶️)
3. El proceso iniciará inmediatamente

#### Paso 4: Seguimiento del Progreso

Durante el procesamiento verá:

**Indicadores visuales**:
- El botón cambia a **"Procesando..."** con un spinner animado
- Aparece un **card de progreso** mostrando:
  - Ícono de carga animado
  - Mensaje: "Procesando análisis..."
  - **Barra de progreso** (de 0% a 100%)
  - Texto: "Este proceso puede tomar unos momentos. Por favor espere."

**Notificaciones informativas**:
Durante el proceso verá mensajes como:
1. "Validando datos..."
2. "Limpiando datos..."
3. "Normalizando variables..."
4. "Entrenando modelo..."
5. "Generando predicciones..."

💡 **Tiempo aproximado**: El proceso toma entre 5-10 segundos dependiendo del tamaño de sus datos y el modelo seleccionado.

#### Paso 5: Finalización

Al completarse:
1. La barra de progreso alcanza 100%
2. Aparece una notificación verde: **"Proceso completado - El análisis se ha realizado exitosamente"**
3. Después de 1 segundo, será **redirigido automáticamente** al Dashboard de Resultados

### Recomendaciones por Escenario

**Si es su primer análisis**:
- Comience con **Regresión Logística** para resultados rápidos
- Luego pruebe **Random Forest** para comparar

**Si busca resultados definitivos**:
- Use **Gradient Boosting** o **Red Neuronal**
- Asegúrese de tener suficientes datos (>50,000 registros)

**Si tiene pocos datos** (<10,000 registros):
- Prefiera **Regresión Logística** o **SVM**
- Evite Redes Neuronales (requieren muchos datos)

### Solución de Problemas

| Mensaje | Significado | Acción |
|---------|-------------|--------|
| "No hay datos cargados" | No completó el paso de carga | Vaya a `/upload` y cargue un archivo |
| "Seleccione un modelo de análisis" | No eligió ningún modelo | Seleccione un modelo del dropdown |
| "Error al entrenar el modelo" | Problema con los datos o configuración | Verifique su CSV y vuelva a cargar |

---

## Dashboard de Resultados

### Descripción General

El Dashboard es la **página final** donde puede visualizar todos los resultados del análisis electoral. Presenta métricas clave, gráficos interactivos y un resumen completo de los datos procesados.

**Acceso**: Ruta `/dashboard` (requiere haber completado todo el flujo de análisis)

### Estructura del Dashboard

El dashboard está organizado en **5 secciones** visuales:

#### 📊 1. Encabezado

**Ubicación**: Parte superior

**Elementos**:
- **Título**: "Dashboard Analítico Electoral"
- **Subtítulo**: "Resultados del análisis procesado"
- **Badge del modelo**: Muestra qué modelo se utilizó (ej: "Modelo: Random Forest")

#### 📈 2. Tarjetas de Métricas (4 tarjetas)

**Diseño**: 4 tarjetas en fila (apiladas en móvil)

**Tarjeta 1: Total de Votantes**
- Ícono: 👥
- Valor: Ej. "13,770,000"
- Subtexto: Comparación con elección anterior

**Tarjeta 2: Tasa de Participación**
- Ícono: 📈
- Valor: Ej. "78.3%"
- Subtexto: Evaluación cualitativa

**Tarjeta 3: Mesas Escrutadas**
- Ícono: 📄
- Valor: Ej. "95.7%"
- Subtexto: Progreso del conteo (ej: "23,452 de 24,501 mesas")

**Tarjeta 4: Precisión del Modelo**
- Ícono: 🎯
- Valor: Ej. "94.2%"
- Subtexto: Nombre del modelo usado

**Interpretación de las métricas**:
- **Participación >70%**: Alta participación ciudadana ✓
- **Precisión >90%**: Predicciones muy confiables ✓
- **Mesas >95%**: Datos casi completos ✓

#### 👥 3. Candidatos Principales

**Ubicación**: Debajo de las métricas

**Contenido**:
- Lista o tabla de candidatos líderes
- Votos obtenidos por cada uno
- Porcentajes de votación
- Ranking de posiciones

**Propósito**: Identificar rápidamente los candidatos con mayor apoyo.

#### 📊 4. Gráficos Interactivos (4 gráficos)

**Diseño**: 2 columnas en pantallas grandes, apilados en móvil

**Gráfico 1: Distribución de Votos por Región** (Barras)
- **Muestra**: Votos por región geográfica
- **Eje X**: Nombres de regiones
- **Eje Y**: Número de votos
- **Interacción**: Pase el cursor sobre las barras para ver valores exactos

**Interpretación**:
- Compare participación entre regiones
- Identifique zonas con mayor actividad electoral

**Gráfico 2: Evolución de Participación Electoral** (Líneas)
- **Muestra**: Tendencia histórica de participación
- **Eje X**: Años electorales
- **Eje Y**: Porcentaje de participación
- **Interacción**: Pase el cursor sobre los puntos para ver valores

**Interpretación**:
- Analice tendencias temporales
- Identifique patrones de crecimiento o decrecimiento

**Gráfico 3: Porcentaje de Votos por Partido** (Circular)
- **Muestra**: Distribución proporcional de votos
- **Formato**: Gráfico de pastel con sectores de colores
- **Interacción**: Pase el cursor sobre sectores para ver porcentajes exactos

**Interpretación**:
- Identifique al partido ganador
- Observe fragmentación electoral
- Detecte distribución de preferencias

**Gráfico 4: Métricas de Precisión del Modelo** (Radial)
- **Muestra**: 3 métricas de calidad del modelo
  - **Accuracy** (Precisión): % de predicciones correctas
  - **Recall** (Exhaustividad): % de casos detectados
  - **F1-Score**: Balance entre precisión y recall
- **Formato**: Gráficos circulares de progreso

**Interpretación de valores**:
- >90%: Excelente ✓
- 80-90%: Bueno ✓
- 70-80%: Aceptable ⚠
- <70%: Bajo ✗

#### 📋 5. Resumen del Análisis

**Ubicación**: Parte inferior del dashboard

**Información mostrada**:
- **Archivo procesado**: Nombre del CSV cargado
- **Registros analizados**: Número de filas procesadas (con separadores de miles)
- **Variables consideradas**: Número de columnas utilizadas
- **Modelo utilizado**: Algoritmo seleccionado
- **Conclusión**: Mensaje de éxito y resumen del análisis

**Ejemplo**:
```
Resumen del Análisis

Archivo procesado: datos_electorales_2024.csv
Registros analizados: 223,452
Variables consideradas: 28
Modelo utilizado: Random Forest

El análisis se completó exitosamente. Los resultados muestran patrones
significativos en la distribución electoral y alta precisión en las
predicciones del modelo.
```

### Navegación desde el Dashboard

Desde esta página puede:

**Volver al inicio**:
- Haga clic en el logo ONPE (esquina superior izquierda)

**Ejecutar un nuevo análisis**:
1. Vaya a `/upload` (carga de datos)
2. Cargue un nuevo archivo CSV
3. Complete el flujo nuevamente

**Cerrar sesión**:
- Haga clic en **"Cerrar Sesión"** (esquina superior derecha)

⚠️ **Importante**: Al ejecutar un nuevo análisis, los resultados actuales serán reemplazados completamente.

### Cómo Interpretar los Resultados

#### Escenarios Comunes

**Participación Alta + Precisión Alta + Mesas >95%**:
- ✓ Análisis confiable y completo
- ✓ Resultados representativos
- ✓ Predicciones sólidas

**Participación Baja (<60%)**:
- ⚠ Resultados menos representativos
- ⚠ Mayor sesgo posible
- Considere investigar causas de baja participación

**Precisión Baja (<80%)**:
- ⚠ Predicciones menos confiables
- Considere: cambiar de modelo, limpiar mejor los datos, o agregar más variables

**Gráfico de barras muy desigual**:
- Puede indicar concentración de votos en ciertas regiones
- Oportunidad para análisis regionalizado

**Gráfico de línea con tendencia decreciente**:
- Alerta: disminución del compromiso electoral
- Requiere estrategias de motivación ciudadana

---

## Preguntas Frecuentes

### Sobre el Acceso

**P: ¿Cómo puedo iniciar sesión como administrador?**  
R: Use sus credenciales de administrador (correo y contraseña) en la página de login. Solo usuarios con rol de administrador pueden acceder al panel de análisis.

**P: ¿Mi sesión expira?**  
R: Sí, por seguridad las sesiones tienen un tiempo de expiración. Deberá iniciar sesión nuevamente si no hay actividad por un período prolongado.

**P: ¿Puedo usar el sistema desde mi teléfono?**  
R: Sí, todas las páginas son responsive y funcionan en móviles. Sin embargo, se recomienda una pantalla más grande para mejor visualización de gráficos y tablas.

### Sobre el Flujo de Trabajo

**P: ¿Debo seguir el orden: Carga → Limpieza → Modelo → Dashboard?**  
R: Sí, el flujo es secuencial y obligatorio. No puede saltarse pasos. Si intenta acceder a una página posterior sin completar las anteriores, será redirigido automáticamente.

**P: ¿Puedo cambiar de modelo después de ejecutar el análisis?**  
R: Sí, puede volver a `/config`, seleccionar otro modelo y ejecutar el análisis nuevamente. Los resultados anteriores serán reemplazados.

**P: ¿Qué pasa si cierro el navegador durante el procesamiento?**  
R: El proceso se interrumpirá y deberá iniciarlo nuevamente desde `/config`. Los datos de carga y limpieza se mantienen en memoria mientras no cierre el navegador.

### Sobre la Carga de Datos

**P: ¿Cuál es el tamaño máximo de archivo que puedo cargar?**  
R: Se recomienda archivos de hasta 50 MB. Para datasets más grandes, considere dividirlos o usar submuestreo.

**P: ¿Puedo cargar archivos Excel (.xlsx)?**  
R: No directamente. Debe convertir el archivo a CSV primero usando Excel: Archivo → Guardar como → CSV (delimitado por comas).

**P: ¿El sistema guarda mi archivo?**  
R: El archivo se carga en memoria temporal para el análisis. No se almacena permanentemente. Si cierra el navegador, deberá volver a cargarlo.

### Sobre la Limpieza de Datos

**P: ¿Qué pasa si no activo ninguna opción de limpieza?**  
R: El modelo intentará trabajar con los datos crudos, lo que puede resultar en errores. Se recomienda activar al menos "Codificar variables categóricas".

**P: ¿Puedo desactivar la limpieza de datos?**  
R: No puede saltarse esta página, pero puede desmarcar todas las opciones y continuar. Sin embargo, esto puede afectar la calidad del análisis.

### Sobre los Modelos

**P: ¿Qué modelo debo elegir si no sé cuál usar?**  
R: Para comenzar, use **Random Forest**. Es versátil y funciona bien en la mayoría de casos. Si necesita máxima precisión, pruebe **Gradient Boosting** o **Red Neuronal**.

**P: ¿Puedo comparar resultados de múltiples modelos?**  
R: Actualmente no hay funcionalidad de comparación integrada. Debe ejecutar cada modelo por separado y anotar manualmente las métricas.

**P: ¿Por qué la precisión de mi modelo es baja (<70%)?**  
R: Posibles causas: datos de baja calidad, pocas observaciones, variables poco relevantes, o modelo inapropiado para el tipo de datos.

### Sobre el Dashboard

**P: ¿Los datos del dashboard son reales?**  
R: Los números y gráficos de ejemplo (13,770,000 votantes, regiones, etc.) son datos de demostración. La estructura muestra cómo se verían sus resultados reales una vez procesados.

**P: ¿Puedo descargar los resultados?**  
R: Actualmente puede hacer capturas de pantalla. La funcionalidad de exportación a PDF o Excel está planificada para futuras versiones.

**P: ¿Puedo compartir el dashboard con otras personas?**  
R: Actualmente no hay funcionalidad de compartir. El dashboard solo es visible para administradores autenticados.

### Solución de Problemas

**P: El dashboard no carga después del análisis, ¿qué hago?**  
R: 
1. Refresque la página (F5)
2. Vuelva a `/config` y ejecute el análisis nuevamente
3. Si persiste, limpie la caché del navegador

**P: No veo mis datos en la vista previa, ¿por qué?**  
R:
- Verifique que el archivo sea realmente CSV
- Asegúrese de que tenga encabezados en la primera fila
- Intente abrir el CSV en Excel y guardarlo nuevamente

**P: El botón "Ejecutar Análisis" está deshabilitado, ¿por qué?**  
R: Posibles causas:
- No ha seleccionado ningún modelo del dropdown
- No hay datos cargados en memoria
- Ya hay un análisis en progreso

---

## Soporte Técnico

### ¿Necesita ayuda?

Si experimenta problemas, prepare la siguiente información antes de contactar soporte:

1. Descripción detallada del problema
2. Página donde ocurrió el error (`/upload`, `/cleaning`, `/config`, `/dashboard`)
3. Navegador y versión que está usando
4. Capturas de pantalla del error (si aplica)
5. Pasos que realizó antes del problema

### Navegadores Compatibles

El sistema funciona en navegadores modernos:
- Google Chrome (versión 90+)
- Mozilla Firefox (versión 88+)
- Safari (versión 14+)
- Microsoft Edge (versión 90+)

---

**Manual de Usuario - Panel de Administración**  
**ONPE Insight Dash**  
**Versión**: 1.0  
**Última actualización**: 2025
