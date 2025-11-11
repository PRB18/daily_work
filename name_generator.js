function rand_names() {
    let rand = Math.random();
    var first, middle, last;

    if(rand<0.3) first = "Gigga";
    else if(rand<0.4) first = "Super";
    else if(rand<0.6) first = "Meowl";
    else first = "Nonchalant";

    rand = Math.random();

    if(rand<0.2) middle = "Final";
    else if(rand<0.5) middle = "Sigma";
    else if(rand<0.7) middle = "Chad";
    else middle = "Chopped";

    rand = Math.random();

    if(rand<0.3) last = "Form";
    else if(rand<0.5) last = "Boss";
    else if (rand<0.6) last = "Loser";
    else last = "Mogger";

    return first +" "+middle+" "+last;
}

console.log(rand_names());