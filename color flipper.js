const containerColor = document.querySelector(".container2")
const display = document.querySelector(".display")
const colorDisplay = document.querySelector(".color-display")
const basicButton = document.querySelector(".basic-colors")
const advancedButton = document.querySelector(".advanced-colors")
const switchButton = document.querySelector(".switch-colors")

console.log(basicButton)
let basicMode = true



basicButton.addEventListener("click",()=>{
    basicMode = true
    console.log("basic mode", basicMode)
    

})

advancedButton.addEventListener("click",()=>{
    basicMode = false
    console.log("advanced mode", basicMode)


})

const color = [
    "(255, 0, 0)", "(0, 128, 0)", "(255, 255, 0)", "(173, 216, 230)"
]

switchButton.addEventListener("click", ()=>{
    if(basicMode){
        colorArrayNo = Math.floor(Math.random()* color.length)
        console.log(colorArrayNo)
        containerColor.style.backgroundColor = `rgb${color[colorArrayNo]}`
        colorDisplay.innerHTML = `color display:  rgb${color[colorArrayNo]}`
            
    }
    else{
            a = Math.floor(Math.random()*255)
            b = Math.floor(Math.random()*255)
            c = Math.floor(Math.random()*255)
            rgbColor = `rgb(${a},${b},${c})`
            console.log(rgbColor)
            containerColor.style.backgroundColor = rgbColor
            colorDisplay.innerHTML = `color display: ${rgbColor}`
         
    
        }
    

}
)




        
















