/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

server= (function() {
    return{
        command: function (comman,callback){
            alert(comman);
            var getpromise = $.get("18.236.157.85:8080/commands/"+comman+"/ip",callback);
            getpromise.then(
                function () {
                    console.info("OK getMapajuego");

                },
                function () {
                    alert("Error getMapajuego");
                }
            );
            return getpromise;
        }

    };
})();