let amount = 0;
let id1 = 0;
let id2 = 1;
let pole = [];

function show(n) {
    amount++;

    if (amount > 2) {       
        if (id1 != id2) {
            document.getElementById('p1').src = 'https://placehold.co/200';
            document.getElementById('p2').src = 'https://placehold.co/200';
            document.getElementById('p3').src = 'https://placehold.co/200';
            document.getElementById('p4').src = 'https://placehold.co/200';
            document.getElementById('p5').src = 'https://placehold.co/200';
            document.getElementById('p6').src = 'https://placehold.co/200';
            amount = 0;
            id1 = 0;
            id2 = 1;
            return;
        }  
        amount = 0;
        id1 = 0;
        id2 = 1;    
    }
    let id = 'p' + n;
        let img = document.getElementById(id);

        let src;
        switch(n) {
            case 1:
            case 4:
                src = 'https://placecats.com/millie/200/200';
                break;
            case 2:
            case 5:
                src = 'https://placecats.com/neo/200/200';
                break;
            case 3:
            case 6:
                src = 'https://placecats.com/bella/200/200';
                break;
        }

        img.src = src;
        if (amount === 1) {
            id1 = src;
        }
        else id2 = src;
}