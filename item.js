class item{
    constructor(name = "", dispName = "", stats = {}, detStats = {}){
        this.dispName = dispName;
        this.name = name;
        this.stats = stats;
    };

    getStats(){
        return this.stats
    }
}