
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global connectAndSubscribe, Stomp, apiclient,ingresarApp */

var api=server;
app = (function () {

    var command="";
    return {
        send: function(){
            var data = document.getElementById("commands").value;
            api.getip().then(function(dato){
                api.command(dato.ip,data,function (data2){
                    /*var output="";
                    for (var i = 1; i < res.length-1; i ++){
                        output+=res[i]+"\n";
                    }*/
                    console.log(data2);
                    if(data2.includes("<interactive>:")){
                        $('#output').val(data2);
                    }else{
                        var res =data2.substring(201);
                        res = res.replace(" ","").split("Prelude>");
                        document.getElementById("output").innerHTML="<output id=\"output\">"+document.getElementById("output").value+res[res.length-2]+"</output><br>";
                    }

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


