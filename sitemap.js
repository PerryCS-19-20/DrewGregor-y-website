function buildMap(id){
 var sitemap = getElementById(id);
 var list = document.createElement("ul");
 sitemap.appendChild(list);
 var index = new Array("home","index.html",
 "Bio", "Bio.html",
 "Formula","Formula.html",
 "Multiplication Table","multiplicaiontable.html",
 "Breakout", "breakout.html",
 "Multiplication Slider", "MultiplicationTablePlus",
 "Physics Simulator", "CircularMotion.html",
 "Chalkboard","Chalkboard.html",
 "Pop-up","Popup.html",
 "Tic Tac Toe","TicTacToe.html",
 "Html Test","htmltest.html",
 "Index","index.html",
 "To Do List","todolist.html",
 "Sitemap","sitemap.html");
 for(var i=0; i<26; i=i+2){
 var li= document.createElement("li");
 ul.appendChild(li);
 var link = document.createElement("a");
 a.textContent= index[i];
 a.href= index[i+1];
 li.appendChild(link);
 }
}
