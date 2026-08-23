
// skill
const skillsSection = document.querySelector(".container-skill");
const bars = document.querySelectorAll("");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            bars.forEach(bar=>{
                bar.style.width =
                    getComputedStyle(bar).getPropertyValue("--target");
            });

            observer.unobserve(entry.target);
        }
    });
},{
    threshold:0.3
});

observer.observe(skillsSection);