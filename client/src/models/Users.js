import { api, User,api2 ,api1 } from "./my-fetch";
import $router from "../router/index";

export const User_Server = {
    async signup(name, username){
        const { user_id } = await api('signupUser', { name, username });
        User.User_Id = user_id;
        $router.push( { name: 'profile' } );
    },
    async login(username){
        const { user_id } = await api('loginUser', {username});
        User.User_Id = user_id;
        console.log(User.User_Id);
        $router.push( { name: 'profile' } );
    },
    Get_Users(){
        return api('');
    },
    Add_Friend(user1, user2){
        return api2('add', {user1, user2});
    },
    Delete_Friend(user1, user2){
        return api2('delete', {user1, user2});
    },
    Add_Exercise(user, exercise){
        return api1('add', {user, exercise});
    },
    Delete_Exercise(user, exercise){
        return api1('delete', {user, exercise});
    }

}