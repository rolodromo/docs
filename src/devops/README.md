# DevOps Stuff 

La información que hay a continuación es la parte de DevOps detallando como estan montados los componentes.


## Componentes

La aplicación esta compuesta por diferentes piezas que se gestionan por separado. Cada componente se genera como una imagen de Docker que se despliega en un PaaS similar Heroku.


### webapp
 La aplicación Vue que hace de front

 - [github](https://github.com/rolodromo/webapp)
 - [twitter @roleandobot](https://rolodromo.com)
  
### botserver

 Este servicio atiende el bot de discord y envia/responde tweets y el fulfillment de Dialogflow

 - [github](https://github.com/rolodromo/botserver)
 - [twitter @roleandobot](https://twitter.com/roleandobot)
  
### api
 Este servicio gestiona todas las peticiones al API
 
 - [github](https://github.com/rolodromo/api)
 - [web](https://api.rolodromo.com)
  

## Host en DigitalOcean

Todos los componentes estan desplegados dentro de un mismo Droplet dentro de [DigitalOcean](http://https://digitalocean.com) donde hay instalado un [Dokku](http://dokku.progrium.viewdocs.io) para gestionar los contenedores y los despliegues. (Tamaño pequeño, hasta que vengan los millones... ¯\_(ツ)_/¯)


## PaaS con Dokku

Cada componente tiene su propio repo y un Dockerfile que se utiliza para desplegar con [Dokku](http://dokku.progrium.viewdocs.io).

Dokku funciona de forma similar a [Heroku](https://heroku.com). La diferencia aquí esta en el precio, mantener un Droplet con todos contenedores es apenas una fracción de lo que costaría en Heroku.


## SSL con LetsEncrypt

Los certificados SSL para cada subdominio se gestionan automaticamente con un plugin de Dokku que ademas los mantiene renovados con un cron. 

