// var Ractive = require("ractive");
import Ractive from "../node_modules/ractive";
Ractive.DEBUG = false;

var UserList = Ractive.extend({
    isolated:true,
    template: require("../templates/userList.mustache"),
    oninit: function(){
        console.log("UserList Component Init...");

        //Add User
        this.on("addUser", function(){
            console.log("Adding User...");

            var newUser = {
                name: this.get("name"),
                email: this.get("email"),
                city: this.get("city")
            };
            
            this.push("users", newUser);

            return false;
        });


        //Delete User
        this.on("deleteUser", function(e, id){
            console.log("Deleting User123 "+id+"...");

            this.splice("users", id, 1);
        });

        //Edit User
        this.on("editUser", function(e, id){
            console.log("Editing User "+id+"...");

            // this.set("current", id);
            // this.set("name", this.get("users")[id].name);
            // this.set("email", this.get("users")[id].email);
            // this.set("city", this.get("users")[id].city);
        });

    },
    data:{
        users:[
            {name:"Stevesdasd Smith", email:"ssmith@gmail.com", city:"CitydsfsdfsdfA"},
            {name:"John Doe", email:"jdoe@gmail.com", city:"City B"},
            {name:"Billy Bob", email:"bbob@gmail.com", city:"City C"},
            {name:"Mike Lee", email:"mlee@gmail.com", city:"City D"},
        ],
        current: false,
        name:"",
        email:"",
        city:""
    }
});

var ractive = new Ractive({
    el:"#app",
    template: require('../templates/main.mustache'),
    data:{
        title: "User Manager"
    },
    components: {userlist: UserList}

});

