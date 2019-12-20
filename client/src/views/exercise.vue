<template>
    <div>
        <div class="card">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure >
                        <i class ="fas fa-dumbbell" aria-hidden="true"></i>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{exercise.title}}</p>
                </div>
                </div>

                <div class="content">
                 <div class="field is-grouped">   
                <b>Muscle Group: </b> {{exercise.MuscleGroup}} 
                <br>
                  </div>
                <b>Reps: </b> {{exercise.Reps}}
                <br>
                <div class="field is-grouped">
                <div class="control">
                <input class="input" type="text" placeholder="Text input">
                </div>
    </div>
                <b>Weight: </b> {{exercise.Weight}}
                
    <div class="field is-grouped">
                <div class="control">
                <input class="input" type="text" placeholder="Text input">
                </div>
    </div>

    <button class="button is-primary" @click="addReps(Reps),addWeight(Weight)">
                                Submit
                            </button>
  </div>
                </div>
            </div>
        </div>
    
</template>

<script>
import { Exercise_Server } from "../models/Exercises";
import { Exercise } from "../models/my-fetch";

export default {
    data: () => ({
        Reps: 0
        ,
        Weight: 0, 
    }),
    async created(){
        this.exercise = Exercise.Exercise;
    },
    async addReps(Reps)
    {
        const response = await Exercise_Server.Set_Rep({Reps})
        this.reps = Exercise_Server.Set_Rep();
    },
       async addWeight(weight)
    {
        const response = await Exercise_Server.Set_Weight({weight})
        this.reps = Exercise_Server.Set_Weight();
    }
}
</script>
