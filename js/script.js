document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Header com fundo sólido ao rolar
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.98)';
        } else {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
        }
    });

    // Lightbox da galeria
    const galeriaItens = document.querySelectorAll('.galeria__item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    galeriaItens.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
        });
    });

    function fecharLightbox() {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }

    lightboxClose.addEventListener('click', fecharLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) fecharLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharLightbox();
    });

    // Modal de agendamento (WhatsApp ou App)
    const modalAgendar = document.getElementById('modalAgendar');
    const modalAgendarClose = document.getElementById('modalAgendarClose');
    const botoesAgendar = document.querySelectorAll('.js-agendar');

    botoesAgendar.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.remove('active');
            modalAgendar.classList.add('active');
        });
    });

    function fecharModalAgendar() {
        modalAgendar.classList.remove('active');
    }

    modalAgendarClose.addEventListener('click', fecharModalAgendar);
    modalAgendar.addEventListener('click', (e) => {
        if (e.target === modalAgendar) fecharModalAgendar();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharModalAgendar();
    });

    // Ano atual no rodapé
    document.getElementById('year').textContent = new Date().getFullYear();
});
