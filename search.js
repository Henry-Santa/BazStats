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
var lockSwitch = document.getElementById("lock")
var openedItems = []
var oldClicks = []

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
    if (oldClicks.length !== 0  && !lockSwitch.checked){
        for(index in oldClicks){
            oldClicks[index]["element"].innerHTML = oldClicks[index]["dispName"]
            oldClicks[index]["element"].id = "";
        }
        oldClicks = []
    }
    for (idx in results){
        let newLi = document.createElement("li");
        newLi.textContent = results[idx].dispName;
        newLi.id = results[idx].dispName;
        listHead.appendChild(newLi);
        currResults.push(newLi);
    }
    for(i in currResults){
        
        if (openedItems.includes(currResults[i].id)){
            currResults[i].className = "selected";
            let newClick = {}
            newClick["element"] = currResults[i];
            newClick["dispName"] = newClick["element"].id;
            oldClicks.push(newClick)
            let stats = myBaz.getItem(newClick["element"].id).getStats();
            newClick["element"].innerHTML = newClick["element"].innerHTML + tableText
            let dataRow = newClick["element"].children[0].children[0].children[1];
            let childs = dataRow.children;
            for (i in childs){
                childs[i].innerHTML = stats[i];
            }
            openedItems.push(newClick["dispName"]);
            dataRow.id = "";
        }
        
    }
};


window.onclick = e => {
    
    if (e.target.tagName === "LI"){
        if (oldClicks.length !== 0  && !lockSwitch.checked){
            for(index in oldClicks){
                oldClicks[index]["element"].innerHTML = oldClicks[index]["dispName"]
                oldClicks[index]["element"].id = "";
                oldClicks[index]["element"].className = "";
            }
            oldClicks = []
            
        } if (!lockSwitch.checked){
            openedItems = []
        }
        for (i in currResults){
            if (myBaz.itemList[i].dispName == e.target.innerHTML){
                e.target.className = "selected";
                let newClick = {};
                newClick["element"] = e.target;
                newClick["dispName"] = myBaz.itemList[i].dispName;
                oldClicks.push(newClick)
                let stats = myBaz.itemList[i].getStats();
                e.target.innerHTML = e.target.innerHTML + tableText
                let dataRow = document.getElementById("data")
                let childs = dataRow.children;
                for (i in childs){
                    childs[i].innerHTML = stats[i];
                }
                openedItems.push(newClick["dispName"]);
                dataRow.id = "";
                break;
            }
        }
    } else if(e.target.id === "lock" && !lockSwitch.checked){
        openedItems = []
        search()
    }
}