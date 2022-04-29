var newData = document.getElementById('notebox');
var newFrnd = document.getElementById('leftName');
var newFrnd1 = document.getElementById('rightName');

var leftNameData = new Array();
var functionNameData = new Array();
var rightNameData = new Array();
var index = 0;
function getleftName(e) {
    e.preventDefault();
    var leftName = document.getElementById("leftName");
    var leftName1 = leftName.options[leftName.selectedIndex].text;
    console.log(leftName1);
    leftNameData[index] = leftName1;

}
function getFunctionName(e) {
    e.preventDefault();
    const activityName = document.getElementById("function");
    var activityName1 = activityName.options[activityName.selectedIndex].text;

    console.log(activityName1);
    functionNameData[index] = activityName1;


}
function getRightName(e) {
    e.preventDefault();
    var rightName = document.getElementById("rightName");
    var rightName1 = rightName.options[rightName.selectedIndex].text;

    console.log(rightName1);
    rightNameData[index] = rightName1;

}

function addDataItem(e) {
    e.preventDefault();
    var amount = document.getElementById("Amount").value;
    var x = leftNameData[index] + " " + functionNameData[index] + " " + amount + " rupess to " + rightNameData[index] + "\n";
    var div = document.createElement('li');
    div.className = 'newdata';
    var divText = x;
    div.appendChild(document.createTextNode(divText));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.id = 'newData1';
    deleteBtn.appendChild(document.createTextNode('X'));
    div.appendChild(deleteBtn);
    newData.appendChild(div)
    deleteBtn.addEventListener('click', removeData);
}
document.getElementById("adddataitem").addEventListener("click", addDataItem);

function removeData(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var div = e.target.parentElement;
            newData.removeChild(div);
        }
    }
}
function addNewFrnd(e) {
    var count =true;
    e.preventDefault();
    var newFrndDiv = document.createElement('option');
    var newFrndName = document.getElementById('Name').value;
    for (var i = 0; i < document.getElementById("leftName").length; ++i){
        if (document.getElementById("leftName").options[i].value == newFrndName){
          alert(`${newFrndName} already exists`);
          count =false;
        }
    }
    if(count){
        newFrndDiv.value = 'Friend4';
        newFrndDiv.appendChild(document.createTextNode(newFrndName));
        newFrnd.appendChild(newFrndDiv);
    }

}
function add(e) {
    e.preventDefault();
    var count =true;

    var newFrndDiv = document.createElement('option');
    var newFrndName = document.getElementById('Name').value;
    for (var i = 0; i < document.getElementById("rightName").length; ++i){
        if (document.getElementById("rightName").options[i].value == newFrndName){
         
          count =false;
        }
    }
    if(count){
        newFrndDiv.value = 'Friend4';
        newFrndDiv.appendChild(document.createTextNode(newFrndName));
        newFrnd1.appendChild(newFrndDiv);
    }

}
document.getElementById('newFrnd').addEventListener("click", add);
function darkMode(e) {
    e.preventDefault();
    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'aquamarine';
        var elements = document.getElementsByClassName('main');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "rgb(53, 49, 49)";
        }
        var element = document.getElementsByClassName('p');
        for (var i = 0; i < element.length; i++) {
            element[i].style.color = "white";
        }

        var ele = document.getElementsByClassName('newdata');
        for (var i = 0; i < ele.length; i++) {
            ele[i].style.color = "black";
            ele[i].style.backgroundColor = "whitesmoke";
        }
        var elem = document.getElementsByClassName('delete');
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.color = "white";
            elem[i].style.backgroundColor = "black";
        }
        var darkModeBtn = document.getElementById('darkmode');
        darkModeBtn.innerHTML='🌞';
    }
    else {
        document.body.style.backgroundColor = 'black';
        var elements = document.getElementsByClassName('main');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "aquamarine";
        }
        var element = document.getElementsByClassName('p');
        for (var i = 0; i < element.length; i++) {
            element[i].style.color = "black";
        }

        var ele = document.getElementsByClassName('newdata');
        for (var i = 0; i < ele.length; i++) {
            ele[i].style.color = "white";
            ele[i].style.backgroundColor = "black";
        }
        var elem = document.getElementsByClassName('delete');
        for (var i = 0; i < elem.length; i++) {
            elem[i].style.color = "black";
            elem[i].style.backgroundColor = "white";
        }
        var darkModeBtn = document.getElementById('darkmode');
        darkModeBtn.innerHTML='🌙';
    }
}