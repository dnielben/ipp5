
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global connectAndSubscribe, Stomp, apiclient,ingresarApp */

var api=server;
app = (function () {


    return {
        send: function(){
            var data = document.getElementById("commands").value;
            api.getip().then(function(dato){
                api.command(dato.ip,data,function (data2){
                    $('#output').val(data2);
                    alert(data2)
                })
            })

        },
        press: function (){
            if (window.event.keyCode == 13) {
                app.send();
            }
        },
        init: function(){
            api.getip().then(function(dato){
                api.init(dato.ip);
            })
        },
    };
})();
/*
$(document).ready(function(){
    api.init();
});*/