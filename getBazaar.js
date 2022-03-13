const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

class bazaar{

    bazaarUrl = "https://api.hypixel.net/skyblock/bazaar";

    constructor(){
        
        this.setup()
        this.baz = {};
        this.update();
    };
    update() {
        var requestt = new request(this.bazaarUrl);
        var data = requestt.send();
        this.baz = data;
        console.log(this.ITEM_LOOKUP_NAMES, this.ITEM_NAMES_LOOKUP);
    };
    
    async getSpecItem(item = ""){
        console.log("Stuff")
        var results = this.Search(item)
        console.log(results)
        return(results)
    };

    async Search(searchTerm){
        var results = []
        console.log("Searching")
        console.log(this.ITEM_LOOKUP_NAMES.keys());
        
        for ([key,value] of this.ITEM_LOOKUP_NAMES){
            console.log(key,value)
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
            };
            this.fixOtherNames();
            
            for (let [key, value] of this.ITEM_NAMES_LOOKUP){
                this.ITEM_LOOKUP_NAMES[value] = key;
            };
            
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
        this.ITEM_NAMES_LOOKUP.set('BAZAAR_COOKIE', 'Booster Cookie'); 
        this.ITEM_NAMES_LOOKUP.set('ENCHANTED_CARROT_STICK', 'Enchanted Carrot on a Stick');
        this.ITEM_NAMES_LOOKUP.set('HUGE_MUSHROOM_1', 'Brown Mushroom Block');
        this.ITEM_NAMES_LOOKUP.set('HUGE_MUSHROOM_2', 'Red Mushroom Block');
        this.ITEM_NAMES_LOOKUP.set('ENCHANTED_HUGE_MUSHROOM_1', 'Enchanted Brown Mushroom Block');
        this.ITEM_NAMES_LOOKUP.set('ENCHANTED_HUGE_MUSHROOM_2', 'Enchanted Red Mushroom Block');
        this.ITEM_NAMES_LOOKUP.set('SULPHUR', 'Gunpowder');
        this.ITEM_NAMES_LOOKUP.set('RABBIT', 'Raw Rabbit');
        this.ITEM_NAMES_LOOKUP.set('ENCHANTED_RABBIT', 'Enchanted Raw Rabbit');
        this.ITEM_NAMES_LOOKUP.set('RAW_FISH:1', 'Raw Salmon');
        this.ITEM_NAMES_LOOKUP.set('RAW_FISH:2', 'Clownfish');
        this.ITEM_NAMES_LOOKUP.set('RAW_FISH:3', 'Pufferfish');
        this.ITEM_NAMES_LOOKUP.set('INK_SACK:3', 'Cocoa Beans');
        this.ITEM_NAMES_LOOKUP.set('INK_SACK:4', 'Lapis Lazuli');
        this.ITEM_NAMES_LOOKUP.set('LOG', 'Oak Log');
        this.ITEM_NAMES_LOOKUP.set('LOG:1', 'Spruce Log');
        this.ITEM_NAMES_LOOKUP.set('LOG:2', 'Birch Log');
        this.ITEM_NAMES_LOOKUP.set('LOG_2:1', 'Dark Oak Log');
        this.ITEM_NAMES_LOOKUP.set('LOG_2', 'Acacia Log');
        this.ITEM_NAMES_LOOKUP.set('LOG:3', 'Jungle Log');
    };



};
