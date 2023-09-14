//singleton object----constructor

// const tinderUser = new Object()//empty object//singleton object

const tinderUser = {}//non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularUser ={
    email:"donmaha@gmail.com",
    fullname:{
        firstName:{
            userFullname:"SoniMahak",
            lastname:"notsure"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.firstName)


//optional chaingng using ?
console.log(regularUser.fullname?.firstName)


//merging object

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

// const obj3 = {obj1, obj2}
// console.log(obj3); 

// const obj3 =  Object.assign({},obj1,obj2)
//target,source,source


// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);

const obj3 ={...obj1,...obj2}//spread
console.log(obj3)


//database se value
const users = [

    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    },
]

// users[1].email

//extracting keys and values

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//array ke ander array key and value