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

Las instrucciones presentadas toman a AWS como sistema servidor para ejecutar el Backend de la plataforma IPP5:

* Crear cuenta en [AWS]
* Seguir las instrucciones de creación de instancias [EC2]
* Seguir las instrucciones de acceso mediante SSH a la máquina EC2.
    * Este paso es más sencillo desde windows, descarge las herramientas Putty y PuttyGen.
* Una vez dentro de la instancia, clonar las fuentes del repo [IPP5] en la máquina HOST.
* Asegurarse de tener instalado en la máquina HOST los siguientes elementos:
    * [JDK Java] Versión 1.7 (Revise la documentación pertinente para su sistema operativo.)
    * Compilador [Haskell] (Revise la documentación pertinente para su sistema operativo.)
    * Maven (Revise la documentación pertinente para su sistema operativo.)
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
* Opcional: Si se está ejecutando el backend desde una nueva instancia EC2, o la misma estaba en estado apagado "STOP" se debe configurar en el repositorio de [IPP5] las nuevas IP's en cada uno de los módulos de la sección Haskell ya que cada vez se genera una IP pública diferente.

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