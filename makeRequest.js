class request{
    http = new XMLHttpRequest();


    constructor(domain = ""){
        this.domain = domain;
    }
    send (){
        return $.getJSON(this.domain, callback);
    }
}