// var Ractive = require("ractive");
import Ractive from "../node_modules/ractive";
Ractive.DEBUG = false;

var UserList = Ractive.extend({
    isolated:true,
    template: require("../templates/userList.mustache"),
    oninit: function(){
        console.log("UserList Component Init...")
    },
});

var ractive = new Ractive({
    el:"#app",
    template: require('../templates/main.mustache'),
    data:{
        title: "User Manager"
    },
    components: {userlist: UserList}

});

