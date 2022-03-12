const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
var ITEM_NAMES_LOOKUP = new Map();
var ITEM_LOOKUP_NAMES = new Map();

req = new request("https://api.hypixel.net/skyblock/bazaar");
req.send().then((resp)=>{
    for (element in resp.products) {
        ITEM_NAMES_LOOKUP.set(element, fixName(element));
    };
    fixOtherNames();
    
    for (let [key, value] of ITEM_NAMES_LOOKUP){
        console.log(key)
    }
    for (key in ITEM_NAMES_LOOKUP.keys()){
        ITEM_LOOKUP_NAMES.set(ITEM_NAMES_LOOKUP.get(key), key);
        
    };
    console.log(ITEM_LOOKUP_NAMES);
});

function fixName(element = ""){
    var element = element.replaceAll("_", " ");
    element = element.toLowerCase();
    return (uppercaseWords(element));
};

function fixOtherNames(){
    ITEM_NAMES_LOOKUP.set('BAZAAR_COOKIE', 'Booster Cookie'); 
    ITEM_NAMES_LOOKUP.set('ENCHANTED_CARROT_STICK', 'Enchanted Carrot on a Stick');
    ITEM_NAMES_LOOKUP.set('HUGE_MUSHROOM_1', 'Brown Mushroom Block');
    ITEM_NAMES_LOOKUP.set('HUGE_MUSHROOM_2', 'Red Mushroom Block');
    ITEM_NAMES_LOOKUP.set('ENCHANTED_HUGE_MUSHROOM_1', 'Enchanted Brown Mushroom Block');
    ITEM_NAMES_LOOKUP.set('ENCHANTED_HUGE_MUSHROOM_2', 'Enchanted Red Mushroom Block');
    ITEM_NAMES_LOOKUP.set('SULPHUR', 'Gunpowder');
    ITEM_NAMES_LOOKUP.set('RABBIT', 'Raw Rabbit');
    ITEM_NAMES_LOOKUP.set('ENCHANTED_RABBIT', 'Enchanted Raw Rabbit');
    ITEM_NAMES_LOOKUP.set('RAW_FISH:1', 'Raw Salmon');
    ITEM_NAMES_LOOKUP.set('RAW_FISH:2', 'Clownfish');
    ITEM_NAMES_LOOKUP.set('RAW_FISH:3', 'Pufferfish');
    ITEM_NAMES_LOOKUP.set('INK_SACK:3', 'Cocoa Beans');
    ITEM_NAMES_LOOKUP.set('INK_SACK:4', 'Lapis Lazuli');
    ITEM_NAMES_LOOKUP.set('LOG', 'Oak Log');
    ITEM_NAMES_LOOKUP.set('LOG:1', 'Spruce Log');
    ITEM_NAMES_LOOKUP.set('LOG:2', 'Birch Log');
    ITEM_NAMES_LOOKUP.set('LOG_2:1', 'Dark Oak Log');
    ITEM_NAMES_LOOKUP.set('LOG_2', 'Acacia Log');
    ITEM_NAMES_LOOKUP.set('LOG:3', 'Jungle Log');
};