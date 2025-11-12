var e = document.body.firstElementChild.children
random()
function random(){
    for(let i=0;i<e.length;i++){
        e[i].style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        e[i].style.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    }
}