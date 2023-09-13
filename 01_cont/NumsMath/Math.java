//abs changes only negative to positive

//round 4.3----4
//ceil
//floor niche 4.9---4
//min in all
//max of all
//random  will give 0-1
//we will *10
//and+1 to avoid 0
console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
