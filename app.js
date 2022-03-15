
var arr=["black","blue","orange","pink","white"];
var black=["black","black","black","black","black",]
var blue=["blue","blue","blue","blue","blue",]
var orange=["orange","orange","orange","orange","orange",]
var pink=["pink","pink","pink","pink","pink",]
var white=["white","white","white","white","white",]


   function first(){ 
    var x=0;
    for(var i=0;i<arr.length;i++){ 
    var imageElement=document.createElement("img");
    
    imageElement.setAttribute("src",`./images/cycle-${arr[i]}.jpg`);
 
    imageElement.setAttribute("id",x+i)
    

  
    // console.log(imageElement)
    imageElement.setAttribute("onclick","fun"+x+i+"()");


    // var outerElemnt=document.getElementById("inner-image2");

    var outerElemnt=document.getElementById("inner-image2")

    outerElemnt.appendChild(imageElement)


  

    
    // document.querySelectorAll('.carousel-item').forEach((item)=>{item.style.display='block'})

    }
     
    }

    
    // }}
    function USeAble(){  

        var replaceImg=document.getElementById("first");
        var dataUSe=document.querySelectorAll("#inner-image2 >img");
        // console.log(dataUSe)
        dataUSe.forEach(function(i){
     
        i.addEventListener('click',function(){
          
            replaceImg.src=i.src;
        })
    })
}

first();
USeAble();

function back(){
    var dataUSe=document.getElementById("inner-image2").innerHTML="";
    first();
    USeAble();
   

}

function hide(){
    var clean=document.getElementById("clean").innerHTML=""
    var image=document.getElementById("image").style.height="100vh"
    var over=document.getElementById("main").style.border="none"

}

function Border(){
    
var replaceImg=document.getElementById("first");
var dataUSe=document.querySelectorAll("#inner-image2 >img");
// console.log(dataUSe)
dataUSe.forEach(function(i){

i.addEventListener('mouseover',function(){
  
   i.style.border = "2px solid red";
   i.style.boxShadow = "5px 5px 10px red"; 

  
})

i.addEventListener('mouseout',function(){
  
    i.style.border = "none";
    i.style.boxShadow = "none"; 
  
 })

})
}

Border();
   


function fun00(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<black.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${black[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)


    
    }
    USeAble();
    Border();
    

}
function fun01(){

    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<blue.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${blue[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}    
function fun02(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<orange.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${orange[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}
function fun03(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<pink.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${pink[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}
 
function fun04(){
    


    var dataUSe=document.getElementById("inner-image2").innerHTML="";
 
    for(var i=0;i<white.length;i++){
     var imageElement=document.createElement("img");
     imageElement.setAttribute("src",`./images/cycle-${white[i]}.jpg`);
     var placement=document.getElementById("inner-image2");
     placement.appendChild(imageElement)
    
    }
    USeAble();
    Border();
}



var leftBtn=document.getElementById("sideLeft");
var rightBtn=document.getElementById("sideRight")
leftBtn.addEventListener('click',function(){
    document.getElementById("inner-image2").scroll+=450;
  
})
rightBtn.addEventListener('click',function(){
    document.getElementById("inner-image2").scroll-=450;
})





$('.main').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });