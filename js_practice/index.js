// function createToaster(config){
//      return function(notificaiton){
//           let h1 = document.createElement("h1")
//           h1.textContent=notificaiton
//           document.querySelector("div").appendChild(h1)

//           setTimeout(()=>{
//                document.querySelector(div).removeChild(h1)
//           },config.duration*1000)
//      }
// }

// const fun=createToaster({
//      positionX:"right",
//      positionY:"top",
//      theam: "dark",
//      duration: 3,
// })
// fun("This is a dummy notificaiton")
// fun("This is a dummy2 notificaiton")

console.log(this);
function abc(){
     console.log(this);
     
}
abc()