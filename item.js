class item{
    constructor(name = "", dispName = "", family = new family("", []), stats = {}){
        this.dispName = dispName;
        this.name = name;
        this.family = family;
        this.stats = stats;
    };

    getStats(){
        return this.stats
    }
}