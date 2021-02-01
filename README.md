# Prueba técnica de serverless, nodejs & aws

_Una prueba técnica para crear servicio POST Y GET en serverless para lambda de AWS_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira la sección de **Despliegue** para conocer como levantar el proyecto.


### Pre-requisitos 📋

_Tener instalado NODEJS y NPM_

* [https://www.npmjs.com/](https://www.npmjs.com/)
* [https://nodejs.org/es/](https://nodejs.org/es/)

### Instalación 🔧

_Ir a la raíz y ejecutar los siguientes comandos:_

_Instalar dependencias_

```
$ npm install
```

_Ejecutar serverless y seguir los pasos_

```
$ serverless
```
_Configura el serverless con las credenciales de AWS_

```
$ serverless config credentials --provider aws --key xxxxxxxxxx --secret xxxxxxxxxx
```

## Ejecutando las pruebas 

_El proyecto levantó tres servicios lambdas que pueden probar por [postman](https://www.postman.com/)_

_Este servicio GET cosume el api de swapi la cual se ha estructurado de una manera distinta. Por query se envian los parámetros **service** los cuales pueden ser: planets, films, people, species, starships, vehicles y **number** del 1 al 10_
```
GET - https://m5a3lvl36i.execute-api.us-east-1.amazonaws.com/dev?service=planets&number=1
```
_En este método POST se envía mediante query el **service** y **number** previsualizados en el GET anterior pero esta vez lo usarás para setear sus datos en el dynamodb_
```
POST - https://m5a3lvl36i.execute-api.us-east-1.amazonaws.com/dev?service=planets&number=1
```

_En este método GET se ejecuta sólo para visualizar los datos seteados por el POST anterior._

```
GET - https://m5a3lvl36i.execute-api.us-east-1.amazonaws.com/dev/my-data
```

### Testing ⚙️

_Para ejecutar pruebas unitarias por de los servicio_

```
$ npm run test
```

## Despliegue 📦

_Para hacer desplegar ejecutar lo siguiente_

```
$ sls deploy
```

## Construido con 🛠️

_Aquí las dependencias más importantes_

* [aws-sdk](https://www.npmjs.com/package/aws-sdk)
* [axios](https://www.npmjs.com/package/axios) 
* [express](https://www.npmjs.com/package/express)
* [serverless-http](https://www.npmjs.com/package/serverless-http)
* [mocha](https://www.npmjs.com/package/mocha)


## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/jesuslg2019/prueba_tecnica/tree/master).

## Autores ✒️


* **JESÚS LAZO GÓMEZ** - *Developer* - [LAZO](https://github.com/jesuslg2019)
