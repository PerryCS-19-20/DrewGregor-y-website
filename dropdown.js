function buildMap(id){
    var main = document.getElementById(id);
    var list = document.createElement("ul");
    main.appendChild(list);
    var index = new Array(
    "Index","index.html",
    "Bio", "Bio.html",
    "Physics Simulator", "CircularMotion.html");
    for(var i=0; i<index.length; i=i+2){     
        var li= document.createElement("li");
        list.appendChild(li);
        var link = document.createElement("a");
        link.textContent= index[i];
        link.href= index[i+1];
        li.appendChild(link);    
    }  
    var droptitles = document.createElement("li");   
    var titlewords= document.createElement("a");   
    titlewords.href= "javascript:void(0)";
    titlewords.textContent="Class Projects";
    droptitles.appendChild(titlewords);
    list.appendChild(droptitles);   
    var dropdownbar = document.createElement("ul");
    droptitles.appendChild(dropdownbar);
    var newindex = new Array(
    "Formula","Formula.html",
    "Multiplication Table","multiplicationtable.html",
    "Breakout", "breakout.html",
    "Multiplication Slider", "MultiplicationTablePlus.html",
    "Chalkboard","Chalkboard.html",
    "Pop-up","Popup.html",
    "Tic Tac Toe","TicTacToe.html",
    "Html Test","htmltest.html",
    "To Do List","todolist.html",
    "Sitemap","sitemap.html");
    for(var i=0; i<newindex.length; i=i+2){     
        var lk=document.createElement("li");
        dropdownbar.appendChild(lk);
        var link = document.createElement("a");
        link.textContent= newindex[i];
        link.href= newindex[i+1];
        lk.appendChild(link);    
    }   
}
