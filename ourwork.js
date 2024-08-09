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

    
        }

colorChanging();



document.querySelectorAll('#testbutton').forEach(button => {
    button.addEventListener('click', () => {
        const conDiv = document.getElementById('con');
        const webpartDiv = document.getElementById('webpart');
        const video = document.getElementById('webpart-video');

        // Apply fade-out animation to con
        conDiv.classList.add('fade-out');
        
        // Show webpart and apply fade-in animation
        webpartDiv.classList.remove('hidden');
        webpartDiv.classList.add('fade-in');
        
        // Ensure the video starts playing after it's visible
        setTimeout(() => {
            video.play();
        }, 1000); // Match this duration with fade-out duration

        // Check video time to show webcontent
        video.addEventListener('timeupdate', () => {
            if (video.currentTime >= 10) {
                document.getElementById('webcontent').classList.remove('hidden');
                document.getElementById('webcontent').classList.add('fade-in');
                document.getElementById('webcontent').classList.add('fade-out');

            }
        });

        // Hide con div after fade-out is complete
        setTimeout(() => {
            conDiv.classList.add('hidden');
        }, 1000); // Match this duration with fade-out duration
    });
});




var arr = [
    { name: "Chaîne des Aravis, La Clusaz, France", image: "./images/10.png" },
    
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/15.png" },
    { name: "England", image: "./images/4.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/5.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/12.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/13.png" },
    
    { name: "Chaîne des Aravis, La Clusaz, France", image: "./images/6.png" },
    { name: "Chaîne des Aravis, La Clusaz, France", image: "./images/7.png" },
    { name: "Chaîne des Aravis, La Clusaz, France", image: "./images/8.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/14.png" },
   
    
    { name: "Chaîne des Aravis, La Clusaz, France", image: "./images/9.png" },
    { name: "Chaîne des Aravis, La Clusaz, France", image: "./images/11.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/16.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/17.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "https://cdn.dribbble.com/userupload/4060584/file/original-a2dcb88a24da79db509636a26cd98052.png?resize=400x0" },
    { name: "Rose flower", image: "./images/screencapture-kitpapa-net-kickerz-2024-08-01-17_48_58.png" },
    { name: "Rose flower", image: "https://cdn1.designhill.com/uploads/personal_designs/thumbs/f012b766e2a2f66ee40e531edbb7ea76-a514e6b0aebfabe8ec9fdb49d175489d16721604653717.jpg?ver=2.12.78" },
    { name: "Rose flower", image: "https://i.pinimg.com/236x/24/5c/1d/245c1d0ad1fc51fdac2b99c95f4faa9e.jpg" },
    { name: "Rose flower", image: "https://i.pinimg.com/236x/5d/c5/fb/5dc5fb08da1554ffc69e9a89ce8c1291.jpg" },
    { name: "Rose flower", image: "https://i.pinimg.com/736x/dc/39/97/dc39971f75de18ab4a6c7093652f7b29.jpg" },
    { name: "Rose flower", image: "https://i.pinimg.com/236x/dc/b9/be/dcb9be278248a23b515a7cdd8cf94a20.jpg" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/28.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/18.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/21.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/19.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/23.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/26.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/27.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/20.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/25.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/19.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/24.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/22.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/29.png" },
    { name: "LEICA CAMERA AG, LEICA SL3", image: "./images/30.png" },
    
    
];

function addingImages() {
    var clutter = "";
    arr.forEach(function(immu) {
        clutter += `<div class="box">
            <img class="cursor-pointer" src="${immu.image}" alt="${immu.name}">
            <div class="caption">Lorem ipsum</div>
        </div>`;
    });

    document.querySelector(".containeri").innerHTML = clutter;
    document.querySelector(".containeri").style.padding = "40px";
}

function addingSearchFunctionality() {
    var select = document.querySelector("#searchinput");

    select.addEventListener("focus", function() {
        document.querySelector(".overlay").style.display = "block";
    });

    select.addEventListener("blur", function() {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".searchdata").style.display = "none";
    });

    select.addEventListener("input", function() {
        const inputValue = select.value.toLowerCase();
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(inputValue));
        var clutter = "";
        filteredArray.forEach(function(obj) {
            clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
        });
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    });


    
}

addingImages();
addingSearchFunctionality();

