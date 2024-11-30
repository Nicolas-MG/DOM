// Creacion de array

// const frutas = Array("nicolas", "marin", "godoy")
// // 

const mixto = [
	"holaaa",
	12,
	true,
	{ ingredientes : "milk",
	cantidad : "1 cucharada" },
	false
]


// const ver = mixto.length
// console.log(ver)

// const nuevo = frutas.concat(mixto)
// console.log(nuevo)

// const nico = true;

// const ver = Array.isArray(mixto)
// console.log(ver)




// for ( let i = 0; i < num.length; num.pop()){
	// 	console.log(num);
	// }
	
	
	// const num = Array(1,2,3,4,5);
	// console.log(num)
	// num.push(6,7,8,9,10)
	// console.log(num)
	
	// const uno = num.forEach(numero => console.log(numero));
	
	// const dos = num.filter(numero => numero % 2 === 0)
	
	// const tres = num.reduce((acomulador, valor) => acomulador + valor, 0)
	
	// const nombre = Array("nicolas", "marin", "godoy", "nicolas","yuliana" , "vida");
	// const verificar = nombre.reduce((acomulador, valor)=>{
	// 	if(acomulador[valor]){
	// 		acomulador[valor]++
	// 	}else{
	// 		acomulador[valor] = 1;
	// 	}
	// 	return acomulador
	// },{});
	// console.log(verificar)
	
	
const num = Array(1,2,3,4,5);

// let valor = num.find(numero => numero > 2)
// console.log(valor)

const indice = num.findIndex(nume => nume == 5);
console.log(indice)
