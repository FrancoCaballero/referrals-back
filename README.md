# referrals-back

## Instrucciones para la ejecución de la aplicación

- Debemos realizar el siguiente comando para instalar las dependencias
```sh
npm install
```
- Se necesita tener mongodb, si no lo tienes en la maquína puedes levantar un contenedor con docker con el comando npm run mongo
el cual se levantara en el puerto 27018 por defecto (debes tener instalado docker)
```sh
npm run mongo
```
- Debe ejecutar el comando npm run dev, con esto se levanta un servidor de node en el puerto 3005 por defecto
```sh
npm run dev
```
- Si quiere cambiar el puerto por defecto, puedes crear un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
PORT=3005 MONGO_URL=localhost MONGO_PORT=27018 MONGO_DB_NAME=referrals

Y ya esta!! puedes continuar con el front ahora 😎
