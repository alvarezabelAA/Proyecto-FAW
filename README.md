# Proyecto-FAW
Login + comics
El proyecto consistirá en una aplicación para registrar comics en el servidor de base de datos, para esto se deja a su libertad como quiera definir sus tablas y de cómo defina sus tablas dependera la estructura de backend, por lo que lo único que se definirá es como se vera el frontend.

Login
Deberá de  permitir identificar usuarios, el usuario debe de ser un correo electrónico, y la clave debe de ser al menos de 6 caracteres. Iniciando con una página como esta :


Registrar Usuario
Cada usuario debe de tener por lo menos los siguientes datos y asi sera la pantalla de registro de usuario :



Menu de Aplicación
La aplicación deberá de mostrar un menú que tenga las siguientes opciones :
Ingresar Comic
Ingresar comics permitirá que se puedan registrar los comics que se quiera, los datos que debe de cargar son los siguientes:


Las editoriales válidas serán MARVEL, DC Comics e IMAGE. Y recuerde que en la base de datos se guardaran el usuario que grabo el registro. Puesto que las unicas entradas que se podrán editar es aquella que fue ingresada por el usuario actual.

Consultar Comics
La parte de Consultar Comics debera ser una tabla la cual muestre la informacion de los comics y se vea algo asi :



Cada fila debe mostrar la editorial que solo puede ser MARVEL, DC o IMAGE con el logo correspondiente, y luego los datos del comic como se muestra y un icono de lapiz para editar y otro de basurero para borrar esto si el comic fue ingresado por el usuario que esta logueado actualmente, si no no se mostraran estos iconos.


Tomar en cuenta que debe de utilizar las tecnologias que se enseñaron en clase (MySQL, MongoDB, Node , Angular), como hablamos en clase si el backend lo hacen en otra tecnologia no hay problema, pero el front-end si debe de ser Angular
