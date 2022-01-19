import { generate_random_string, showModalError, showModalSuccess } from './functions.js';

export class App
{
    crafts = {};
    button = true;
    found_recipes = 0;
    alltries = 0;
    default_tries = 250000
    additional = 0
    added = [];
    all_recipes = [];

    constructor()
    {
        this.seed = (this.findGetParameter("seed").substring(0, 4) + " " + this.findGetParameter("seed").substring(4, 8)).toUpperCase();
        this.iscoop = this.findGetParameter("coop") ? 1 : 0;
        this.auth_id = generate_random_string(24);
        this.worker = new Worker("static/run_worker.js");
        this.stats = document.getElementById("stats")
        this.#fetch();
        this.#hardcodeCrafts();
        this.#deleteNotExistingRecipes();
        this.#setPossibleOptions();
    }

    #fetch()
    {
        fetch('https://tcain.heyn.live/db?seed='+this.findGetParameter("seed").substring(0, 4)+this.findGetParameter("seed").substring(4, 8)+"&auth_id="+this.auth_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json()).then(data => {
            this.crafts = JSON.parse(data["arr"])
            if (!(this.crafts == {})) {
                this.button = false;
            }
            this.found_recipes = 0;
            for (const [key, value] of Object.entries(crafts)) {
                for (x of value) {
                    this.found_recipes += 1
                }
            }
            showModalSuccess("Imported from web!" + "\n" + "Found " + this.found_recipes + " recipes");
        }).catch(error => {
            showModalError(error);
        });
    }

    #hardcodeCrafts()
    {
        for (let i=1;i<733;i++){
            if (this.crafts[i]==undefined || typeof this.crafts.length === undefined) {
                this.crafts[i] = []
            }
        }

        this.crafts[36][0] = [29, 29, 29, 29, 29, 29, 29, 29]
        this.crafts[37][0] = [15, 15, 15, 15, 15, 15, 15, 15]
        this.crafts[45][0] = [1, 1, 1, 1, 1, 1, 1, 1]
        this.crafts[75][0] = [22, 22, 22, 22, 22, 22, 22, 22]
        this.crafts[85][0] = [21, 21, 21, 21, 21, 21, 21, 21]
        this.crafts[118][0] = [3, 3, 3, 3, 3, 3, 3, 3]
        this.crafts[175][0] = [13, 13, 12, 12, 12, 12, 12, 12]
        this.crafts[177][0] = [8, 8, 8, 8, 8, 8, 8, 8]
        this.crafts[182][0] = [4, 4, 4, 4, 4, 4, 4, 4]
        this.crafts[331][0] = [5, 2, 1, 4, 4, 4, 4, 4]
        this.crafts[343][0] = [12, 12, 12, 12, 12, 12, 12, 12]
        this.crafts[483][0] = [17, 17, 17, 17, 17, 17, 17, 17]
        this.crafts[483][1] = [16, 16, 15, 15, 15, 15, 15, 15]
        this.crafts[489][0] = [24, 24, 24, 24, 24, 24, 24, 24]
        this.crafts[580][0] = [25, 25, 25, 25, 25, 25, 25, 25]
        this.crafts[628][0] = [6, 6, 6, 6, 6, 6, 6, 6]
        this.crafts[639][0] = [7, 7, 7, 7, 7, 7, 7, 7]
        this.crafts[654][0] = [3, 22, 22, 22, 22, 22, 22, 22]
        this.crafts[686][0] = [2, 2, 2, 2, 2, 2, 2, 2]
    }

    #deleteNotExistingRecipes()
    {
        // recipes that don't exist or ids are not present in the game
        this.unexisting = [73, 550, 551718, 666, 662, 648, 630, 620, 613, 587, 18, 130, 207, 119, 474, 550, 158, 668, 633, 293, 429, 715, 135, 238, 239, 626, 627, 132, 552, 714, 673, 9, 50, 328, 327, 90, 484, 181]
        for (let x of this.unexisting) {
            delete this.crafts[x]
        }
    }

    #setPossibleOptions()
    {
        this.possible_options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 22, 23] // removed 24, 25, giga items: 17, 20
        if (this.iscoop == 1) {
            this.possible_options.push(29)
        }
    }

    startWorker()
    {
        let started = false;
        this.worker.onmessage = event => {
            if (event.data == "1") {
                if (this.found_recipes >= 1999 && !started && this.button) {
                    let y = document.getElementById("send")
                    y.innerHTML = '<button id="send">Send recipes to server</button>'
                    document.getElementById('send').addEventListener('click', send);
                    started = true;
                }
            }
            else if (typeof(event.data) == "object" && event.data[0] == "all") {
                this.alltries += 1
            } else if (typeof(event.data) == "object" && event.data[0] == "item" && this.crafts[event.data[1]].length < 10) {
                this.crafts[event.data[1]].push(event.data[2])
                this.all_recipes.push(event.data[2])
                this.found_recipes += 1
            }
            this.#updateCounter();
        }
        this.worker.postMessage([4000, true, this.seed, this.crafts])
    }

    pauseWorker() {
        this.worker.postMessage(['pause']);
    }

    resumeWorker() {
        this.worker.postMessage([4000, true, this.seed, this.crafts]);
    }

    // function from https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
    findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        var items = location.search.substring(1).split("&");
        for (var index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        }
        return result;
    }

    #updateCounter()
    {
        this.stats.innerHTML = "Checked " + this.alltries + " recipes<br>Found " + this.found_recipes + " correct recipes";
    }
}