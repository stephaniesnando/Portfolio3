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

});

function alertButtonClick(){
    alert("You clicked my button")
}

function mouseOverMe(){
    $("h1").html("blah blah");
}
function  mouseOutMe(){
    $("h1").html("whatever forever");
}

function mouseClick(){
    $("p").html("you clicked..");
}


