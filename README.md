# Ejercicios de JavaScript 

* Ejecutar el comando:

```
npm install
```
Ese comando descarga todos los módulos de node necesarios en el directorrio node_modules.


* Ejecutar el siguiente comando

```
npm start
```

Se debe ejecutar el comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto para este proyecto es ```8081```. Para cambiarlo editar el ```package.json``` >> scripts. 


```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)


