class family{
    constructor(famName = "", babies = []){
        this.famName = famName;
        this.babies = babies;
    }
    addBaby(baby){
        this.babies.push(baby)
    }
    getBabies(){
        return this.babies
    }
    
}