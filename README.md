# Sistema de aprendizaje de lenguajes de programación en línea para Java Script y Haskell 

## IPP5
http://ldbn.is.escuelaing.edu.co/ipp5/

IPP5 es una plataforma web con el ánimo de motivar a sus estudiantes a realizar ejercicios prácticos que retroalimentan lo enseñado en clase. La plataforma consta de módulos separados por lenguaje que explican y proponen retos básicos y didácticos sobre lo enseñado mediante un sistema interactivo con el estudiante, el cual muestra información teórica sobre bases de programación (memoria, condicionales, ciclos) seguida de retos sencillos que promuevan la autodidaxia del estudiante. Esta plataforma busca retroalimentarse de las mejores prácticas y tendencias de enseñanza para garantizar su objetivo principal que es enseñar programación desde sus bases utilizando los lenguajes de programación Haskell y JavaScript.

### Director de proyecto: 
Luis Daniel Benavides Navarro
### Integrantes del proyecto: 
Laura Milena Ramos 
Johan Sebastian Peña Peñaloza
Leonardo Castro Susa.

## Instrucciones para inicializar IPP5 en una nueva instancia

El proyecto ipp5 se constituye en dos partes, la primera parte consta en el módulo de cliente que será consumido a través de http, esta parte corresponde a los HTML's que se incluyen en este proyeto junto con sus sub-capertas (A excepción de la carpeta Backend), para hacer pública la página de ipp5 se deben ubicar los fuentes en la carpeta del host deseado, basta solo con clonar el repositorio y exponer la ruta de sus archivos.
La segunda parte del proyecto es la que constituye el backend, aquella parte está encargada del procesamiento de cálculos para el intérprete de los módulos de Haskell y los pasos para su ejecución se describen a continuación:

Las instrucciones presentadas toman a AWS como sistema servidor para ejecutar el Backend de la plataforma IPP5:

* Ingresar o Crear una cuenta de Amazon Web Services [AWS]
* Seguir las instrucciones de creación de instancias [EC2]
* Seguir las instrucciones de acceso mediante SSH a la máquina EC2.
    * Este paso es más sencillo desde windows, descarge las herramientas Putty y PuttyGen.
* Una vez dentro de la instancia, clonar las fuentes del repo [IPP5] en la máquina HOST.
* Asegurarse de tener instalado en la máquina HOST los siguientes elementos:
    * [JDK Java] Versión 1.7 (Revise la documentación pertinente para su sistema operativo.)
        *  Para verificar la correcta instalación del componente ejecute el siguiente comando:
```sh
javac -version
#Se debe mostrar una linea con información parecida a esta
javac 1.7.0_131
```
    * Compilador [Haskell] (Revise la documentación pertinente para su sistema operativo.)
        *  Para verificar la correcta instalación del componente ejecute el siguiente comando:
```sh
stack ghci
#Se debe mostrar la linea de comandos de haskell con prefijo 'Prelude>'
```
    * Maven (Revise la documentación pertinente para su sistema operativo.)
        *  Para verificar la correcta instalación del componente ejecute el siguiente comando:
```sh
mvn -v
#Se debe mostrar una linea con información parecida a esta
Apache Maven 3.2.3 (33f8c3e1027c3ddde99d3cdebad2656a31e8fdf4; 2014-08-11T15:58:10-05:00)
Maven home: C:\apache-maven-3.2.3
Java version: 1.8.0_131, vendor: Oracle Corporation
Java home: C:\Program Files\Java\jdk1.8.0_131\jre
Default locale: en_US, platform encoding: Cp1252
OS name: "windows 10", version: "10.0", arch: "amd64", family: "dos"
```     
* Ingresar a la carpeta contenedora del proyecto [Java Spring] 
```sh
cd ipp5
cd Backend
cd JavaSocketsConnectionIpp5
cd haskell-java
```
* Una vez dentro de la carpeta, ingresar los siguientes comandos:
```sh
--install mvn and compile
$ mvn package
--run proyect
$ mvn spring-boot:run
```
*Tener en cuenta que este proceso ejecutará el backend del interprete Haskell, no debe cerrarlo sino dejarlo ejecutando en Background.

* Si se está ejecutando el backend desde una nueva instancia EC2, o la misma estaba en estado apagado "STOP" se debe configurar en el repositorio de [IPP5] la nueva IP que hace referencia al componente de backend desde el componente de cliente, para esto siga los siguientes pasos:
* Posicionado en la carpeta de su repositorio ejecute los siguientes comandos:
```sh
cd haskell
cd consola2
```
* En esta carpeta encontrará 2 arhivos, consola2.js y server.js, para configurar la nueva ip de acceso siga los siguientes pasos que editarán el archivo server.js desde consola (Linux):
```sh
user$: ls
consola2.js server.js
user$: vi server.js
#Se abrirá el archivo 'server.js' desde la terminal
#Busque las lineas 12 y 38 del archivo
#En cada una de las repeticiones de la siguiente ruta 'https://cors.io/?http://35.163.23.102:8080/commands'    
#reemplaze la IP actual (en este caso '35.163.23.102') por la nueva IP designada a su servidor.
#Para poder editar presione 1 vez la tecla 'i'
#Una vez terminado, presione la tecla 'Escape' y escriba :wq!
#Esto guardará el archivo con los cambios realizados
#Recuerde usar las flechas del teclado para navegar a través del documento.
#Ejemplo
#Se presiona la tecla 'i' para poder editar el archivo
    var getpromise = $.get("https://cors.io/?http://cambiar aquí:8080/commands/"+comman+"/"+ip,callback);
    #Se agrega el texto 'cambiar aquí' que usted deberá reemplazar con su nueva IP
        getpromise.then(
            function () {
                console.info("OK ");
            },
            function () {
                alert("Error");
            }
            return getpromise;
        );
#Se presiona la tecla 'Escape'
#Se escribe el comando de guardar y cerrar
:wq!
#Su archivo queda guardado y listo para usar.
user$
```
* Ajuste de IP usando editor de texto:
    * Vaya a las lineas 12 y 38 del archivo
    * En cada una de las repeticiones de la siguiente ruta 'https://cors.io/?http://35.163.23.102:8080/commands'     reemplaze la IP actual (en este caso '35.163.23.102') por la nueva IP designada a su servidor.
    * Guarde el archivo
    
### Repositorios de implementación Backend
Implementación con NodeJS:          https://github.com/woexpect/SSHConnectionIpp5.git

Implementación con Haskell Snap:    https://github.com/woexpect/BasicHaskellConsole

Implementación con Java Spring:     https://github.com/LauraMilenaRB/JavaSocketsConnectionIpp5.git


[AWS]: <https://portal.aws.amazon.com/billing/signup#/start>
[IPP5]: <https://github.com/dnielben/ipp5>
[EC2]: <https://aws.amazon.com/es/ec2/?sc_channel=PS&sc_campaign=acquisition_CO&sc_publisher=google&sc_medium=english_ec2_b&sc_content=ec2_e&sc_detail=ec2&sc_category=ec2&sc_segment=177549446363&sc_matchtype=e&sc_country=CO&s_kwcid=AL!4422!3!177549446363!e!!g!!ec2&ef_id=WRnTXAAAAGo5gkBX:20180802173608:s>
[Java Spring]: <https://github.com/LauraMilenaRB/JavaSocketsConnectionIpp5.git>
[JDK Java]: <http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html>
[Haskell]: <https://docs.haskellstack.org/en/stable/install_and_upgrade/>