const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

class bazaar{
    // the bazaar url
    bazaarUrl = "https://api.hypixel.net/skyblock/bazaar";
    ALL_TERMS = [];
    ITEM_LOOKUP_NAMES = {};
    ITEM_NAMES_LOOKUP = {};
    constructor(){
        
        this.setup();
        this.baz = {};
        this.update();
    };
    // updates data
    update() {
        var requestt = new request(this.bazaarUrl);
        var data = requestt.send();
        this.baz = data;
        console.log(this.ITEM_LOOKUP_NAMES, this.ITEM_NAMES_LOOKUP);
    };
    // gets data on item
    async getSpecItem(item = ""){
        console.log("Stuff")
        var results = this.Search(item)
        console.log(results)
        return(results)
    };
    // searches the dictionarys and finds items that match a search term
    async Search(searchTerm){
        var results = []
        var waitForStoof = await this.setup()
        console.log("Searching")
        this.getConstants()
        console.log(this.ITEM_NAMES_LOOKUP)
        
        console.log(this.ALL_TERMS);
        console.log(this.ALL_TERMS.entries()) // WHY DOES THIS LOG 0???!??!?!?!
        for (var key=0; key < this.ALL_TERMS.length; key++){
            console.log(this.ALL_TERMS[key], this.ITEM_NAMES_LOOKUP[this.ALL_TERMS[key]])
            console.log("e")
        };
        return (results)
    }




    async setup(){
    
        this.ITEM_NAMES_LOOKUP = {};
        this.ITEM_LOOKUP_NAMES = {};

        var req = new request("https://api.hypixel.net/skyblock/bazaar");
        req.send().then((resp)=>{
            for (var element in resp.products) {
                this.ITEM_NAMES_LOOKUP[element] = this.fixName(element);
                this.ALL_TERMS.push(element);
            };
            this.fixOtherNames();
            
        });
    };

    getConstants(){
        console.log(this.ITEM_LOOKUP_NAMES, this.ITEM_NAMES_LOOKUP)
        return [this.ITEM_LOOKUP_NAMES, this.ITEM_NAMES_LOOKUP]
    }

    fixName(element = ""){
        var element = element.replaceAll("_", " ");
        element = element.toLowerCase();
        return (uppercaseWords(element));
    };

    fixOtherNames(){
        this.ITEM_NAMES_LOOKUP['BAZAAR_COOKIE'] = 'Booster Cookie'; 
        this.ITEM_NAMES_LOOKUP['ENCHANTED_CARROT_STICK'] = 'Enchanted Carrot on a Stick';
        this.ITEM_NAMES_LOOKUP['HUGE_MUSHROOM_1'] = 'Brown Mushroom Block';
        this.ITEM_NAMES_LOOKUP['HUGE_MUSHROOM_2'] = 'Red Mushroom Block';
        this.ITEM_NAMES_LOOKUP['ENCHANTED_HUGE_MUSHROOM_1'] = 'Enchanted Brown Mushroom Block';
        this.ITEM_NAMES_LOOKUP['ENCHANTED_HUGE_MUSHROOM_2'] = 'Enchanted Red Mushroom Block';
        this.ITEM_NAMES_LOOKUP['SULPHUR'] = 'Gunpowder';
        this.ITEM_NAMES_LOOKUP['RABBIT'] = 'Raw Rabbit';
        this.ITEM_NAMES_LOOKUP['ENCHANTED_RABBIT'] = 'Enchanted Raw Rabbit';
        this.ITEM_NAMES_LOOKUP['RAW_FISH:1'] = 'Raw Salmon';
        this.ITEM_NAMES_LOOKUP['RAW_FISH:2'] = 'Clownfish';
        this.ITEM_NAMES_LOOKUP['RAW_FISH:3'] = 'Pufferfish';
        this.ITEM_NAMES_LOOKUP['INK_SACK:3'] = 'Cocoa Beans';
        this.ITEM_NAMES_LOOKUP['INK_SACK:4'] = 'Lapis Lazuli';
        this.ITEM_NAMES_LOOKUP['LOG'] = 'Oak Log';
        this.ITEM_NAMES_LOOKUP['LOG:1'] = 'Spruce Log';
        this.ITEM_NAMES_LOOKUP['LOG:2'] = 'Birch Log';
        this.ITEM_NAMES_LOOKUP['LOG_2:1'] = 'Dark Oak Log';
        this.ITEM_NAMES_LOOKUP['LOG_2'] = 'Acacia Log';
        this.ITEM_NAMES_LOOKUP['LOG:3'] = 'Jungle Log';
    };



};
