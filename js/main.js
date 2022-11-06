// DOM CONTENT LOADED =====================================================
// event to execute when page loads
document.addEventListener("DOMContentLoaded", function() { 
    // set timeout event to stop the loading animation after 2000ms
    setTimeout(function(){
        document.getElementById("loader").style.display="none"},1500);
    });

// load carousel when page loads
document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide( '.splide', {
    // free dragging carousel
    type   : 'loop',
    drag   : 'free',
    snap  : false,
    perPage: 3,
} );

splide.mount();
} );


// BACKGROUND MUSIC =====================================================

    // GET audio
    var myAudio = document.getElementById("music");
    // GET audio on/off icons
    var myAudioSVG = document.getElementById("soundonSvg");
    var myAudioSVGOFF = document.getElementById("soundoffSvg");

    //function that plays audio when the icon is clicked on, it also switches the icon
    function togglePlay() {
        myAudioSVG.style.display="block";
        myAudioSVGOFF.style.display="none";
        return myAudio.play();
    }

    //function that pauses audio when the icon is clicked on, it also switches the icon
    function toggleStop() {
        myAudioSVG.style.display="none";
        myAudioSVGOFF.style.display="block";
        return myAudio.pause();
    }

// NAVIGATION BAR =====================================================

    // GET all the navigation links
    var navli1 = document.querySelector('.navli1');
    var navli2 = document.querySelector('.navli2');
    var navli3 = document.querySelector('.navli3');
    var navli4 = document.querySelector('.navli4');
    var navli5 = document.querySelector('.navli5');

    // GET the whole navigation bar
    var navbar = document.querySelector('nav');

    window.onscroll = function() {
        // the navbar is mostly invisible in the first section of the page
        if (window.pageYOffset >= 600){
            navbar.style.display = "grid";
        } else {
            navbar.style.display = "none";
        }

        // on scroll to a certain point of the page, color of navbar turns white, else turns black again
        if (window.pageYOffset >= 1400) {
            navli1.style.color = "#fff";
            navli2.style.color = "#fff";
            navli3.style.color = "#fff";
            navli3.style.borderColor = "#fff";
            navli4.style.color = "#fff";
            navli5.style.color = "#fff";
        } else {
            navli1.style.color = "#1E1E1E";
            navli2.style.color = "#1E1E1E";
            navli3.style.color = "#1E1E1E";
            navli3.style.borderColor = "#1E1E1E";
            navli4.style.color = "#1E1E1E";
            navli5.style.color = "#1E1E1E";
        }
    };


// HERO section =====================================================

    // GET the click event from all 3 white buttons
    let dot1 = document.querySelector('.item-hints');
    let dot2 = document.querySelector('.item-hints2');
    let dot3 = document.querySelector('.item-hints3');

    // GET textbox container that will disappear
    let textbox = document.querySelector('#hero .container');

    // ADD EVENT that runs when each white dot is clicked, it will hide the default text on the image to display the text that appears on hovering on each dot
    dot1.addEventListener('mouseover', function (){
        document.getElementById('headerTitleSection').style.display="none";
    });
    dot2.addEventListener('mouseover', function (){
        document.getElementById('headerTitleSection').style.display="none";
    });
    dot3.addEventListener('mouseover', function (){
        document.getElementById('headerTitleSection').style.display="none";
    });

    //on mouse out of hint, the original text appears again
    dot1.addEventListener('mouseout', function () {
        document.getElementById('headerTitleSection').style.display="block";
    });
    dot2.addEventListener('mouseout', function () {
        document.getElementById('headerTitleSection').style.display="block";
    });
    dot3.addEventListener('mouseout', function () {
        document.getElementById('headerTitleSection').style.display="block";
    });


// TRY IT ON MODEL =====================================================

    // attempted to change the size of dress on each value of the range slider but I could not obtain a value

    // changing dress colour -------------------------------------------

    // GET dress image
    var dress = document.getElementById('dress');
    // GET radio buttons
    var whiteButton = document.getElementById('white');
    var ivoryButton = document.getElementById('ivory');
    // GET labels of the radio buttons
    var whiteText = document.querySelector('.white');
    var ivoryText = document.querySelector('.ivory');

    // console.log('dress = ' + dress + ', whiteButton = ' + whiteButton + ', ivoryButton = ' + ivoryButton + ', whiteText = ' + whiteText.innerText + ', ivoryText = ' + ivoryText.innerText)

    // when clicking on the ivory button, the class with the sepia filter is added so the dress changes colour 
    ivoryButton.addEventListener('click', function(){
        dress.classList.add("dress2");
        // the selected radio button's label is also highlighted so user knows which colour is it
        ivoryText.style.color="#fff";
        whiteText.style.color="#6e6e75";
    });

    // when clicking on the white button, the class with the filter is removed so the dress turns white
    whiteButton.addEventListener('click', function(){
        dress.classList.remove("dress2");
        whiteText.style.color="#fff";
        ivoryText.style.color="#6e6e75";   
    });

    // change accessories ---------------------------------------------

    // initialise empty array for splide elements
    let splideArray = [];
    // add each splide content into the array
    splideArray.push(document.querySelector('#splide1'));
    splideArray.push(document.querySelector('#splide2'));
    splideArray.push(document.querySelector('#splide3'));
    splideArray.push(document.querySelector('#splide4'));
    splideArray.push(document.querySelector('#splide5'));
    splideArray.push(document.querySelector('#splide6'));
    // console.log(splideArray)

    // initialise empty array for accessories elements
    let accessoryArray = [];
    // add each accessories image into the array that will appear when clickling on the corresponding splide element
    accessoryArray.push(document.querySelector('#accessory1'));
    accessoryArray.push(document.querySelector('#accessory2'));
    accessoryArray.push(document.querySelector('#accessory3'));
    accessoryArray.push(document.querySelector('#accessory4'));
    accessoryArray.push(document.querySelector('#accessory5'));
    accessoryArray.push(document.querySelector('#accessory6'));
    // console.log(accessoryArray)

    // looping through each content of the splide array to see if any is clicked
    for (var i = 0; i < splideArray.length; i++) {
        (function(index) {
            splideArray[index].addEventListener("click", function() {
                // console.log("you clicked splide element #" + index);
                // // if one splide is clicked, it starts another loop to remove all existing accessories
                for (var j = 0; j < accessoryArray.length; j++) {
                    // console.log("Inside loop J: " + j);
                    accessoryArray[j].style.display="none";
                    // console.log("you removed accessory element #" + j);
                }
                // then it displays the corresponding accessory of the selected splide content
                accessoryArray[index].style.display="block";
                // console.log("you ADDED accessory element #" + index);
              });
        })(i);
    }

// GSAP: SCROLL TRIGGER =====================================================

    // source URL: https://codepen.io/GreenSock/pen/KKpLdWW

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top", 
        pin: true, 
        pinSpacing: false 
      });
    });