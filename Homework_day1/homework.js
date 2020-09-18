let button1 = document.getElementById('bstop');
button1.addEventListener("click", function () {
    clear();
    document.getElementById('lstop').style.backgroundColor = "red";
})
let button2 = document.getElementById('bslow');
button2.addEventListener("click", function () {
    clear();
    document.getElementById('lslow').style.backgroundColor = "yellow";
})
let button3 = document.getElementById('bgo');
button3.addEventListener("click", function () {
    clear();
    document.getElementById('lgo').style.backgroundColor = "green";
})
function clear()
{
    document.getElementById('lstop').style.backgroundColor = "black";
    document.getElementById('lslow').style.backgroundColor = "black";
    document.getElementById('lgo').style.backgroundColor = "black";
}
