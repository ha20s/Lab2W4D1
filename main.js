let url = "https://coffee.alexflipnote.dev/random.json"

let container = document.getElementById("container")
let image = document.createElement("img")
// document.body.style = "center"


fetch(url)
.then((res) => res.json())

.then((data)=>{
    console.log(data) 
    image.src = data.file
    container.appendChild(image)

})
