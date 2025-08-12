# Client Theme Usage Guide

## 🎨 Complete Client Theme with Dark/Light Mode

Your client's custom theme has been added **alongside** the existing theme. All original colors and functionality remain unchanged.

## 🌙 Dark/Light Mode Support

The client theme automatically adapts to dark/light mode:

### useClientTheme Hook
```jsx
import useClientTheme from "@/hooks/useClientTheme";

function MyComponent() {
  const { 
    isClientThemeEnabled,
    clientButton,
    clientCard,
    getClientClasses,
    toggleClientTheme 
  } = useClientTheme();

  return (
    <div>
      {/* Toggle client theme */}
      <button onClick={() => toggleClientTheme()}>
        {isClientThemeEnabled ? 'Disable' : 'Enable'} Client Theme
      </button>
      
      {/* Use client button styles */}
      <button className={clientButton.primary}>
        Primary Button (auto dark/light)
      </button>
    </div>
  );
}
```

### Automatic CSS Variables (Recommended)
```jsx
// These automatically switch in dark/light mode:
<button className="btn-client-primary">Auto Dark/Light Button</button>
<div className="card-client">Auto Dark/Light Card</div>
<p className="client-text-primary">Auto Dark/Light Text</p>
```

### Client Navy Colors (Primary - #0F2D53)
```jsx
// Usage examples:
<div className="bg-clientNavy-500 text-white">Primary Button Color</div>
<div className="bg-clientNavy-700 text-white">Darker Shade</div>
<div className="bg-clientNavy-200 text-clientNavy-700">Light Background</div>
```

### Client Blue Colors (Secondary - #3BAFF3)  
```jsx
// Usage examples:
<div className="bg-clientBlue-500 text-white">Secondary Color</div>
<div className="bg-clientBlue-700 text-white">Darker Blue</div>
<div className="bg-clientBlue-200 text-clientBlue-700">Light Blue Background</div>
```

### Client Brand Colors (Direct Mapping)
```jsx
// Direct client colors:
<button className="bg-clientBrand-navy hover:bg-clientBrand-hoverBlue text-white">
  Primary Button (#0F2D53 → #3888E1 on hover)
</button>

<div className="bg-clientBrand-ghost text-clientBrand-navy">
  Ghost Background (#F4F4FF)
</div>

<div className="text-clientBrand-green">
  Success Green (#7DCF0F)
</div>
```

### Client Green (Success - #7DCF0F)
```jsx
// Success states:
<div className="bg-clientGreen-500 text-white">Success Button</div>
<div className="text-clientGreen-500">Success Text</div>
```

## 📝 New Client Fonts Added

### Lexend (Primary Font - for headings)
```jsx
// Usage examples:
<h1 className="font-lexend font-black text-4xl text-clientNavy-500">
  Main Heading
</h1>

<h2 className="font-lexend font-extrabold text-2xl text-clientNavy-700">
  Subheading  
</h2>
```

### Proxima Nova (Secondary Font - for body text)
```jsx
// Usage examples:
<p className="font-proximaNova font-normal text-gray-600">
  Body text content
</p>

<label className="font-proximaNova font-semibold text-clientNavy-600">
  Form Label
</label>
```

## 🚀 Complete Button Examples

```jsx
// Primary client button
<Button className="bg-clientNavy-500 hover:bg-clientBrand-hoverBlue text-white font-lexend font-semibold">
  Primary Action
</Button>

// Secondary client button  
<Button className="bg-clientBlue-500 hover:bg-clientBlue-600 text-white font-proximaNova">
  Secondary Action
</Button>

// Success button
<Button className="bg-clientGreen-500 hover:bg-clientGreen-600 text-white">
  Success Action
</Button>

// Ghost button
<Button className="bg-clientBrand-ghost text-clientNavy-500 border border-clientNavy-500 hover:bg-clientNavy-500 hover:text-white">
  Ghost Button
</Button>
```

## 🎯 Card Examples

