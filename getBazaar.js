const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

class bazaar{
    
    familyList = []
    itemList = []
    dicto = {}


    // the bazaar url
    bazaarUrl = "https://api.hypixel.net/skyblock/bazaar";
    constructor(){
        
    };
    // gets data on item
    async setup(){
    
        this.ITEM_NAMES_LOOKUP = {};
        this.ITEM_LOOKUP_NAMES = {};
        var req = new request("https://api.hypixel.net/skyblock/bazaar");
        var resp = await req.send()
        this.fixOtherNames();
        for (var element in resp.products) {
            this.itemList.push(new item(element,this.fixName(element),resp.products[element]))
        };
    };

    fixName(element = ""){
        if (element in this.dicto){
            return this.dicto[element]
        }
        var element = element.replaceAll("_", " ");
        element = element.toLowerCase();
        return (uppercaseWords(element));
    };

    fixOtherNames(){
        this.dicto['BAZAAR_COOKIE'] = 'Booster Cookie'; 
        this.dicto['ENCHANTED_CARROT_STICK'] = 'Enchanted Carrot on a Stick';
        this.dicto['HUGE_MUSHROOM_1'] = 'Brown Mushroom Block';
        this.dicto['HUGE_MUSHROOM_2'] = 'Red Mushroom Block';
        this.dicto['ENCHANTED_HUGE_MUSHROOM_1'] = 'Enchanted Brown Mushroom Block';
        this.dicto['ENCHANTED_HUGE_MUSHROOM_2'] = 'Enchanted Red Mushroom Block';
        this.dicto['SULPHUR'] = 'Gunpowder';
        this.dicto['RABBIT'] = 'Raw Rabbit';
        this.dicto['ENCHANTED_RABBIT'] = 'Enchanted Raw Rabbit';
        this.dicto['RAW_FISH:1'] = 'Raw Salmon';
        this.dicto['RAW_FISH:2'] = 'Clownfish';
        this.dicto['RAW_FISH:3'] = 'Pufferfish';
        this.dicto['INK_SACK:3'] = 'Cocoa Beans';
        this.dicto['INK_SACK:4'] = 'Lapis Lazuli';
        this.dicto['LOG'] = 'Oak Log';
        this.dicto['LOG:1'] = 'Spruce Log';
        this.dicto['LOG:2'] = 'Birch Log';
        this.dicto['LOG_2:1'] = 'Dark Oak Log';
        this.dicto['LOG_2'] = 'Acacia Log';
        this.dicto['LOG:3'] = 'Jungle Log';
    };



    searchItems(searchTerm = ""){
        var results = []
        for(let i in this.itemList){
            if (this.itemList[i].dispName.toLowerCase().includes(searchTerm.toLowerCase())){
                results.push(this.itemList[i])
            }
        }
        return results;
    }


};
