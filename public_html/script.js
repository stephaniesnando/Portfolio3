/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function (){
    $(".somestuff").css("background-color", "pink");
    $("p:last-child").css("color", "red");
    
    $("#alertButton").bind("click", alertButtonClick);
});

function alertButtonClick(){
    alert("You clicked my button")
}


