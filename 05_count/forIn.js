const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    Swift:"swift by apple"
}
// for (const key in object) {
//syntax where key are the keys and object is used for myobject
// }

for (const key in myObject) {
// console.log(key)
}

for (const key in myObject) {
 //print values
//  console.log(myObject[key])
}

//print both
for (const key in myObject) {
// console.log(`${key} shortcut is for ${myObject[key]}`)
 }

 const programming =["js","rb","py","java","cpp"]

 for(const key in programming){
    console.log(programming[key])
 }

 //for in cannot be applied on map coz its not itreatable
 //arrays ;-for of
 //object;-for in