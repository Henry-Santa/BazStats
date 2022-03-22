class item{
    constructor(name = "", dispName = "", stats = {}){
        this.dispName = dispName;
        this.name = name;
        this.stats = stats;
    };

    getStats(){
        return this.stats
    }
}