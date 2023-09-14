const marvel_heros = ["thor","Ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) //will accept arrays as an input to psush
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);//flash 

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


// console.log(all_heros[3]);


const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros);//spread operator

//flat with depth to convert recursive array into single array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//converting into Array

//converting in array
console.log(Array.isArray("Hitesh"))//to check whether it is array or not
console.log(Array.from("Hitesh"))//convert into array
console.log(Array.from({name:"hitesh"}))
//interesting//converting object into arrat here it has to be mentioned that whether to conver
// //key or value


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3));

