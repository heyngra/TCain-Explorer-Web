import { item_id_to_name } from './items.js';
import { App, showModalError, showModalSuccess } from './mainClass.js';

// okay there ends some nerd stuff and now there's my code (and my), at least at some point

// Start searching for items
var app = new App();
app.startWorker();

// When page is loaded show all items
window.onload = flush_ui(true);

// Adding some events to things
$("#search").on("keyup", function() {
    flush_ui();
});
$("#send").on('click', send);
$("#pause").on('click', pauseWorker);
$('#resume').on('click', resumeWorker);

/**
 * Pause searching
 */
function pauseWorker() {
    app.pauseWorker();
}

/**
 * Resume searching
 */
function resumeWorker() {
    app.resumeWorker();
}

function swap(json) {
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
}

// Idk why this function is here but why not
function run(tries_limit, no_popup=false) {
    let tries = 0;
    let currentPool = [];
    while (true) {
        currentPool = combs1.next().value
        if (added.includes(currentPool)) {
            continue
        }
        let id = get_result(currentPool, str2seed(seed))
        tries += 1
        alltries += 1 
        if (app.unexisting.includes(id) || crafts[id].length >= 4) {
            added.push(currentPool)
            continue
        }
        if (!crafts[id].includes(currentPool)) {
            if (crafts[id].length >= 4) {
                added.push(currentPool)
                continue
            }
            if (tries_limit != default_tries) {additional +=1}
            found_recipes += 1
            crafts[id].push(currentPool)
        }
        added.push(currentPool)
        if (tries >= tries_limit || done(crafts, 4)) {
            if (done(crafts, 4)) {
                window.alert("Done!")
            }
            else if (tries_limit != default_tries) {
                additional = 0;
            }
            else if (tries >= tries_limit) {
                let x = document.getElementById("morebutton")
                x.innerHTML = "<button onclick=\"run(10000)\">Check more recipes</button>"
            }
            flush_ui()
            break
        }
    }
}

/**
 * Outputs items that has ID or name that includes value in searchbar
 * 
 * @param {*} showAll if true, shows all items regardles of what is in searchbar
 */
function flush_ui(showAll = false){
    let divbox = document.getElementById("output")
    let output = ""
	let srchbar = document.getElementById('search').value;
    if(showAll) {
        srchbar = '';
    }
    let swapped = swap(item_id_to_name);
    let foundItems = [];
    Object.keys(swapped).forEach(function(item) {
        if (item.toLocaleLowerCase().includes(srchbar.toLocaleLowerCase()) || swapped[item].toString().toLocaleLowerCase().includes(srchbar.toLocaleLowerCase())) {
            let itemId = swapped[item];
            let itemObj = {
                itemName: item,
                itemId: itemId
            }
            foundItems.push(itemObj);
        }
    });
    
    Object.keys(foundItems).forEach(function(key) {
        output +=
        '<div class="item">' +
            '<h1>'+foundItems[key].itemId+'. '+foundItems[key].itemName+' <span id="'+foundItems[key].itemId+'" class="clickable">(Show Recipes)</span></h1>' +
        '</div>';
    })

    divbox.innerHTML = output

    Object.keys(foundItems).forEach(function(key) {
        document.getElementById(foundItems[key].itemId.toString()).addEventListener('click', getRecipes);
    })
}

/**
 * Sends found recipes to the database
 */
function send() {
    fetch('https://tcain.heyn.live/db', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"seed": app.seed, "auth_id": app.auth_id, "arr": JSON.stringify(app.crafts)})
    })
    .then(function() {
        showModalSuccess("Recipes successfully send to server");
        let y = document.getElementById("send")
        y.innerHTML = "<button disabled=\"true\">Send recipes to server</button>"
    })
    .catch(reason => {
        showModalError(reason);
    });
}

/**
 * Outputs all found recipies by id in event target
 * 
 * @param {Event} event event handler
 */
function getRecipes(event) {
    event.target.innerHTML = '(Refresh)';
    let header = event.path[1];
    const parentDiv = event.path[2];
    while (parentDiv.childElementCount != 1) {
        parentDiv.removeChild(parentDiv.lastChild);
    }

    let itemId = event.target.id;
    const found = app.unexisting.find(el => el == itemId);
    if(found) {
        let error = document.createElement('h3');
        error.innerHTML = 'This item has no recipes';
        header.parentNode.insertBefore(error, header.nextSibling);
    }
    else if (app.crafts[itemId].length == 0) {
        let error = document.createElement('h3');
        error.innerHTML = 'No recipes found';
        header.parentNode.insertBefore(error, header.nextSibling);
    }
    else {
        for (let _=0; _<app.crafts[itemId].length; _++) {
            let div = document.createElement('div');
            div.classList.add('recipe');
            for (let i=0; i<8; i++) {
                let img = document.createElement('img');
                img.classList.add("bofsym_"+app.crafts[itemId][_][i]);
                div.appendChild(img);
            }
            header.parentNode.insertBefore(div, header.nextSibling);
        }
    }
}

//TODO:
// - enable all items, but that's kinda pointless
// - make better algorithm for finding recipes
// - add search remove a recipe button