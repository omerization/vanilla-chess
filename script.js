//function that takes players names and prints them
const welcomer = () => {
    let whitePlayer = prompt("Name of white player", "White Player");
    let blackPlayer = prompt("Name of black player", "Black Player");
    if (whitePlayer != null) {
        document.getElementById("whitePlayer").innerHTML =
           "White Player:" + " " + whitePlayer 
    }
    if(blackPlayer != null) {
        document.getElementById("blackPlayer").innerHTML =
            "Black Player:" + " " +  blackPlayer
    }
}

// Invoke the welceme function when page is loaded
welcomer();

// Function that is going to be used when drag is started. Save the data of offset and data-item attributes
const drag_start = (event) => {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
}

// Function that is going to be used when element is dragging, doing nothing basically.
const drag_over = (event) => {
    event.preventDefault();
    return false;
}

// Function that is going to be used when element is dropped somewhere, changes the position of the element to where its dropped.
const drop = (event) => {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var piece = document.querySelectorAll(`[data-item='${(offset[2])}']`)
    piece[0].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    piece[0].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
}

// adding event listener for all elements of pieces collection
var pieces = document.getElementsByClassName('piece');
for (var i = 0; i < pieces.length; i++) {
    pieces[i].addEventListener('dragstart', drag_start, false);
    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
}
