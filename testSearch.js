async function testSearch(){
    console.log("e")
    bazaara = new bazaar();
    var results = await bazaara.getSpecItem("");
    console.log("ee")
    console.log(results);
    console.log("ee")
};
testSearch()