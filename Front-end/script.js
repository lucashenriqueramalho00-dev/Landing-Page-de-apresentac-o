function revelar() {
    const elementos = document.querySelectorAll('.reveal');
    elementos.forEach(el => {
        const windowHeight = window.innerHeight;
        const rect = el.getBoundingClientRect().top;

        if (rect < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revelar);
revelar();