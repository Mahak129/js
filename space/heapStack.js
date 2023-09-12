//Stack(Primitive) , Heap (Non-Primitve)

let myNameBe = "MAHAKSONI"

let anotherNameBe = "GUNGUN"

anotherNameBe = "MHK"

console.log(myNameBe);
console.log(anotherNameBe);

let demoobject = {
    email :"sonmahae@amazon.com",
    upi: "user@ybl"

}//this will go in heap ,there will be direct refence from the heap area


let demoobjectTwo = demoobject;
//here changes made will be refleccted in main
demoobjectTwo.email = "sonimahak.com"
console.log(demoobject.email);
