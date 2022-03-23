class item{
    constructor(name = "", dispName = "", stats = {}, detStats = {}){
        this.dispName = dispName;
        this.name = name;
        this.stats = stats;
    };

    getStats(){
        let truStats = this.stats["quick_status"]
        let returnedStats = [this.stats["sell_summary"][0]["pricePerUnit"],truStats["sellPrice"],truStats["sellVolume"],this.stats["buy_summary"][0]["pricePerUnit"],truStats["buyPrice"],truStats["buyVolume"]]
        return returnedStats
    }
}