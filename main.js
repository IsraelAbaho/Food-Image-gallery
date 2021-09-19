const navBar = document.getElementById('nav_Bar'),
      toggleBtn = document.getElementById('toggle_Id');

toggleBtn.addEventListener('click', ()=>{
    navBar.classList.toggle('showNavBar')
})      

const nav = document.querySelectorAll(".navLink");

function takeAction (){
    navBar.classList.remove('showNavBar')
}
nav.forEach(n=>n.addEventListener('click', takeAction))

// LET US MAKE CHANGE BUTTONS ACTIVE AS PER THE IMAGE, WE HAVE 4 IMAGES WITH DIFFERENT NAMES ie 1,2,3,4

const imgBtn = document.querySelectorAll('.btn'),
       image = document.querySelector('#image');

let images = new Array(
    // here we are going to put all the images in our folder.....
    "./images/2.jpg",
    "./images/1.jpg",
    "./images/3.jpg",
    "./images/4.jpg"
);      

// Now let us add an event listenner to the button so that the images changes on click....

for(let b = 0; b < imgBtn.length; b++){
    imgBtn[b].addEventListener('click', function(){
        image.src = images[b];

        // but you notice that the active button indicator doesnt change
        for(let i = 0; i < imgBtn.length; i++){
           imgBtn[i].classList.remove('active');
        }
        this.classList.add('active')
     
    })
}