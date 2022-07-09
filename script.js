var arr1 = [{name:"TWITTER",img:"https://clipart.info/images/minicovers/1534043160twitter-logo-png-black.png"},
    {name:"INSTAGRAM",img:"https://www.pngmart.com/files/21/Instagram-Logo-Silhoutte-PNG-Image.png"},
    {name:"YOUTUBE",img:"https://i.pinimg.com/originals/5c/8f/7b/5c8f7bb502f3aa21a55814d82f260e56.png"}
];
// var arr2 = []

var btn1 = document.querySelector("button");

var clutter = "";
arr1.forEach(function(val){
    clutter +=`<div id="box">
    <div id="img1"><img src="${val.img}" alt=""></div>
   <div id="text1"><h1>${val.name}</h1></div>
   <div id="text2">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa necessitatibus praesentium et ipsa <br>
       <button>READ MORE</button>
   </div>
</div>`;
});


 btn1.addEventListener("click", function(){
    document.querySelector(".rect").innerHTML=clutter;
 });