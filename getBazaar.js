class bazaar{

    bazaarUrl = "https://api.hypixel.net/skyblock/bazaar";

    constructor(){
        
    };
    update(params) {
        requestt = new request(this.bazaarUrl);
        data = requestt.send()
        
    }
    
}