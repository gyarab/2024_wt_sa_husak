const imgs = ["https://placecats.com/millie/150/150", "https://placecats.com/millie_neo/150/150", "https://placecats.com/neo_banana/150/150", "https://placecats.com/neo_2/150/150"]

let reverse = false;

let guessed = [];

let pair = [];

function show(id) {
    if (reverse) {
        reverse_cards();
        return;
    }

    const card = document.getElementById("p" + id);

    if (card.src === "https://placehold.co/150x150") {
        card.src = id < 5 ? imgs[id - 1] : imgs[id - 5];
        pair.push(card);

        if (count() === 2) {
            if (!check()) { 
                reverse = true;            
                return;
            }
            else {
                guessed.push(...pair);
                pair[0].classList.add("guessed");
                pair[1].classList.add("guessed");
                pair = [];
            }
        }
    }
}

function reverse_cards() {
    for (let i = 1; i <= 8; i++) {
        if (!guessed.map(x => x.src).includes(i < 5 ? imgs[i - 1] : imgs[i - 5])) {
            document.getElementById("p" + i).src = "https://placehold.co/150x150";
        }   
    }
    reverse = false;
    pair=[];
}

function count() {
    return pair.length;
}

function check() {
    return pair.length === 2 ? pair[0].src === pair[1].src : false;
}

function reset() {
    guessed.forEach(x => x.classList.remove("guessed"));
    pair=[];
    guessed=[];
    reverse=false;
    reverse_cards();
}