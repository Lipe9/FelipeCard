var btn = document.getElementById('read-btn');
var btn2 = document.getElementById('read-btn2');
var btn3 = document.getElementById('read-btn3');

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

btn3.addEventListener('click', () => {
    var curso = document.querySelector('.curso');
    curso.classList.toggle('active3');

    if (curso.classList.contains('active3')) {
        return btn3.textContent = 'Cursos';
    }

    btn3.textContent = 'Voltar';
});