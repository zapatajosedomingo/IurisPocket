# IurisPocket 📚⚖️
**Biblioteca Jurídica de Panamá — App Android offline**

---

## Contenido
- Constitución Política de Panamá (1972)
- Código Civil (Ley N° 2 de 1916)
- Código de Comercio
- Código Penal (Ley N° 14 de 2007)
- Código Procesal Civil
- Ley 41 de 1998 — Ley General de Ambiente
- Diccionario Jurídico Elemental — Cabanellas

---

## Generar el APK (3 pasos)

### Requisitos previos
- [Node.js](https://nodejs.org) instalado ✅ (ya lo tienes)
- [Android Studio](https://developer.android.com/studio) instalado ✅ (ya lo tienes)
- Android SDK con API 34 (se instala desde Android Studio → SDK Manager)

### Pasos

**1. Abre una terminal en esta carpeta y ejecuta:**
```bash
npm install
npx cap add android
```

**2. Sincroniza los archivos web con Android:**
```bash
npx cap sync android
```

**3. Abre en Android Studio:**
```bash
npx cap open android
```

**4. Dentro de Android Studio:**
- Espera que Gradle sincronice (barra de progreso abajo)
- Menú: `Build → Generate Signed Bundle / APK`
- Selecciona: `APK`
- Clic en `Next` → `Create new...` para crear tu firma
- Llena los datos y guarda el keystore
- Selecciona `debug` (para uso personal) o `release`
- Clic en `Finish`
- El APK aparece en: `android/app/build/outputs/apk/debug/app-debug.apk`

**5. Instala en tu teléfono:**
- Copia el APK a tu celular
- En el celular: Configuración → Seguridad → Instalar apps de fuentes desconocidas ✅
- Abre el APK y dale Instalar

---

## Agregar más leyes en el futuro

1. Copia el archivo `.html` de la nueva ley a la carpeta `www/`
2. Abre `www/index.html` en un editor de texto
3. Busca `<!-- LEYES -->` y duplica una tarjeta `.card-row`
4. Cambia el nombre del archivo y la descripción
5. Vuelve a ejecutar `npx cap sync android` y compila el APK de nuevo

---

## Estructura del proyecto
```
IurisPocket/
├── www/                          ← Archivos de la app
│   ├── index.html                ← Pantalla principal (edita aquí)
│   ├── sw.js                     ← Service worker offline
│   ├── Constitucion_Panama.html
│   ├── Codigo_Civil_Panama.html
│   ├── Codigo_Comercio_Panama.html
│   ├── Codigo_Penal_Panama.html
│   ├── Codigo_Procesal_Civil_Panama.html
│   ├── Ley_41_1998_Ambiente_Panama.html
│   └── Diccionario_Juridico_Elemental_Cabanellas.html
├── android/                      ← Generado por Capacitor
├── capacitor.config.json
├── package.json
└── README.md
```

---

Desarrollado para uso académico personal · Panamá 🇵🇦
