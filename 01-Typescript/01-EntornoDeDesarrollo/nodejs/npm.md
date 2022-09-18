# Comandos básicos de NPM

## Crear un proyecto

```
npm init
```

## Instalar dependencias

```
npm (i)nstall [-g] [--save-dev, -D] [--no-save] <package-name>@<version>

```

## Actualizar dependencias según sus reglas de semver

```
npm update [--no-save]

npm update package-name
```

## Ejecutar scripts

```
npm run script-name
```

## Ruta a node_modules

```
npm root
npm root -g
```

## Listado de dependencias

```
npm list [-g] [--depth=N]

npm list <package-name>
```

## Información sobre dependencias

```
npm (v)iew package-name [version]
```

## Dependencias desactualizadas

```
npm outdated
```

## Eliminar una dependencia

```
npm uninstall [-g] [--save] <package-name>
```

### npm-check-updates

```
npm i npm-check-updates
ncu
ncu -u
npm i
```
