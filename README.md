# Documentación de VisualX

## Descripción General

**VisualX** es una librería React para la creación dinámica de formularios mediante esquemas. Permite generar interfaces de formulario completas a partir de objetos de configuración, soportando múltiples tipos de inputs y estilos personalizables.

- **Autor**: Junior Yohan Sordo García <juniorsordogarcia@gmail.com>
- **Licencia**: MIT
- **Versión**: 1.0.0

## Instalación

```bash
npm install visualx
```

## Características Principales

- ✅ Generación dinámica de formularios a partir de esquemas
- ✅ Soporte para múltiples tipos de inputs (texto, email, número, checkbox, radio, select, etc.)
- ✅ Estilos predefinidos: "futuristic" y "simple"
- ✅ Manejo de estado integrado
- ✅ Validación de formularios
- ✅ Componentes modulares y personalizables

## Estructura del Proyecto

```
├── src/
|   ├── core/           # Núcleo de la librería
|   ├── Forms/          # Componentes de formulario
|   ├── hooks/          # Hooks personalizados
|   └── index.ts        # Punto de entrada
└── styles/             # Estilos CSS
```

## Uso Básico

### Hook useForm

```tsx
import { useForm } from 'visualx';

function MyForm() {
  const [FormComponent, values, errors] = useForm(
    { name: '', email: '' }, // Valores iniciales
    { // Esquema
      name: { type: 'text', name: 'name', label: 'Nombre' },
      email: { type: 'email', name: 'email', label: 'Email' },
      submit: { type: 'submit', children: 'Enviar' }
    },
    'futuristic' // Estilo opcional
  );

  const handleSubmit = (values, errors) => {
    console.log('Valores:', values);
  };

  return <FormComponent onSubmit={handleSubmit} />;
}
```

### Componentes Individuales

```tsx
import { Input, Button, Select } from 'visualx';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <>
      <Input
        type="text"
        name="username"
        label="Usuario"
        value={value}
        onChange={setValue}
        styleType="futuristic"
      />
      <Button type="submit" styleType="futuristic">
        Enviar
      </Button>
    </>
  );
}
```

## Esquema de Formulario

El esquema define la estructura del formulario mediante un objeto donde cada clave representa un campo:

```typescript
type TSchema = Record<string, {
  type: HTMLInputTypeAttribute | 'textarea' | 'select' | 'radio-group';
  name: string;
  label: string;
  // ... otras props específicas del tipo
}>;
```

### Ejemplo de Esquema Completo

```typescript
const formSchema = {
  username: {
    type: 'text',
    name: 'username',
    label: 'Nombre de usuario',
    placeholder: 'Ingresa tu usuario'
  },
  email: {
    type: 'email',
    name: 'email',
    label: 'Correo electrónico'
  },
  password: {
    type: 'password',
    name: 'password',
    label: 'Contraseña'
  },
  gender: {
    type: 'radio-group',
    name: 'gender',
    label: 'Género',
    options: [
      { value: 'male', label: 'Masculino' },
      { value: 'female', label: 'Femenino' }
    ]
  },
  country: {
    type: 'select',
    name: 'country',
    label: 'País',
    options: [
      { value: 'us', text: 'Estados Unidos' },
      { value: 'mx', text: 'México' }
    ]
  },
  newsletter: {
    type: 'checkbox',
    name: 'newsletter',
    label: 'Suscribirse al newsletter',
    checked: false
  },
  bio: {
    type: 'textarea',
    name: 'bio',
    label: 'Biografía',
    placeholder: 'Cuéntanos sobre ti'
  },
  submit: {
    type: 'submit',
    children: 'Registrarse'
  }
};
```

## Tipos de Input Soportados

- **Textos**: `text`, `email`, `password`, `tel`
- **Números**: `number`, `range`
- **Fechas**: `date`, `datetime-local`, `month`, `time`, `week`
- **Archivos**: `file`, `image`
- **Selección**: `checkbox`, `radio`, `select`
- **Especiales**: `color`, `hidden`, `search`, `url`
- **Área de texto**: `textarea`
- **Botones**: `button`, `submit`, `reset`

## Estilos

### Futuristic
Estilo moderno con efectos visuales avanzados, bordes luminosos y animaciones.

