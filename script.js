// Переключение темы
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Проверяем сохранённую тему в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.textContent = '🌙'; // Иконка для тёмной темы
    } else {
        themeIcon.textContent = '🌞'; // Иконка для светлой темы
    }

    // Переключение темы
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDarkTheme = body.classList.contains('dark-theme');

        // Меняем иконку
        themeIcon.textContent = isDarkTheme ? '🌙' : '🌞';

        // Сохраняем тему в localStorage
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });
});

// При загрузке страницы
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Плавная прокрутка к секциям
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Инициализация AOS (анимации при прокрутке)
AOS.init({
    duration: 1000,
    once: true
});

// Открытие и закрытие модального окна
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.portfolio-item-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.classList.add('modal-open'); // Блокируем прокрутку страницы
            }
        });
    });

    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modal = closeButton.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open'); // Возвращаем прокрутку страницы
            }
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.classList.remove('modal-open'); // Возвращаем прокрутку страницы
        }
    });
});

