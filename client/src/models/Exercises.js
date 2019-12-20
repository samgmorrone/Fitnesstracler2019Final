import { api3, User } from "./my-fetch";
import { Exercise } from "./my-fetch";
import $router from "../router/index";
export const ExerciseServer = {
    Get_Exercises(){
        return api3('');
    },
    async Get_One_Exercise(title){
        const { e } = await api3(title);    
        Exercise.Exercise = e;
        $router.push( { name: 'exercise' } );
    }
}
