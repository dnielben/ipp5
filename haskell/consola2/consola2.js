
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
                    var text=document.getElementById("out").innerHTML;
                    text+='<span class="jquery-console-prompt-label" style="font-size:medium">></span>'+
                        data+'<br>';
                    document.getElementById("out").innerHTML=text;
                    if(data2.includes("<interactive>:")){
                        document.getElementById("out").innerHTML=text+'Error'+ data2+'<br>';
                    }else{
                        var res =data2.substring(61);
                        res = res.replace(" ","").split("Prelude>");
                        if(res[res.length-2]!==" "){
                            document.getElementById("out").innerHTML=text+res[res.length-2]+'<br>';
                        }
                    }
                    console.log(data2);

                })
            });
            document.getElementById("commands").value='';

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


