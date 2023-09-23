// one way is to use inline css for onclickevent

<img src="" alt="" onclick ="alert('owl')"/>

// another Way

document.getElementById('owl').onclick = function(){
    alert("owl clicked")
}

//onclick
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e);
// },false)


//event propogation and event bubbling
// document.getElementById('images').addEventListener('click',function(e){
//     console.log(e);
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log(e);
// },false)

//here when we click on owl first owl print hoga fhir images wala print hoga

//caputing mode made parent se child aata h
//aur dono ko click krne p msg nhi chiaye toh we will use stopPropagation()


//another concept is to stop redirecting to anther page

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation()

// },false)


// document.querySelector('#images').addEventListener('click',function(e){
//     let removenode = e.target.parentNode
//     removenode.remove()
// })

// also can get the tagname
// if(e.target.targetName==='IMG'){
//     toh remove krenege
// }

 