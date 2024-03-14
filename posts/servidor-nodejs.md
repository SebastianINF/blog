---
title: 'Instrucciones para iniciar un servidor de Node.js'
description: 'Descripción del segundo post'
image: 'javascript'
date: '14/03/2024'
---

# Instrucciones para instalar e iniciar servidor Node.js

1. Instalar **Node.js (Ubuntu)**, usar los siguientes comandos:
> curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -  
> sudo apt-get install -y nodejs  


2. *(Opcional si ya esta instalado)*: Instalar el programa pm2 necesario para iniciar y monitorear el servidor con el siguiente comando:
> npm install -g pm2

3. *(Opcional si ya estan subidos)*: Subir los archivos locales al servidor usando SFTP y colocarlos en una carpeta facil de recordar


4. *(Opcional si ya esta configurado)*: Configurar un servidor HTTP (Apache o Nginx) como proxy para que el servidor pueda salir por el puerto 80, debido a que por defecto el servidor escucha al puerto localhost:8881
> Proxy: <external_ip>:80/api -> localhost:8881


5. Ingresar al directorio donde se encuentran los archivos del server *(ejemplo: /var/www/node-server)*
> cd /var/www/node-server/


6. Configurar la variable de entorno **NODE_ENV** a modo produccion con el siguiente comando:
> export NODE_ENV=prod


6. Iniciar, detener o reiniciar el servicio segun sea necesario:
> **Iniciar** - pm2 start index.js  
> **Detener** - pm2 stop 0  
> **Reiniciar** - pm2 restart 0  


7. *(Opcional)*: En caso de recibir un error al iniciar el servicio, intentar detenerlo y luego instalar dependencias faltantes:
> pm2 stop 0  
> npm i  


8. *(Opcional)*: Para ver información sobre el proceso se utiliza el comando:
> pm2 show 0