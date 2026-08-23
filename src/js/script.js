const skillsContainer = document.querySelector(".container-skills");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const skills = skillsContainer.querySelectorAll(".skills");

            skills.forEach(skill => {

                const percent = skill.querySelector(".percent-skill");

                const target = getComputedStyle(percent, "::after")
                    .getPropertyValue("--target");

                percent.style.setProperty("--current-width", target);
            });

            observer.unobserve(skillsContainer);
        }
    });

}, {
    threshold: 0.3
});

observer.observe(skillsContainer);