# NVM-WINDOWS

## Documentación

https://github.com/coreybutler/nvm-windows

## Instalación

Descargar el instalador e instalar

```sh
https://github.com/coreybutler/nvm/releases
```

## Comandos

Comprobar la arquitectra del equipo, 32 o 64:

```sh
nvm arch
```

Listar todas las versiones de disponibles para descargar e instalar:

```sh
nvm list available [32|64|all]
```

Instalar la última versión de Node.js:

```sh
nvm install latest [arch] # "latest" es un alias a la última versión
```

Instalar una versión especifica de Node.js:

```sh
nvm install 6.14.4 [arch] # o 10.10.0, 8.9.1, etc
```

Listar las versiones de Node.js instaladas:

```sh
nvm list
```

Cambiar una versión de Node.js concreta:

```sh
nvm use 16.2.0 [] # node para cambiar a la última versión
node --version
```

Desinstalar una versión en concreto:

```sh
nvm uninstall 16.0.2
```
