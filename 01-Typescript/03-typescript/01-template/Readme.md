# Configurar tsconfig.json

## files

Lista de ficheros a incluir en la compilación

```json
{
    "compilerOptions": {},
    "files": ["core.ts", "sys.ts", "types.ts", "scanner.ts"]
}
```

## extends

Heredar una configuración base sobre la que aplicar cambios

```json
{
    "extends": "./configs/base",
    "compilerOptions": {
        "strictNullChecks": false
    },
    "files": ["main.ts", "supplemental.ts"]
}
```

## include

Array con la lista de ficheros o patrón que identifique a los ficheros que se van a incluir en la compilación

```json
{
    "include": ["src/**/*", "tests/**/*"]
}
```

## exclude

Array con la lista de ficheros o patrón que identifique a los ficheros que se van a excluir de la lista de include

```json
{
    "exclude": ["node_modules"]
}
```

## compilerOptions

### outDir

Especifica el dirtectorio donde se guardarán los resultados de la compilación

### module

Especifica el tipo de módulos que estamos usando en el programa. Si queremos generar código ES5 o ES3 usaremos CommonJS

### moduleResolution

Especifica como debe hacer la resolución de módulos, node para Node.js y classic para el resto de tipos

### target

Versión de Javascript a la que se va a compilar

### lib

Especifica las bibliotecas y apis que queremos tener disponibles, por ejemplo ES2018 nos permite usar finally en las promesas

### declaration

Genera un fichero de tipos para cada fichero encontrado

### noImplicitAny

Avisa cunado un tipo no ha sido declarado y no es capaz de inferirlo, desactivado asignará any a esta clase de tipos

### noUnusedLocals

Avisa de variables locales que no se están usando

### resolveJSONModule

Permite importar un fichero json

### strict

Habilita una amplia gama de comportamientos de verificación de tipos que dan como resultado mayores garantías de corrección del programa. Activar esto equivale a habilitar todas las opciones de la familia de modo estricto. Las futuras versiones de TypeScript pueden introducir un control más estricto bajo esta propiedad, por lo que las actualizaciones de TypeScript pueden resultar en nuevos errores de tipo en su programa

# Documentación

https://www.typescriptlang.org/tsconfig
