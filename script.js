
function HomePageAnimation() {
    // Set initial scale for .sidesm
    gsap.set(".sidesm", { scale: 2.1 });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

    
    tl
        .to(".videoscreen", {
            '--clip': "0%",
            ease: "power2.out" 
        }, 'a')
        .to(".sidesm", {
            scale: 1,
            ease: "power2.out" 
        }, 'a')
        .to(".lgt", {
            xPercent: -10,
            stagger: 0.03,
            ease: "power4.out" 
        }, 'a2')
        .to(".rgt", {
            xPercent: -10,
            stagger: 0.03,
            ease: "power4.out" 
        }, 'a2');

}
HomePageAnimation();




function slidesOne() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".thirdpart",
            start: "top top",
            end: "bottom 100%",
            scrub: 1
        },
        xPercent: -200,
        ease: Power2
    });
}
slidesOne();




function teamPart() {
    const elements = document.querySelectorAll(".listelem");
    const allPics = document.querySelectorAll(".pic");
    let cursorX = window.innerWidth / 2; // Initial cursor X position
    let cursorY = window.innerHeight / 2; // Initial cursor Y position

    // Function to hide all pictures
    function hideAllPics() {
        allPics.forEach(pic => gsap.to(pic, { opacity: 0, duration: 0.1 }));
    }

    // Function to check if an element is in the viewport
    function isInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Update cursor position on mousemove
    document.addEventListener("mousemove", function (e) {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    // Check for elements under the cursor while scrolling
    let lastElement = null; // Track the last element to prevent redundant animations
    function checkForVisibleElement() {
        let foundVisible = false;
        elements.forEach(function (el) {
            const rect = el.getBoundingClientRect();
            if (!foundVisible && isInView(el) && cursorY >= rect.top && cursorY <= rect.bottom) {
                // Avoid redundant updates if the same element is already highlighted
                if (lastElement === el) return;

                hideAllPics(); // Hide all pictures first
                const pic = el.querySelector(".pic");
                gsap.to(pic, {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, cursorX),
                    ease: "power4.out",
                    duration: 0.1
                });
                foundVisible = true; // Stop further checks after finding the first visible element
                lastElement = el; // Update the last element
            }
        });

        // If no visible element was found, reset lastElement
        if (!foundVisible) {
            lastElement = null;
        }
    }

    // Attach the scroll and mousemove events
    window.addEventListener("scroll", checkForVisibleElement);
    window.addEventListener("mousemove", checkForVisibleElement);
}
teamPart();




function lastVideo(){
    const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const playButtonContainer = document.getElementById("playButtonContainer");

playButtonContainer.addEventListener("click", function () {
  video.play().then(() => {
    playButtonContainer.style.display = "none";
  }).catch(error => {
    console.error("Error playing video:", error);
  });
});

video.addEventListener("play", function () {
  playButtonContainer.style.display = "none";
});
}
lastVideo();



function locoMotive() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
locoMotive();



function colorChanging() {
    document.querySelectorAll(".section").forEach(function (section) {
        ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function () {
                document.body.setAttribute("theme", section.dataset.color);
                updateHeaderStyles(section.dataset.color);
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", section.dataset.color);
                updateHeaderStyles(section.dataset.color);
            }
        });
    });

    function updateHeaderStyles(color) {
        const header = document.getElementById('header');
        const headerContent = document.getElementById('header-content');

        switch (color) {
            case 'black':
                header.style.backgroundColor = '#0000000d14';
                headerContent.style.color = '#ffffff';
                break;
            case 'cyan':
                header.style.backgroundColor = '#AEDEE0';
                headerContent.style.color = '#1f2627';
                break;
            case 'salmon':
                header.style.backgroundColor = '#EF9D71';
                headerContent.style.color = 'rgb(63, 40, 39)';
                break;
            case 'white':
                header.style.backgroundColor = 'white';
                headerContent.style.color = '#000000';
                break;
            case 'immu':
                header.style.backgroundColor = '#0000000d14';
                headerContent.style.color = '#ffffff';
                break;
            case 'footer':
                header.style.backgroundColor = 'rgb(37, 131, 96)';
                headerContent.style.color = '#ffffff';
                header.style.opacity = 1;
                break;
            case 'screenshow':
                header.style.backgroundColor = '#181818';
                headerContent.style.color = '#ffffff';
                break;
            default:
                header.style.backgroundColor = '';
                headerContent.style.color = '';
                break;
        }
    }
}

colorChanging();



function soundCreating() {

    document.getElementById('toggleSound').addEventListener('click', function () {
        const video = document.getElementById('videoElement');
        const textElement = document.getElementById('toggleText');
        const iconElement = document.getElementById('toggleIcon');

        if (video.muted) {

            //ohhhhhh noooooooooooooooooooooooooooooooooooooooo
            // <i class="ri-volume-mute-fill"></i>
            video.muted = false; // Unmute the video
            textElement.classList.add('hidden'); // Fade out the text
            iconElement.classList.add('hidden-icon'); // Fade out the icon
            setTimeout(() => {
                textElement.textContent = 'LET THE SOUND DOWN'; // Change text
                iconElement.classList.remove('hidden-icon'); // Fade in the icon
                iconElement.classList.replace('ri-headphone-fill', 'ri-volume-mute-fill'); // Change icon class
                textElement.classList.remove('hidden'); 
            }, 2000); 
        } else {
            video.muted = true; 
            textElement.classList.add('hidden'); 
            iconElement.classList.add('hidden-icon'); 
            setTimeout(() => {
                textElement.textContent = 'LET THE SOUND FLOW'; // Change text
                iconElement.classList.remove('hidden-icon'); // Fade in the icon
                iconElement.classList.replace('ri-volume-mute-fill', 'ri-headphone-fill'); // Change icon class
                textElement.classList.remove('hidden'); 
            }, 2000); 
        }
    });

}
soundCreating();



function footer(){
    document.addEventListener('DOMContentLoaded', function() {
        var middlepart = document.querySelector('.middlepart');
        var footer = document.querySelector('.footer');
        var initialTop = 60; // Initial top percentage
        var maxTop = 30; // Final top percentage (when the footer is fully visible)
        var minTop = 60; // Minimum top percentage (starting position)
        
        window.addEventListener('scroll', function() {
            var scrollY = window.scrollY || window.pageYOffset;
            var viewportHeight = window.innerHeight;
            var footerTop = footer.getBoundingClientRect().top;
            var footerHeight = footer.offsetHeight;
    
            // Calculate the scroll progress into the footer
            var progress = (viewportHeight - footerTop) / (footerHeight);
    
            // Constrain the progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));
    
            // Calculate the new top value
            var newTop = minTop - (progress * (minTop - maxTop));
    
            // Apply the new top value
            middlepart.style.top = newTop + '%';
        });
    });
}
footer();













