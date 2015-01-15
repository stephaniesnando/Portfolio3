/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function (){
    $(".somestuff").css("background-color", "pink");
    $("p:last-child").css("color", "red");
    
    $('#superHumans').accordion({header: "h3"});
    
    $("#alertButton").bind("click", alertButtonClick);
            
    $("h1").bind("mouseover", mouseOverMe).bind("mouseout", mouseOutMe);
   
    $("h1").bind("click", mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    $('show').bind('click', showThePage);
    
    $("button").click(function(){
    $("div").animate({left:'250px'});
  });

});

function hideThePage(){
    $("div").hide("slide", {}, 2500);
}

function showThePage(){
    $("div").show("fold", {}, 2500);
}

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


