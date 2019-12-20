<template> <li><div class="search"> <v-select label:="title" :options="usersearch" @search="srchUser"></v-select> </div></li> </template>> <script>
 import { ExerciseServer } from "../models/Exercises";
  import { User_Server } from "../models/Users";
   import { User } from '../models/my-fetch'; 
   import $router from "../router/index"; 
   import toastr from "vanillatoasts/vanillatoasts"; 
   import Vue from 'vue'; import vSelect from 'vue-select'; 
   Vue.component('v-select', vSelect);
    export default { data: () => ({ users: {}, usersearch: [], selectedType: "All" }), 
    async created(){ 
        setInterval( async ()=>  this.users = await User_Server.Get_Users(), 2000); setInterval( async ()=>  this.exercises = await Exercise_Server.Get_Exercises(), 2000); }
        , computed: { filterUsers: function() { var a = this; var type = a.selectedType; if(type === "Name")
         { return a.user.Users; } else{ return a.users.Users.filter(function(users) { return Users.type === type; }); } } }, methods: { async srchUser(partial)
         { this.usersearch = User_Server.retList(partial) } }, viewFriend(i){ if(User.User_Id == null){ $router.push( { name: 'profile' } ); }
          else{ User_Server.Get_Users(User.User_Id, i); } } }; </script> 
          <style> .filter { text-align: center } .search { padding: 10px; padding-left: 20px; padding-right: 20px; } .end { justify-content: flex-end !important; } 
          #vanillatoasts-container{ z-index: 100; } </style>
