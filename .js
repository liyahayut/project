function generateGame() {
    var gameContainer = document.createElement("div");
    gameContainer.id = "game-container";
    document.body.appendChild(gameContainer);
    var buttonId = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            var square = document.createElement("div");
                square.className = "s";
                square.id = "element" + buttonId++;
                square.addEventListener("mousedown", function(event) {
                if (event.target.tagName.toLowerCase() === "img") {
                    startDragging(event, event.target);
                }
            });
            gameContainer.appendChild(square);
        }
    }

    function createPawn(src, id) {
        var img = document.createElement("img");
        img.src = src;
        img.className = "img";
        img.draggable = true;
        img.addEventListener("mousedown", function(event) {
            startDragging(event, img);
        });
        var element = document.getElementById("element" + id);
        element.appendChild(img);
    }

    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 8);
    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 9);
    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 10);
    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 11);
    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 12);
    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 13);
    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 14);
    createPawn("https://emojigraph.org/media/microsoft/chess-pawn_265f-fe0f.png", 15);

    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 48);
    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 49);
    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 50);
    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 51);
    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 52);
    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 53);
    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 54);
    createPawn("https://png.pngtree.com/png-clipart/20230816/original/pngtree-white-pawn-icon-outline-vector-picture-image_7978802.png", 55);
}
function startDragging(event, element) {
    event.dataTransfer.setData("text/plain", "ChessPawn");
    event.dataTransfer.setDragImage(element, 0, 0);
    element.style.position = "absolute";
    element.style.zIndex = 1000;
    var offsetX = event.clientX - element.getBoundingClientRect().left;
    var offsetY = event.clientY - element.getBoundingClientRect().top;
    function dragMove(event) {
        element.style.left = event.clientX - offsetX + "px";
        element.style.top = event.clientY - offsetY + "px";
    }
    function dragEnd() {
        document.removeEventListener("mousemove", dragMove);
        document.removeEventListener("mouseup", dragEnd);
    }
    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);
}