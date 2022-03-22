// being used for testing purposes atm, will be gone later
async function testSearch(){
    myBaz = new bazaar();
    prom = await myBaz.setup()
    console.log(prom)
    results = myBaz.searchItems("Lapis")
    console.log(results);
};
testSearch()