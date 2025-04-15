
function showBack() {
    const card = document.getElementById('card');
    card.classList.remove('show-courses');
    card.classList.add('show-back');
}

function showCourses() {
    const card = document.getElementById('card');
    card.classList.remove('show-back');
    card.classList.add('show-courses');
}

function showFront() {
    const card = document.getElementById('card');
    card.classList.remove('show-back');
    card.classList.remove('show-courses');
}