```jsx
// Client themed card
<Card className="bg-clientBrand-ghost border border-clientNavy-200">
  <h3 className="font-lexend font-semibold text-clientNavy-500">Card Title</h3>
  <p className="font-proximaNova text-gray-600">Card content</p>
</Card>

// Client navy card
<Card className="bg-clientNavy-500 text-white">
  <h3 className="font-lexend font-semibold">White Text on Navy</h3>
  <p className="font-proximaNova">Content with white text</p>
</Card>
```

## 📋 Available Colors

### clientNavy (Navy Blue #0F2D53)
- `clientNavy-50` to `clientNavy-900` (9 shades)

### clientBlue (Light Blue #3BAFF3)  
- `clientBlue-50` to `clientBlue-900` (9 shades)

### clientGreen (Success Green #7DCF0F)
- `clientGreen-50` to `clientGreen-900` (9 shades)

### clientBrand (Direct Colors)
- `clientBrand-navy` (#0F2D53)
- `clientBrand-darkNavy` (#12395E)  
- `clientBrand-hoverBlue` (#3888E1)
- `clientBrand-lightBlue` (#3BAFF3)
- `clientBrand-green` (#7DCF0F)
- `clientBrand-ghost` (#F4F4FF)
- `clientBrand-white` (#FFFFFF)

## 📝 Available Fonts

### font-lexend
- Use for headings, titles, display text
- Weights: `font-thin`, `font-normal`, `font-semibold`, `font-extrabold`, `font-black`

### font-proximaNova  
- Use for body text, paragraphs, UI text
- Weights: `font-thin`, `font-normal`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`

## ⚡ Quick Start

1. **Buttons**: Use `bg-clientNavy-500 hover:bg-clientBrand-hoverBlue`
2. **Headings**: Use `font-lexend` with client navy colors
3. **Body text**: Use `font-proximaNova` 
4. **Success**: Use `clientGreen-500`
5. **Light backgrounds**: Use `bg-clientBrand-ghost`

## 🔧 Font Setup

**Lexend**: Already imported via Google Fonts ✅

**Proxima Nova**: You need to:
1. Get Adobe Fonts (Typekit) license OR
2. Add font files to `/public/fonts/` folder
3. Uncomment the appropriate import in `app/scss/client-fonts.scss`

## ⚙️ Theme Configuration & Dark/Light Mode

### Enable Client Theme
In `configs/themeConfig.js`, set:
```javascript
clientTheme: {
  enabled: true,  // Enable client theme
  variant: "default", // or "dark" or "auto"
}
```

### useClientTheme Hook
```jsx
import useClientTheme from "@/hooks/useClientTheme";

function MyComponent() {
  const { 
    isClientThemeEnabled,
    clientButton,
    toggleClientTheme 
  } = useClientTheme();

  return (
    <button 
      className={clientButton.primary}
      onClick={() => toggleClientTheme()}
    >
      {isClientThemeEnabled ? 'Client Theme ON' : 'Client Theme OFF'}
    </button>
  );
}
```

### Automatic Dark/Light Mode CSS
```jsx
// These automatically adapt to dark/light mode:
<button className="btn-client-primary">Auto Button</button>
<div className="card-client">Auto Card</div>
<p className="client-text-primary">Auto Text Color</p>
<div className="client-bg-alt">Auto Background</div>
```

## 🔧 Advanced Client Theme Usage

### Dynamic Theme Classes
```jsx
const { getClientClasses } = useClientTheme();

<button className={getClientClasses('button', 'primary', 'fallback-class')}>
  Smart Button
</button>
```

### Theme-Aware Components
```jsx
function ClientCard({ children }) {
  const { isClientThemeEnabled } = useClientTheme();
  
  const cardClass = isClientThemeEnabled 
    ? "card-client" 
    : "bg-white border border-gray-200";
    
  return <div className={cardClass}>{children}</div>;
}
```

## ✨ All Original Colors & Fonts Remain Unchanged!

- All existing `primary-*`, `secondary-*`, `success-*` colors work as before
- `font-inter` still works as before  
- No existing components are affected
- Your client colors are additional options
- Client theme can be toggled on/off without breaking anything
