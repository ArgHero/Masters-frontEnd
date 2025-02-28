# Página de Inicio de Sesión

Este proyecto es una página web de inicio de sesión que permite a los usuarios autenticarse y acceder a una página de inicio. La página de inicio de sesión valida las credenciales del usuario y, si son correctas, redirige al usuario a la página principal.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- `index.html`: Contiene el formulario de inicio de sesión.
- `home.html`: Página principal a la que se redirige al usuario después de iniciar sesión.
- `style.css`: Archivo de estilos CSS para la página de inicio de sesión y la página principal.
- `main.js`: Archivo JavaScript que maneja la lógica de inicio de sesión.
- `script.js`: Archivo JavaScript que maneja la generación de contraseñas en la página principal.


### Inicio de Sesión

- **Validación de Credenciales**: El archivo `main.js` contiene la función `logIn` que valida las credenciales del usuario.
- **Redirección**: Si las credenciales son correctas, el usuario es redirigido a `home.html`.

### Generador de Contraseñas

- **Generación de Contraseñas**: El archivo `script.js` contiene la función `generatePassword` que genera una contraseña basada en las opciones seleccionadas por el usuario.
- **Copia al Portapapeles**: La función `copiarTexto` permite al usuario copiar la contraseña generada al portapapeles.


### Inicio de Sesión

1. Abre `index.html` en tu navegador.
2. Ingresa tu nombre de usuario y contraseña.
3. Haz clic en el botón de inicio de sesión.
4. Si las credenciales son correctas, serás redirigido a `home.html`.

