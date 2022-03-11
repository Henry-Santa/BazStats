class request{
    http = new XMLHttpRequest();


    constructor(domain){
        this.domain = domain;
    }
    send(){
        this.http.open("GET", this.domain);
        this.http.send()
        this.http.onreadystatechange=(e)=>{
            return JSON.parse(this.http.responseText)
        }
    }
}