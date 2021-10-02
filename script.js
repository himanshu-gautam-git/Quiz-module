var Questions=[
    'What does HTML stand for?','What is full form of CSS?',' Which type of JavaScript language is:','Which one of the following also known as Conditional Expression:','Inside which HTML element do we put the JavaScript?'
];

var options={
    0:['Hyper Text Markup Langauge','Home Tool Markup Langauge','HyperLinks Text Markup Langauge ','Hype Tree Maintainance Language'],
    1:['None of the above','Cascading sheets styles','CS  Styles','CSE style sheets']
    ,
    2:['Object-Oriented','Object-Based','Assembly-language','High-level'],
    3:[
'Alternative to if-else','Switch statement','If-then-else statement','immediate if'],
4:[
    '<html>','script','<input>','<body>'
]
};

var opt={
    0:'A',1:'B',2:'C',3:'D'
};
var optrev={
    'A':0,'B':1,'C':2,'D':3
};

var correctAns=['Hyper Text Markup Langauge','None of the above','Object-Based','immediate if','script'];

var count=0;
var score=0;
var ans='';


function Display(){
    ans="";
    //div
    var Q=document.getElementById('QA');
    Q.innerHTML = "";
    var c=document.createElement("h2");
    var cnode=document.createTextNode("Ques. "+(count+1));
    var Ques = document.createElement("h1");
    var node = document.createTextNode(Questions[count]);
    Ques.appendChild(node);
    Q.append(cnode);
    Q.append(Ques);


for(var i=0;i<4;i++){

    var x=document.createElement("INPUT");
    x.setAttribute("type", "radio");
    x.setAttribute("value",opt[i]);
    x.setAttribute("id",opt[i]);
    x.setAttribute("onclick","myfun(this.value)");
    x.setAttribute("name","pass");
    x.setAttribute("class","disable");
    var node=document.createTextNode(options[count][i]);

    var la = document.createElement("LABEL");
    la.appendChild(node);
    la.setAttribute("for",opt[i]);

    var bre=document.createElement('BR');


    Q.append(x,la,bre);
}

var butt=document.createElement("BUTTON");
var node1=document.createTextNode("Submit");
butt.append(node1);
butt.classList.add("btn");
butt.classList.add("btn-warning");
butt.setAttribute("onclick","master()");
butt.setAttribute("id","control");
//empty Span
var span=document.createElement("span");
span.setAttribute("id","Feedback");
var bre=document.createElement('BR');
var bre2=document.createElement('BR');
var bre3=document.createElement('BR');
Q.append(bre,span,bre2,bre3,butt);


// count=count+1;
}
function myfun(value){
    ans=value;
}
function DisableInput(val){
    var x = document.getElementsByClassName("disable");
var i;
// alert alert-success
for (i = 0; i < x.length; i++) {
    x[i].disabled = true;
}
var span =document.getElementById("Feedback");
    if(val==1){
        span.innerHTML = "";
        span.classList.add("alert");
        span.classList.add("alert-success");
        // console.log('Correct');
        var nodeF=document.createTextNode("Correct");
        span.append(nodeF);

    }else{
        span.innerHTML = "";
        span.classList.add("alert");
        span.classList.add("alert-danger");
        // console.log('incorrect');
        var nodeF=document.createTextNode("Incorrect");
        span.append(nodeF);
    }
}
function Feedback(){
    var str='';
    for(var i=0;i<correctAns.length;i++){

        str=str+'<li>'+Questions[i]+' <span class="bg bg-success rounded-top rounded-bottom ">'+correctAns[i]+'</span></li>';
    }
    str='<ul>'+str+'</ul>';
    var Q=document.getElementById('QA');
    Q.innerHTML = str;
    var Quiz=document.getElementById('Quiz');
    Quiz.innerHTML='Score: '+score+'/5';
    var butt=document.createElement("BUTTON");
var node1=document.createTextNode("Restart");
butt.append(node1);
butt.classList.add("btn");
butt.classList.add("btn-primary");
butt.setAttribute("onclick","Restart()");
butt.setAttribute("id","control");
document.getElementById('QA').append(butt);
}
function Restart(){
    count=0;
    score=0;
    document.getElementById('Quiz').innerHTML='Quiz';
    Display();
}
// function skip(){
    // Feedback();
// }
function master(){
var butt=document.getElementById('control');
if(butt.classList.contains('btn-success')){
    count=count+1;
    if(count<correctAns.length){
    Display();
    }
    else{
        Feedback();
    }
}else{

    if(options[count][optrev[ans]]==correctAns[count]){
        DisableInput(1);
        score=score+1;
}else{
    DisableInput(0);
}

butt.innerHTML='next';
butt.classList.remove("btn-warning");
butt.classList.add("btn-success");
}
}