### Simple
Estilo minimalista y limpio para interfaces más tradicionales.

### Personalización
Puedes extender los estilos modificando el archivo `forms.style.css` o añadiendo clases personalizadas mediante la prop `className`.

## API Reference

### Hook useForm

```typescript
function useForm(
  initialization: TData,
  schema: TSchema,
  styleType?: TStyle
): [React.FC<FormProps>, TData, Record<string, string | null>]
```

#### Parámetros:
- `initialization`: Objeto con los valores iniciales del formulario
- `schema`: Esquema que define la estructura del formulario
- `styleType`: Estilo visual opcional ('futuristic' | 'simple')

#### Retorno:
- `FormComponent`: Componente de formulario renderizable
- `values`: Valores actuales del formulario
- `errors`: Errores de validación actuales

### Componentes Principales

#### Input
```typescript
interface InputProps {
  type: 'text' | 'date' | 'email' | 'file' | 'number' | 'password' | 'phone' | 'checkbox';
  name: string;
  label: string;
  value?: string | number | boolean;
  onChange?: (value: string | number | File | boolean | null) => void;
  placeholder?: string;
  className?: string;
  styleType?: 'futuristic' | 'simple';
}
```

#### Button
```typescript
interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'futuristic' | 'simple';
  className?: string;
}
```

#### Select
```typescript
interface SelectProps {
  name: string;
  label: string;
  options: { value: string; text: string }[];
  value: string;
  onChange: (value: string) => void;
  styleType?: 'futuristic' | 'simple';
}
```

#### TextArea
```typescript
interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  styleType?: 'futuristic' | 'simple';
}
```

#### RadioGroup
```typescript
interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  styleType?: 'futuristic' | 'simple';
  className?: string;
  onChange: (value: string) => void;
}
```

## Ejemplos Avanzados

### Formulario con Validación Personalizada

```tsx
import { useForm } from 'visualx';

function ValidatedForm() {
  const [FormComponent, values, errors] = useForm(
    { email: '', password: '' },
    {
      email: { type: 'email', name: 'email', label: 'Email' },
      password: { type: 'password', name: 'password', label: 'Password' },
      submit: { type: 'submit', children: 'Login' }
    }
  );

  const validate = (values) => {
    const newErrors = {};
    if (!values.email) newErrors.email = 'Email es requerido';
    if (!values.password) newErrors.password = 'Password es requerido';
    return newErrors;
  };

  const handleSubmit = (values, errors) => {
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      // Procesar formulario
    } else {
      // Mostrar errores
    }
  };

  return <FormComponent onSubmit={handleSubmit} />;
}
```

### Formulario Dinámico con Condiciones

```tsx
function DynamicForm() {
  const [showExtra, setShowExtra] = useState(false);
  
  const schema = {
    name: { type: 'text', name: 'name', label: 'Nombre' },
    subscribe: { 
      type: 'checkbox', 
      name: 'subscribe', 
      label: 'Suscribirse',
      onChange: (checked) => setShowExtra(checked)
    },
    ...(showExtra && {
      email: { type: 'email', name: 'email', label: 'Email para newsletter' }
    }),
    submit: { type: 'submit', children: 'Enviar' }
  };

  const [FormComponent] = useForm({ name: '', subscribe: false }, schema);
  
  return <FormComponent onSubmit={(v) => console.log(v)} />;
}
```

## Personalización

### Extender Estilos

Puedes sobreescribir o extender los estilos modificando las variables CSS:

```css
:root {
  --base-200: #FF0000; /* Cambiar color principal a rojo */
  --violet: #0000FF;   /* Cambiar color de focus a azul */
}
```

### Crear Nuevos Tipos de Componentes

Extiende la clase `SchemaManager` para añadir soporte de nuevos componentes:

```typescript
class CustomSchemaManager extends SchemaManager {
  protected Generate(props: ISchemaGenerate): RenderSchema {
    if (props.element.type === 'custom-component') {
      return <CustomComponent {...props} />;
    }
    return super.Generate(props);
  }
}
```

## Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## Soporte

Si tienes preguntas o problemas, abre un issue en el repositorio o contacta al autor: Junior Yohan Sordo García <juniorsordogarcia@gmail.com>