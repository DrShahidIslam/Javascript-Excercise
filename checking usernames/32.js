const current_users = ["adam", "eva", "john", "charlie", "pepe"];

const new_users = ["ibrahim", "yousuf", "adam", "younus", "pepe"];

for (let i = 0; i < new_users.length; i++) {
    
    var available = true;
    
    const cur_element = new_users[i]
    

    for (let j=0; j< current_users.length; j++){
        
        if (cur_element === current_users[j] ){
        available = false;
        break
        }
    };
    

    if (!available){
        console.log(`${cur_element} is already taken! Please enter a new username`)
    }else{
        console.log(`${cur_element} is available!`)
    }
}