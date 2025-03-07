const button = document.querySelector('.button-link');
const credoText = document.getElementById('credo-text');

button.addEventListener('click', function() {
  if (credoText.classList.contains('visible')) {
    // Если текст виден, скрываем его
    credoText.classList.remove('visible');
    setTimeout(() => {
      credoText.classList.add('hidden');
      button.textContent = button.dataset.text; // Возвращаем исходный текст кнопки
    }, 500); // Ждем завершения анимации исчезновения
  } else {
    // Если текст скрыт, показываем его
    credoText.classList.remove('hidden');
    setTimeout(() => {
      credoText.classList.add('visible');
      button.textContent = "Скрыть"; // Меняем текст кнопки
    }, 10); // Небольшая задержка для корректного запуска анимации
  }
});