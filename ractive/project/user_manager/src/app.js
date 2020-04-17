var Ractive = require ('ractive');
Ractive.DEBUG = false;


var ractive = new Ractive({
    template: "{{greeting}}",
    data:{
        greeting: "Hello World"
    }
});
ractive.set("greeting", "BYE!");
console.log(ractive.toHTML());