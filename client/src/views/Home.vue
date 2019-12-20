<template>
  <div class="Exercise Manager">
  <div class="columns">
  <div class="column is-one-half">
  <ul class="panel">
    <li><p class="panel-heading">
    Exercises
    </p></li>
  

    <li v-for="(e, i) in filteredExercises" :key="i" class="panel-block is-active">
      <i class ="fas fa-dumbbell" aria-hidden="true"></i>
      <div class="column">
        <div class="is-pulled-left">
          <p style="padding-left: 5px;">
            {{e.title}}
          </p>
        </div>
        <div class="is-pulled-right">
          <button class="button is-primary is-pulled-right" @click.prevent="addExercise(e)">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <p style="padding-left: 5px;">
                Add Exercises To Profile
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
        setInterval( async ()=>  this.users = await User_Server.Get_Users(), 3000);
        setInterval( async ()=>  this.exercises = await ExerciseServer.Get_Exercises(), 3000);
  },
  computed: {
    filteredExercises: function() {
      var vm = this;
      var type = vm.selectedType;

      if(type === "All") {
        return vm.exercises.Exercises;
      } else{
        return vm.exercises.Exercises.filter(function(exercise) {
          return exercise.type === type;
        });
      }
    }
  },
  methods: {
    addExercise(e){
      if(User.User_Id == null){
        $router.push( { name: 'profile' } );
      }
      else{
        User_Server.Add_Exercise(User.User_Id, this.exercises.Exercises.findIndex(x => x.title == e.title)).catch(err=> toastr.create({ text: err.message, type: 'error', }));
      }
    },
  
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
