  const face = document.querySelector('.face');
  const btn = document.getElementById('read-btn');
  const btn2 = document.getElementById('read-btn2');
  const btn3 = document.getElementById('read-btn3');
  const btn4 = document.getElementById('read-btn4');

  btn.addEventListener('click', () => {
      face.classList.toggle('active');
      face.classList.remove('active3');
  });

  btn2.addEventListener('click', () => {
      face.classList.toggle('active');
      face.classList.remove('active3');
  });

  btn3.addEventListener('click', () => {
      face.classList.add('active3');
      face.classList.remove('active');
  });

  btn4.addEventListener('click', () => {
      face.classList.remove('active3');
  });