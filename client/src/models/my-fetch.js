const api_root = "http://localhost:3000/users/";



export async function api(url, data){
    let  response;
    const headers = { authorization: "bearer " + User.User_Id }

    if(data){
        response = await fetch((api_root)+ url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    }else{
        response = await fetch((api_root  ) + url, { headers })
    }
    
    if(response.ok){
        return await response.json();
    } else{
        throw await response.json();
    }
}
const api_root1 = "http://localhost:3000/UserExercises/";

export async function api1(url, data){
    let  response;

    if(data){
        response = await fetch(api_root1 + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    }else{
        response = await fetch(api_root1 + url)
    }
    
    if(response.ok){
        return await response.json();
    } else{
        throw await response.json();
    }
};
const api_root2 = "http://localhost:3000/friend/";
export async function api2(url, data){
    let  response;

    if(data){
        response = await fetch(api_root2 + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    }else{
        response = await fetch(api_root2 + url)
    }
    
    if(response.ok){
        return await response.json();
    } else{
        throw await response.json();
    }
}
const api_root3 = "http://localhost:3000/exercises/";
export async function api3(url, data){
    let  response;
    const headers = { authorization: "bearer " + Exercise.Exercise }

    if(data){
        response = await fetch(api_root3 + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    }else{

        response = await fetch(api_root3 + url,  { headers })
    }
    
    if(response.ok){
        return await response.json();
    } else{
        throw await response.json();
    }
}

export const Exercise = {
    Exercise: null
}
export const User = {
    User_Id: null
}
