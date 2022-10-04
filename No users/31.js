username = ["admin", "shahid", "zohaib", "shoaib", "asim"];

for(i = 0; i < username.length; i++ ) {
    if (username[i] === "admin"){
        console.log("Hello admin! Would you like to see a status report");
    }
    else if (username[i] === "shahid") {
        console.log("Hello shahid! thankyou for logging in again");
    }
    else if (username[i] === "zohaib") {
        console.log("Hello zohaib! thankyou for logging in again");
    }
    else if (username[i] === "asim") {
        console.log("Hello asim! thankyou for logging in again");
    }
    else if (username[i] === "shoaib") {
        console.log("Hello shoaib! thankyou for loggin in again");
    }
}
username.splice(0 , 5);
console.log(username);
if (!username.length) {
    console.log("We need to find some users");
}
