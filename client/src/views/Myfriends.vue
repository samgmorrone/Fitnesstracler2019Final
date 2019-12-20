<template>
  <div class="About">
  <div class="columns">
 <div class="column is-one-Ha.f">
    <ul class="panel">
       <li><p class="panel-heading">
      All Users
     </p></li>
        <li v-for="(u, i) in users.Users" :key="i" class="panel-block is-active">
            <span>
              <i class="fas fa-user"></i>
            </span>
            <div class="column">
              <div class="is-pulled-left">
                <p style="padding-left: 10px;">
                {{u.username}}
                </p>
              </div>
              <div class="is-pulled-right">
                <button class="button is-primary is-pulled-right" @click="viewFriend(i)">
                  <span class="icon is-small">
                    <i class="fas fa-plus"></i>
                  </span>
                  <p style="padding-left: 1px;">
                   View Friend Exercises
                  </p>
                </button>
              </div>
            </div>
        </li>
    </ul>
  </div>
 </div>    
 </div>
</template>
<script>
import { ExerciseServer } from "../models/Exercises";
import { User_Server } from "../models/Users";
import { User } from '../models/my-fetch';
import $router from "../router/index";
import toastr from "vanillatoasts/vanillatoasts";

export default {
  data: () => ({
    exercises: {},
    selectedType: "All",
    users: {}
  }),
  async created(){
        setInterval( async ()=>  this.users = await User_Server.Get_Users(), 2000);
        setInterval( async ()=>  this.exercises = await Exercise_Server.Get_Exercises(), 2000);
  },
  
  
  methods: {
    
    viewFriend(a){
      if(User.User_Id == null){
        $router.push( { name: 'profile' } );
      }
      else{
        User_Server.Get_Users(User.User_Id, a);
      }
    }
  }
};
</script>

<style>
  .filter {
    text-align: center
  }
  .end {
    justify-content: flex-end !important;
  }
  #vanillatoasts-container{
    z-index: 100;
  }
</style>
