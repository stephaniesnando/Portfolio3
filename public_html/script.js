/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function (){
    $(".somestuff").css("background-color", "pink");
    $("p:last-child").css("color", "red");
    
    $("#alertButton").bind("click", alertButtonClick);
            
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
   
    $("h1").bind("click", mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);

});

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>CooOooOool</p>');
}

function replaceWText(){
    $('#replaceWText').text('Bye!');
}

function alertButtonClick(){
    alert("You clicked my button")
}

function mouseOverMe(){
    $("h1").html("CooOoooOl");
}
function  mouseOutMe(){
    $("h1").html("whatever forever");
}

function mouseClick(){
    $("p").html("you clicked..");
}


