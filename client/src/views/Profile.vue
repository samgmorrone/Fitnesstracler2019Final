<template>
  <div>
    <h1>
     Username: {{users.Users[me].username}}
    </h1>
           <ul class="panel">
                <p class="panel-heading">
                    My Exercise Data
              </p>
                <li v-for="(e, i) in users.Users[me].exerciseList" :key="i" class="panel-block is-active">
                    <span>
                        <i class ="fas fa-dumbbell" aria-hidden="true"></i>
                    </span>
                    <div class="column">
                        <div class="is-pulled-left">
                            <p style="padding-left: 10px;">
                                {{exercises.Exercises[e].title}}
                            </p>
                        </div>
                        <div class="is-pulled-right">
                      <div class="buttons">
       <button class="button is-primary" @click="getExercise(exercises.Exercises[e].title)">
              Open
    </button>
                     <button class="button is-primary" @click="deleteExercise(i)">
                    <p style="padding-left: 1px;">
                     Delete
                   </p>
                       </button>
                            </div>
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
import { Userserve } from "../models/Users";

import { User } from '../models/my-fetch';

export default {
    data: () => ({
        exercises: {},
        users: {},
        me: 0


    }),
    async created(){
        this.exercises = await Exerciseserve.Get_Exercises();
        setInterval( async ()=>  this.users = await Userserve.Get_Users(), 2000);
        this.me = User.User_Id;
    },
    methods:
    
    {
        deleteFriend(i){
            Userserve.Delete_Friend(User.User_Id, i);
        },

        deleteExercise(e){
            Userserve.Delete_Exercise(User.User_Id, e);
        },
        getExercise(title){
            Exerciseserve.Get_One_Exercise(title);
        }
    }
}
</script>
