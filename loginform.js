class Form{
    constructor(){

    }

display(){
var title=createElement("h2")
title.html("car racing")
title.position(150,20)

var input=createInput(" ").attribute("placeholder","Type Your Name")
 var button=createButton("PLAY")

input.position(120,200)
button.position(150,230)

button.mousePressed(function(){
    input.hide()
    button.hide()
var Name=input.value()
playercount++

var greeting=createElement("h3")
greeting.html("Hello"+Name)
greeting.position(200,200)
})


}



}