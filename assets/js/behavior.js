window.addEventListener('load', function(){ 
    var anchors = document.getElementsByClassName('navigation-item');
    
        
    for (var i = 0, l = anchors.length; i<l; i++){
        anchors[i].onclick = function(){
            viewSection(this);
        };
    }
    });

function viewSection(obj){
    var name = obj.innerHTML.trim().split(" ").join("-").toLowerCase();
    var anchors = document.getElementsByClassName('navigation-item');
    console.log(name);
    viewSectionId(name);
    for (var i = 0, l = anchors.length; i<l; i++){
        if(anchors[i].classList.contains('secondary-bg')){
            anchors[i].classList.remove("secondary-bg");
        }
    }

    obj.classList.add("secondary-bg");
}

function viewSectionId(name){
    var anchors = document.getElementsByClassName('section');
    
    for (var i = 0, l = anchors.length; i<l; i++){
        if(!anchors[i].classList.contains('hide')){
            anchors[i].classList.add("hide");
        }
        if(anchors[i].classList.contains('secondary-bg')){
        }
    }

    document.getElementById(name).classList.remove('hide');
    switch(name){
        case 'teams':
            list_teams_with_delete('teams-list');
            break;
        case 'score':
            list_teams_with_all('teams-list-with-all');
            break;
        case 'view':
            list_teams_with_points('teams-list-with-points');
            break;
        case 'clear':
            // list_teams_with_points('teams-list-with-points-only');
            break;
                
    }

}

var teams = [];
var points = [];


function add_team(){
    var name = document.getElementById('new-team');
    if(name.value){
    teams.push(name.value);
    points.push(0);

    list_teams('teams-list');}
    name.value = '';
}


function list_teams(div){
    var id = document.getElementById(div);
    id.innerHTML = '';
    for(var i=0, l=teams.length; i<l; i++){
        if(teams[i])
        id.innerHTML += "<div class='team-item'><div class='team-name inline-block'>"+teams[i]+"</div><div class='team-delete danger-bg button inline-block' onclick='delete_team(this)'>Delete</div></div>";
    }

}
function list_teams_with_delete(div){
    var id = document.getElementById(div);
    id.innerHTML = '';
    for(var i=0, l=teams.length; i<l; i++){
        if(teams[i])
        id.innerHTML += "<div class='team-item'><div class='team-name inline-block'>"+teams[i]+"</div><div class='team-delete danger-bg button inline-block' onclick='delete_team(this)'>Delete</div></div>";
    }

}

function list_teams_with_points(div){
    var id = document.getElementById(div);
    id.innerHTML = '';
    for(var i=0, l=teams.length; i<l; i++){
        if(teams[i])
        id.innerHTML += "<div class='team-item'><div class='team-name inline-block'>"+teams[i]+"</div><div class='points inline-block'>"+points[i]+"</div></div>";
    }
}
function list_teams_with_all(div){
    var id = document.getElementById(div);
    id.innerHTML = '';
    for(var i=0, l=teams.length; i<l; i++){
        if(teams[i])
        id.innerHTML += "<div class='team-item'><div class='subtract-point button danger-bg inline-block' onclick='subtract_point(this)'>-</div><div class='team-name inline-block'>"+teams[i]+"</div><div class='points inline-block'>"+points[i]+"</div><div class='add-point success-bg button inline-block' onclick='add_point(this)'>+</div><div class='add-bonus-point button alternative-bg inline-block' onclick='add_bonus_point(this)'>Bonus</div></div>";
    }
}

function delete_team(obj){
    var name = obj.parentElement.children[0].innerHTML;
    var index = teams.indexOf(name);
    teams[index] = null;
    points[index] = null;
    list_teams(obj.parentElement.parentElement.id);
}
function add_point(obj){
    var name = obj.parentElement.children[1].innerHTML;
    var point = parseInt(document.getElementById('points-to-add').value);
    if(isNaN(point)){
        point = 0;
    }
    var index = teams.indexOf(name);
    points[index] = parseInt(points[index]) + point;
    list_teams_with_all(obj.parentElement.parentElement.id);
}
function subtract_point(obj){
    var name = obj.parentElement.children[1].innerHTML;
    var point = parseInt(document.getElementById('points-to-subtract').value);
    if(isNaN(point)){
        point = 0;
    }
    var index = teams.indexOf(name);
    points[index] = parseInt(points[index]) - point;
    list_teams_with_all(obj.parentElement.parentElement.id);
}
function add_bonus_point(obj){
    var name = obj.parentElement.children[1].innerHTML;
    var point = parseInt(document.getElementById('bonus-points-to-add').value);
    if(isNaN(point)){
        point = 0;
    }
    var index = teams.indexOf(name);
    points[index] = parseInt(points[index]) + point;
    list_teams_with_all(obj.parentElement.parentElement.id);
}

function save(){
    window.print();
}

function new_round(){
    teams = [];
    points = [];
    viewSectionId('teams');
}