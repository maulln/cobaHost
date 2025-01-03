document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});

const adjustMenuVisibility = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        menuToggle.style.display = 'none';
        mobileNav.classList.remove('open');
    } else {
        menuToggle.style.display = 'block';
    }
};

window.addEventListener('resize', adjustMenuVisibility);
window.addEventListener('DOMContentLoaded', adjustMenuVisibility);


const lazyImages = document.querySelectorAll('img.lazy');
const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            console.log(`Loading image: ${img.dataset.src}`);
            img.src = img.dataset.src; 
            img.classList.add('fade-in');
            observer.unobserve(img);
        }
    });
};

const observer = new IntersectionObserver(lazyLoad, {
    root: null,
    threshold: 0.1
});

lazyImages.forEach(img => {
    observer.observe(img);
});

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function () {
        const isLoggedIn = false;

        if (!isLoggedIn) {
            const proceedToLogin = confirm('Anda harus login atau membuat akun terlebih dahulu untuk melanjutkan transaksi pembelian. Apakah Anda ingin login or membuat akun?');
            
            if (proceedToLogin) {
                window.location.href = 'login.html';
            } else {
                alert('Anda tidak akan dapat melanjutkan transaksi pembelian tanpa akun.');
            }
        } else {
            alert('Selamat! Anda bisa melanjutkan transaksi pembelian.');
        }
    });
});

const scrollReveal = document.querySelectorAll('.category, .hero-content, #categories h2');

const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealOnScroll, {
    root: null,
    threshold: 0.2
});

scrollReveal.forEach(item => revealObserver.observe(item));

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        const menu = dropdown.querySelector('.dropdown-menu');
        const isMenuOpen = menu.style.display === 'flex';

        document.querySelectorAll('.dropdown-menu').forEach(item => {
            item.style.display = 'none';
        });

        if (!isMenuOpen) {
            menu.style.display = 'flex';
        }
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        categories.forEach(cat => {
            if (cat !== category) {
                cat.classList.add('category-blurred');
            }
        });
    });

    category.addEventListener('mouseleave', () => {
        categories.forEach(cat => {
            cat.classList.remove('category-blurred');
        });
    });
});








