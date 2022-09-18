# NVM

## Documentación

https://github.com/nvm-sh/nvm

## Instalación

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

## Comandos

Listar todas las versiones de disponibles para descargar e instalar:

```sh
nvm ls-remote
```

Instalar la última versión de Node.js:

```sh
nvm install node # "node" es un alias a la última versión
```

Instalar una versión especifica de Node.js:

```sh
nvm install 6.14.4 # o 10.10.0, 8.9.1, etc
```

La primera versión instalada se convierte en la versión por defecto (`nvm alias default`).

Cambiar la versión por defecto:

```sh
nvm alias default 16.0.2
```

Listar las versiones de Node.js instaladas:

```sh
nvm list
```

Cambiar una versión de Node.js concreta:

```sh
nvm use 16.2.0 # node para cambiar a la última versión
node --version
```

Ejecutar un comando en Node.js usando una versión específica sin cambiar a ella primero:

```sh
nvm run 16.0.2 --version
```

Desinstalar una versión en concreto:

```sh
nvm uninstall 16.0.2
```
