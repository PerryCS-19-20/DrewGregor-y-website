function buildMap(id){
    var map = document.getElementById(id);
    var list = document.createElement("ul");
    map.appendChild(list);
    var index = new Array(
    "Index","index.html",
    "Bio", "Bio.html",
    "Formula","Formula.html",
    "Multiplication Table","multiplicaiontable.html",
    "Breakout", "breakout.html",
    "Multiplication Slider", "MultiplicationTablePlus.html",
    "Physics Simulator", "CircularMotion.html",
    "Chalkboard","Chalkboard.html",
    "Pop-up","Popup.html",
    "Tic Tac Toe","TicTacToe.html",
    "Html Test","htmltest.html",
    "To Do List","todolist.html",
    "Sitemap","sitemap.html");
    for(var i=0; i<25; i=i+2){     
        var li= document.createElement("li");
        list.appendChild(li);
        var link = document.createElement("a");
        link.textContent= index[i];
        link.href= index[i+1];
        li.appendChild(link);    
    }   
}
