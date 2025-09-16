document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = 0;
        container.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            container.style.opacity = 1;
        }, 100);
    }
});