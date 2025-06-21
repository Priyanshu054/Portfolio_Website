const skills = document.querySelectorAll('.skill-level');

function initialiseBar(skill) {
    skill.dataset.visited = "false";    // create a custom attributes
    skill.style.width = 0 + '%';
}

function animateSkillBar(skill) {
    let currwidth = 0;
    let finalwidth = parseInt(skill.dataset.skillwidth);    // to access custom attributes

    let interval = setInterval(() => {
        if (currwidth >= finalwidth) {
            clearInterval(interval);
            return;
        }
        currwidth++;
        skill.style.width = currwidth + '%';
    }, 15);
}

function isElementVisible(element) {
    let coordinates = element.getBoundingClientRect();
    return (
        coordinates.top >= 0 && coordinates.bottom <= window.innerHeight
    );
}

function checkScroll() {
    skills.forEach((skill) => {
        if (skill.dataset.visited === "false" && isElementVisible(skill)) {
            skill.dataset.visited = "true";
            animateSkillBar(skill);
        } else if (!isElementVisible(skill)) {
            skill.dataset.visited = "false";
            initialiseBar(skill);
        }
    });
}

window.addEventListener('scroll', checkScroll);

// Menu toggle script for mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.Horizontal_list nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});
