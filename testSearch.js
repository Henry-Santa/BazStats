// being used for testing purposes atm, will be gone later
async function testSearch(){
    console.log("e")
    myBaz = new bazaar();
    console.log(myBaz)
    prom = await myBaz.setup()
    console.log(prom)
    results = myBaz.searchItems("Lapis")
    console.log("ee")
    console.log(results);
    
    console.log("ee")
};
testSearch()