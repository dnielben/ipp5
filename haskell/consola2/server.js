/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

server= (function() {
    return{
        command: function (comman,callback){
            var getpromise = $.get("https://cors.io/?http://34.216.40.74:8080/commands/"+comman+"/ip",callback);
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

        init: function (){
            var getpromise = $.get("https://cors.io/?http://34.216.40.74:8080/commands/init/ip");
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