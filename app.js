
let who = ["Mamá", "Mi perrito", "La tarantula", "Max"];

let what = ["la mojo", "la aplasto", "la rompio", "la destrozo"];

let when = ["justo ahora", "cuando terminé", "durante mi almuerzo", "mientras me bañaba"];

function generator (parts) {  
    
    var string = "";

    for(i in parts) {
        var rand = Math.floor( Math.random() * parts[i].length );
        var space=(i==parts.length-1)?"":" ";
        string += parts[i][rand]+space;
    }
    
    string += ".";
    return string;
}

function cargarText () {

    var newP = document.createElement('p');
    var newContent = document.createTextNode(generator([who, what, when]));
    var text = document.getElementById("excusa");

    newP.appendChild(newContent);

    document.body.appendChild(newP, text);
}


