// ADD NEW ITEM TO END OF LIST
var elements = document.getElementsByTagName("ul")[0];
var end = document.createElement("li");
end.appendChild(document.createTextNode("cream"));
elements.appendChild(end);

// ADD NEW ITEM START OF LIST
var start = document.createElement("li");
start.appendChild(document.createTextNode("kale"));
var el1 = document.getElementById('one');
elements.insertBefore(start, el1);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var x = document.getElementsByTagName("ul")[0].querySelectorAll("li");
for (i = 0; i < x.length; i++) {
    x[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var number = x.length;
var e1 = document.getElementsByTagName('h2');
var v1 = "Buy groceries";
e1[0].textContent = v1 + " (" + number + ")";
