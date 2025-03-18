# Frontend - Gestión de Productos

Este proyecto es una aplicación web para la gestión de productos, desarrollada con **React, Next.js, TypeScript, Vite y Tailwind CSS**. Permite agregar, visualizar, buscar, filtrar, paginar y eliminar productos con una experiencia de usuario optimizada.

## 🚀 Características

✅ **Agregar productos** con los campos: Código, Nombre, Descripción, Cantidad y Fecha de creación.
✅ **Visualización en lista** de los productos registrados.
✅ **Paginación** de 5 productos por página.
✅ **Búsqueda y filtros** por código, nombre, cantidad y fecha de creación.
✅ **Eliminación de productos** con una confirmación previa utilizando SweetAlert2.
✅ **Interfaz responsive** optimizada para dispositivos móviles y escritorio.
✅ **Diseño moderno y atractivo** con Tailwind CSS.

---

## 📦 Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1️⃣ Clonar el repositorio
```bash
git clone git@github.com:Florez264/Front-products-basic.git
cd Front-products-basic
```

### 2️⃣ Instalar dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
```bash
npm install
```

---

## 🚀 Ejecución del Proyecto
Para iniciar el entorno de desarrollo, ejecuta:
```bash
npm run dev
```
Luego, abre **http://localhost:5173/** en tu navegador para ver la aplicación en acción.

---

## 📌 Tecnologías Utilizadas

| Tecnología  | Descripción |
|-------------|------------|
| **Vite** | Herramienta de construcción rápida para aplicaciones React |
| **React** | Librería para la construcción de interfaces de usuario |
| **Next.js** | Framework de React con SSR y generación de sitios estáticos |
| **TypeScript** | Superconjunto tipado de JavaScript |
| **Tailwind CSS** | Framework de CSS para un diseño moderno y responsivo |
| **React Icons** | Conjunto de iconos para mejorar la UI |
| **SweetAlert2** | Alertas modales atractivas para confirmaciones y mensajes |

---

## 📌 Dependencias Principales
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "latest",
    "tailwindcss": "^3.3.0",
    "react-icons": "^4.10.1",
    "sweetalert2": "^11.7.3"
  }
}
```

---

## 📸 Capturas de Pantalla

### 🏠 Página Principal
> **(Aquí puedes agregar imágenes de la aplicación)**

### 📋 Modal para Agregar Productos
> **(Imagen del formulario en modal)**

### 🔍 Búsqueda y Filtros
> **(Imagen mostrando la búsqueda y filtros en acción)**

### 🚮 Confirmación de Eliminación con SweetAlert2
> **(Imagen de la alerta de confirmación)**

---

## 🛠️ Cómo Contribuir
Si deseas contribuir al proyecto, sigue estos pasos:

1. **Fork** el repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz **commit** (`git commit -m "Añadir nueva funcionalidad"`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un **Pull Request**.

---

## 📄 Licencia
Este proyecto está bajo la licencia **MIT**. Puedes usarlo y modificarlo libremente.

📌 **Autor:** [Juan Carlos Atencio Florez](https://github.com/Florez264) 🚀





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
