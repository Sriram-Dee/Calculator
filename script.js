let input= document.querySelector("input")
let buttons = document.querySelectorAll('button')
let output = ""

buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        if(e.target.innerHTML == "="){
            try{
                output = eval(input.value).toString()
                input.value= output
            }

            catch(error){
                input.value = "Invalid"
                output=""
            }
        }
        else if(e.target.innerHTML == "AC"){
            output=''
            input.value= output
        }
        else if(e.target.innerHTML == "DEL"){
            output = output.substring(0, output.length-1)
            input.value= output
        }
        else{
            input.value =""
            output += e.target.innerHTML
            input.value=output 
        // console.log(input)
        }

    })
})

console.log()