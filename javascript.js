var btn = document.getElementById('read-btn');
var btn2 = document.getElementById('read-btn2');

btn.addEventListener('click', () => {
    var face = document.querySelector('.face');
    face.classList.toggle('active');

    if (face.classList.contains('active')) {
        return btn.textContent = 'Saiba Mais';
    }

    btn.textContent = 'Voltar';
});

btn2.addEventListener('click', () => {
    var face = document.querySelector('.face');
    face.classList.toggle('active');

    if (face.classList.contains('active2')) {
        return btn2.textContent = 'Saiba Mais';
    }

    btn2.textContent = 'Voltar';
});

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