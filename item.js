class item{
    constructor(name = "", dispName = "", stats = {}, detStats = {}){
        this.dispName = dispName;
        this.name = name;
        this.stats = stats;
    };

    getStats(){
        let truStats = this.stats["quick_status"]
        let returnedStats = [this.stats["buy_summary"][0]["pricePerUnit"],this.stats["sell_summary"][0]["pricePerUnit"],Math.round(truStats["buyPrice"]*10) / 10,Math.round(truStats["sellPrice"]*10) / 10,truStats["buyVolume"],truStats["sellVolume"]]
        return returnedStats
    }
}