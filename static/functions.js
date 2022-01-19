// Here are functions that don't need external variables

/**
 * Generates random string
 * 
 * @param {number} len length of string
 * @returns {string}
 */
export function generate_random_string(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

/**
 * Shows error modal with custom message that disappears after 3s
 * 
 * @param {string} msg custom message
 */
export function showModalError(msg) {
    let modal = document.getElementById('modal');
    modal.children[0].children[0].className = 'text-error';
    modal.children[0].children[0].innerHTML = msg;
    modal.style.display = 'block';
    setTimeout(hideModal, 3000);
}

/**
 * Shows success modal with custom message that disappears after 3s
 * 
 * @param {string} msg custom message
 */
export function showModalSuccess(msg) {
    let modal = document.getElementById('modal');
    modal.children[0].children[0].className = 'text-success';
    modal.children[0].children[0].innerHTML = msg;
    modal.style.display = 'block';
    setTimeout(hideModal, 3000);
}

/**
 * Runs animation that hides modal
 */
export function hideModal() {
    $('#modal').animate({
        opacity: 0
    }, 1000, function(){
        let modal = document.getElementById('modal');
        modal.style.display = 'none';
        modal.style.opacity = 1;
    });
}

/**
 * Swaps keys with values in array
 * 
 * @param {Array} json 
 * @returns {Array}
 */
export function swap(json) {
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
}