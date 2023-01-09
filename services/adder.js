function adder(){
    this.add = (numberA, numberB) =>{
        return numberA + numberB;
    }
}

module.exports = new adder();