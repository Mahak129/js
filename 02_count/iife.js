//immediately invoked function expressions(IIFE)

// to protect from the pollution of declaration of global pollution

(function chai(){//named
    console.log(`DB connected`);
})();//need to stop invoked function

( (name)=>{
    console.log(`DB connected2 ${name}`); 
})("mahak")