// searches the bazaar :)
const myBaz = new bazaar();
async function setup() {
    await myBaz.setup();
    search();
}
setup();
var currResults = []
const elem = document.getElementById("search")
const listHead = document.getElementById("myUL")
var ogSearch = true

async function search(){
    for (idx in currResults){
        currResults[idx].remove()
    }
    let results = []
    if (ogSearch){
        results = myBaz.searchItems(" ")
        ogSearch = false
    }else{
        results = myBaz.searchItems(elem.value);
    }
    for (idx in results){
        let newLi = document.createElement("li");
        newLi.textContent = results[idx].dispName;
        listHead.appendChild(newLi);
        currResults.push(newLi);
    }
    console.log(results);
};
