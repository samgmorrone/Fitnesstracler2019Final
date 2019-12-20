const { CustomError } = require('./CustomError');

module.exports.Exercises = {
    allLifts: [ {Lift: "Bench Press", MuscleGroup: "Upper Body", Reps:0, Weight:0},   {Lift: "DeadLift", MuscleGroup: "Lower Body",  Reps:0, Weight:0},     {Lift: "Squat", MuscleGroup: "Lower Body", Reps:0, Weight:0},    {Lift: "Overhead Press", MuscleGroup: "Upper Body", Reps:0, Weight:0},   {Lift: "Pull Ups", MuscleGroup:"Upper Body", Reps:0, Weight:0},    {Lift: "Chin ups", MuscleGroup: "Upper Body",Reps:0, Weight:0},
    ],
    Get_Excercises(){
        return {
            Exercises: this.allLifts
        };
    },
    Get_One_Exercise(title){
        e = this.allLifts.find(x => x.title == title);
        if(e){
            return e;
        }
        throw new CustomError(404, "Exercise not found.");
    },
    Set_Reps(title, Reps)
    {
     this.allLifts[title].Reps.push(Reps);
    }
,
    Set_Weight(title, Weight )
    {
        this.allLifts[title].Weight.push(Weight);
    }
}

