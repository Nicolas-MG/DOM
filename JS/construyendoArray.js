class Miarray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    // Metodos-----
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;   
    }
    pop(){
        const borrar = this.data[this.length -1];
        delete this.data[this.length - 1];
        this.length--;
        return borrar
    }
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index);

        return item;
    }
    shiftIndex(index){
        for( let i = index; i < this.length - 1; i++ ){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}


const array = new Miarray();

array.push(9);
array.push('nicolas')
console.log(array.pop());
console.log(array);