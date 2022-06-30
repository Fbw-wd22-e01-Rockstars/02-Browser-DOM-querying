// **Instructions**: 
// * Change the font of the body element. 
document.body.style.fontSize="16px";



// * Center the text of h1 on the page.
document.querySelector(".title").style.textAlign="center"


// * The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. 

//document.getElementsByClassName() //HTMLCollection
// document.querySelectorAll() //NodeList => only forEach method will work

document.querySelectorAll(".category").forEach(item=>{
    item.style.cssText="color:orange;font-style:italic"
})


// * Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created. 
// * Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.

function colorGenerator(){
    return `rgba(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)} ,${Math.floor(Math.random()*256)} ,${Math.random().toFixed(1)})`
}

document.querySelectorAll(".food-category").forEach(item=>{
    item.style.backgroundColor= colorGenerator()
    item.style.width="300px"
})


document.querySelector(".main").style.cssText="display:flex;flex-wrap:wrap;justify-content:space-evenly"

// * Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.

let warning = document.getElementById("warning")
warning.style.cssText = "font-size:20px;font-style:bold;"

// * Select all _even_ `allergy-info` items. Give the even items a different background color.
document.querySelectorAll(".allergy-info:nth-child(even)").forEach(elem=>{
 elem.style.backgroundColor="yellow"
})
/* document.querySelectorAll(".allergy-info").forEach((elem,index)=>{
    if(index%2!==0){
     elem.style.backgroundColor="yellow"
    }

   }) */


// * Make the `allergy-warning` appear as a column in the center of the page.

document.querySelector(".allergy-warning").style.textAlign="center";
//targeting ul class .allergies
document.querySelector(".allergies").style.width="350px"
document.querySelector(".allergies").style.margin="0 auto"
document.querySelector(".allergies").style.listStyle="none"


// * The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for deskto


document.querySelector(".footer").style.cssText= "display:flex;flex-wrap:wrap;justify-content:center;"

document.querySelectorAll(".food-desc").forEach(item=>{
    item.style.cssText = "width:100px;height:100px;border:5px solid yellow; border-radius:50%;display:flex;justify-content:center;align-items:center;margin:10px"
})