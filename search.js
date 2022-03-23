// searches the bazaar :)
const myBaz = new bazaar();
async function setup() {
    await myBaz.setup();
    search();
    let eas = fetch("./itemDisp.html").then(function(resi){
        resi.text().then(function(text){
            tableText = text
        })
})};
setup();
var tableText = ""
var currResults = []
const elem = document.getElementById("search");
const listHead = document.getElementById("myUL");
var ogSearch = true;

async function search(){
    for (idx in currResults){
        currResults[idx].remove();
    }
    let results = []
    if (ogSearch){
        results = myBaz.searchItems(" ");
        ogSearch = false;
    }else{
        results = myBaz.searchItems(elem.value);
    }
    for (idx in results){
        let newLi = document.createElement("li");
        newLi.textContent = results[idx].dispName;
        listHead.appendChild(newLi);
        currResults.push(newLi);
    }
};

var oldClick = {}

window.onclick = e => {
    
    if (e.target.tagName === "LI"){
        if (Object.keys(oldClick).length !== 0){
            oldClick["element"].innerHTML = oldClick["dispName"]
            oldClick["element"].id = "";
        }
        for (i in currResults){
            if (myBaz.itemList[i].dispName == e.target.innerHTML){
                oldClick["element"] = e.target;
                oldClick["dispName"] = myBaz.itemList[i].dispName;
                let stats = myBaz.itemList[i].getStats();
                console.log(tableText)
                e.target.innerHTML = e.target.innerHTML + tableText
                let dataRow = document.getElementById("data")
                console.log(dataRow)
                let childs = dataRow.children;
                e.target.id = "selected"
                for (i in childs){
                    childs[i].innerHTML = stats[i]
                }
                break;
            }
        }
    }
}