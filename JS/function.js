function nicolas(){
    return console.log("hola nico")
}
nicolas()

const nombre = {
    name : "falcon 9",
    launchMenssage : function launchMenssage() {
        console.log("✨✨✨")
    }
    
}
nombre.launchMenssage()

let total = 10
function cambio(a){
	total += a;
	    return total
}
cambio(12)
console.log(total)

const objeto = {
	name : "nicolas",
	menssag :  function (dice){
		console.log( `${this.name} says ${dice}`)
	} 
}

objeto.menssag("que vamos hacer?")


