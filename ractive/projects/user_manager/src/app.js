// var Ractive = require("ractive");
import Ractive from "../node_modules/ractive";
Ractive.DEBUG = false;

var UserList = Ractive.extend({
    isolated:true,
    template: require("../templates/userList.mustache"),
    oninit: function(){
        if(localStorage.getItem("users") === null){ //not set
            this.set("users", []);
        }
        else{
            this.set("users", JSON.parse(localStorage.getItem("users")));
        }


        //Submit User
        this.on("addUser", function(){
            //Updating User
            if(this.get("current")!==false){
                console.log("Updating User "+this.get("current")+"...");
                var id = this.get("current");
                
                this.set("users["+id+"]", {
                    name: this.get("name"),
                    email: this.get("email"),
                    city: this.get("city"),
                });

                //Update Local Storage
                var users = JSON.parse(localStorage.getItem("users"));
                
                for(var i=0; i<users.length; i++){
                    if(i===id){
                        users[i].name = this.get("name");
                        users[i].email = this.get("email");
                        users[i].city = this.get("city");
                    }
                }
    
                localStorage.setItem("users", JSON.stringify(users));

            }
            //Adding User
            else{
                console.log("Adding User...");

                var newUser = {
                    name: this.get("name"),
                    email: this.get("email"),
                    city: this.get("city")
                };
                
                this.push("users", newUser);

                //Push to Local Storage
                if(localStorage.getItem("users") === null){ //not set
                    var users = [];
                    users.push(newUser);
                }

                else{
                    var users = JSON.parse(localStorage.getItem("users")); //string to object
                    users.push(newUser);
                }
                localStorage.setItem("users", JSON.stringify(users))

            }

            //Clear
            this.set("current", false);
            this.set("name", "");
            this.set("email", "");
            this.set("city", "");

            return false;
        });


        //Delete User
        this.on("deleteUser", function(e, id){
            console.log("Deleting User "+id+"...");

            this.splice("users", id, 1);

            //Delete from Local Storage
            var users = JSON.parse(localStorage.getItem("users"));
            for(var i=0; i<users.length; i++){
                if(i===id){
                    users.splice(id, 1);
                }
            }

            localStorage.setItem("users", JSON.stringify(users));
        });

        //Edit User
        this.on("editUser", function(e, id){
            console.log("Editing User "+id+"...");

            this.set("current", id);
            this.set("name", this.get("users")[id].name);
            this.set("email", this.get("users")[id].email);
            this.set("city", this.get("users")[id].city);

        });

    },
    data:{
        users:[

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

