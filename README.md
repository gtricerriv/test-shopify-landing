# **README - Componentes Shopify Liquid para Interfaz Bancaria "Untitled"**

## **📌 Vista General**
Este repositorio contiene componentes Shopify Liquid para el tema Dawn que implementan fielmente el diseño de la interfaz bancaria "Untitled" creado en [Figma](https://www.figma.com/design/BT8HX2ooNoITmjtz139o0r/Prueba-de-Maquetaci%C3%B3n?node-id=0-1&t=9Pl0wE9LJ4FgjpXI-1). Los componentes incluyen un header dinámico, sección hero con efecto glassmorfismo y sección de características responsive.

[![Figma](https://img.shields.io/badge/Ver_Diseño_Original-Figma-FF6B6B?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/BT8HX2ooNoITmjtz139o0r/Prueba-de-Maquetaci%C3%B3n?node-id=0-1&t=9Pl0wE9LJ4FgjpXI-1)

## **✨ Características Implementadas**

### **Header Bancario**
- Barra superior fija con efecto sticky
- Logo con gradiente morado-azul
- Menú hamburguesa funcional para mobile
- *Mejora propuesta: Efecto de transparencia inicial que se vuelve sólido al hacer scroll*

```liquid
<header class="fixed top-0 w-full z-50 transition-all duration-300 {{ scroll_position > 50 ? 'bg-[#121219]' : 'bg-transparent' }}">
  <!-- Contenido del header -->
</header>
```

### **Hero Section**
- Efecto glassmorfismo en tarjetas bancarias
- Texto con jerarquía visual clara
- Botones CTA con hover animations
- Diseño responsive mobile-first

### **Sección de Características**
- Grid adaptable (3 columnas desktop/1 móvil)
- Tarjetas con iconos circulares
- Efectos hover sutiles
- Enlaces "Learn more" interactivos

## **🎨 Sistema de Diseño**

### **Paleta de Colores**
| Elemento | Color HEX |
|----------|-----------|
| Fondo principal | `#0F1117` |
| Acento primario | `#3366FF` | 
| Acento secundario | `#7C5CFC` |
| Texto principal | `#FFFFFF` |
| Texto secundario | `#B3B8C4` |

### **Tipografía**
- **Font Family:** Inter (via Google Fonts)
- **Jerarquía:**
  - H1: 28px (mobile) / 36px (desktop), peso 700
  - H2: 24px, peso 600
  - Cuerpo: 16px, peso 400

## **🚀 Instalación**

1. Copiar el código del componente deseado
2. Personalizar desde el Editor de Temas

## **🔧 Mejoras Propuestas**

1. **Header Dinámico**
   - Implementar efecto de transparencia inicial que se vuelve sólido al hacer scroll
   - Añadir toggle en theme editor para activar/desactivar

2. **Efectos Avanzados**
   - Parallax para tarjetas en hero section
   - Animación de giro al hover en tarjetas

3. **Optimizaciones**
   - Lazy loading para imágenes
   - Critical CSS para mejor rendimiento

## **📌 Requisitos Técnicos**

- Shopify Dawn theme (v8.0+)
- Habilidado Google Fonts en theme.liquid
- Compatible con Shopify Online Store 2.0

## **📜 Licencia**
Código abierto para uso en temas Shopify. Modificaciones permitidas.

## **📬 Soporte**
Para problemas o contribuciones, abrir un issue en el repositorio.

[![Figma](https://img.shields.io/badge/Ver_Diseño_Completo-Figma-FF6B6B?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/BT8HX2ooNoITmjtz139o0r/Prueba-de-Maquetaci%C3%B3n?node-id=0-1&t=9Pl0wE9LJ4FgjpXI-1)