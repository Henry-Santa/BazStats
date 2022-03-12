class bazaar{

    bazaarUrl = "https://api.hypixel.net/skyblock/bazaar";

    constructor(){
        this.baz = {};
        this.update();
    };
    update() {
        var requestt = new request(this.bazaarUrl);
        var data = requestt.send();
        console.log(data);
        this.baz = data;
    }
    
    getSpecItem(item = ""){
        this.baz.item;


    }

}