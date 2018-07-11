/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

server= (function() {

    return{
        command: function (ip,comman,callback){

            var getpromise = $.get("https://cors.io/?http://34.220.243.249:8080/commands/"+comman+"/"+ip,callback);
            getpromise.then(
                function () {
                    console.info("OK ");

                },
                function () {
                    alert("Error");
                }
            );
            return getpromise;
        },
        getip: function getIp(){
        var getpromise = $.getJSON('https://api.ipify.org?format=json');
            getpromise.then(
                function () {
                    console.info("OK ");

                },
                function () {
                    alert("Error");
                }
            );
            return getpromise;
        },
        init: function (ip){
            var getpromise = $.get("https://cors.io/?http://34.220.243.249:8080/commands/initialConsole/"+ip,function(dato){
                console.log(dato);
            });
            getpromise.then(
                function () {
                    console.info("OK ");

                },
                function () {
                    alert("Error");
                }
            );
            return getpromise;
        }
    };
})();