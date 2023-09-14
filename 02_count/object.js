// Object.create 


//object are of two types literals and constructor in litrals we do not create singletone

// object literals

const mySym = Symbol("key1")//symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//correct way to declare symbol
    //wrong way to declare mySym:"mykey1"
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//symbol calling


//changing value of object

JsUser.email = "mhk@.com"

//lock value of object

// Object.freeze(JsUser)

JsUser.email = "changedEmail.com"
// console.log(JsUser)



JsUser.greeting = function(){
    console.log("Hello JS user")
}//storing function inside object

console.log(JsUser.greeting)//error ---- [Function (anonymous)]

JsUser.greeting2 = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting2());
