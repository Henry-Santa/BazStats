// basic request object
class request{
    constructor(domain = ""){
        this.domain = domain;
    }
    async send (){
        var resp = await fetch(this.domain);
        if (resp.ok){
            return (await (resp.json()));
        }
        return false
    }
}