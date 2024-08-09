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