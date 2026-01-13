# Landing Page - Generación de Ads con IA (Next.js)

Landing page moderna construida con Next.js para vender servicios de generación de anuncios con inteligencia artificial.

## 🚀 Características

- ✨ **Next.js 14** con App Router
- ⚛️ **React 18** con TypeScript
- 🎨 **Tema negro y dorado** elegante y moderno
- 🎬 **Animaciones de scroll reveal** con Framer Motion
- 📱 **Diseño completamente responsivo**
- 🖼️ **Optimización de imágenes** con Next.js Image
- ⚡ **Rendimiento optimizado** y SEO-friendly

## 📋 Requisitos Previos

- Node.js 18+ 
- npm, yarn o pnpm

## 🛠️ Instalación

1. **Instala las dependencias:**
```bash
npm install
# o
yarn install
# o
pnpm install
```

2. **Ejecuta el servidor de desarrollo:**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

3. **Abre tu navegador en:**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
newgencylanding/
│
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
│
├── components/              # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx     # Componente de animaciones
│
├── public/
│   └── assets/
│       ├── images/          # Coloca tus imágenes aquí
│       └── video/           # Coloca tus videos aquí
│
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🖼️ Agregar Imágenes y Videos

### Imágenes
Coloca tus imágenes en `public/assets/images/`:
- `about-image.jpg` - Sección "Sobre Nosotros"
- `portfolio-1.jpg`, `portfolio-2.jpg`, `portfolio-3.jpg` - Portafolio
- `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg` - Testimonios

### Videos
Coloca tus videos en `public/assets/video/`:
- `hero-video.mp4` - Video de fondo del Hero
- `portfolio-video-1.mp4` - Video de ejemplo en portafolio

**Nota:** Si no colocas las imágenes/videos, la página mostrará placeholders automáticos.

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `app/globals.css`:
```css
:root {
  --color-gold: #d4af37;
  --color-black: #000000;
  /* ... más colores */
}
```

### Modificar Contenido
- **Textos:** Edita los componentes en `components/`
- **Servicios:** Modifica el array `services` en `components/Services.tsx`
- **Testimonios:** Modifica el array `testimonials` en `components/Testimonials.tsx`

### Configurar Formulario de Contacto
Edita `components/Contact.tsx` para conectar el formulario con tu backend o servicio de email.

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel
```

### Otras Plataformas
```bash
npm run build
npm start
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Framer Motion** - Animaciones
- **CSS Modules** - Estilos modulares
- **Next.js Image** - Optimización de imágenes

## 📱 Responsive Design

La landing page está completamente optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 Características de SEO

- Metadata optimizada
- Estructura semántica HTML5
- Imágenes con alt text
- URLs amigables

## 📝 Licencia

Este proyecto es de uso libre para tus propios proyectos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de hacer un fork y crear un pull request.

---

**Desarrollado con ❤️ usando Next.js**



