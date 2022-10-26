// okay there ends some nerd stuff and now there's my code (and my), at least at some point
import { App } from './mainClass.js';
import { item_id_to_name } from './items.js';
import { showModalError, showModalSuccess, swap, removeEveryNotFirstChildOfElement, insertInfoAfterElement } from './functions.js';

// Load some stuff and start searching for recipes
var app = new App();

// When page is loaded show all items
window.onload = function(){
    flush_ui(true);
};

// Adding some events to things
$("#search").on("keyup", function() {
    flush_ui();
});
$("#send").on('click', send).hide();
$("#pause").on('click', pauseWorker);
$('#resume').on('click', resumeWorker).hide();

/**
 * Pause searching
 */
function pauseWorker() {
    app.pauseWorker();
    $('#pause').hide();
    $('#resume').show();
}

/**
 * Resume searching
 */
function resumeWorker() {
    app.resumeWorker();
    $('#resume').hide();
    $('#pause').show();
}

/**
 * Outputs items that have ID or name that includes value in searchbar
 * 
 * @param {Boolean} showAll if true, shows all items regardles of what is in searchbar
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
        body: JSON.stringify({"seed": app.seed.replace(/ /g, ''), "auth_id": app.auth_id, "arr": JSON.stringify(app.crafts)})
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
 * @param {PointerEvent} event event handler
 */
function getRecipes(event) {
    event.target.innerHTML = '(Refresh)';
    let paths = (app.firefox) ? [] : event.path; 
    if (app.firefox) { // Support for Firefox and Safari, check https://github.com/heyngra/TCain-Explorer-Web/issues/4
        let target = event.target;
        while (target.parentNode != null) {
            paths.push(target);
            target = target.parentNode;
	    }
    }
    removeEveryNotFirstChildOfElement(paths[2]);

    let header = paths[1];
    let itemId = event.target.id;
    if(app.unexisting.includes(parseInt(itemId))) {
        insertInfoAfterElement('This item has no recipes', header);
    } else if (app.crafts[itemId].length == 0) {
        insertInfoAfterElement('No recipes found', header);
    } else {
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

/*
function run(tries_limit, no_popup=false) {
    let tries = 0;
    let currentPool = []
    while (true) {
        currentPool = combs1.next().value
        if (added.includes(currentPool)) {
            continue
        }
        //console.log(currentPool);
        let id = get_result(currentPool, str2seed(seed))
        tries += 1
        alltries += 1 
        if (unexisting.includes(id) || crafts[id].length >= 4) {
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
                //if (no_popup){window.alert("Found " + additional + " additional combinations")}
                additional = 0;
            }
            else if (tries >= tries_limit) {
                let x = document.getElementById("morebutton")
                x.innerHTML = "<button onclick=\"run(10000)\">Check more recipes</button>"
            }
            //console.log(crafts)
            setInterval(constant_run, 5);
            first_time = true;
            flush_ui(false)
            break
        }
    }
}
*/
//TODO:
// - enable all items, but that's kinda pointless
// - make better algorithm for finding recipes
// - add search remove a recipe button
