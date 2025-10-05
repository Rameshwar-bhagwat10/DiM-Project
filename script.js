// Global Variables
let products = [];
let filteredProducts = [];

// Initialize the application
function initApp() {
    hidePreloader();
    initTheme();
    initNavigation();
    initBackToTop();
    updateVisitorCount();
    loadProducts();
}

// Preloader
function hidePreloader() {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    }, 1000);
}

// Theme Toggle
function initTheme() {
    const themeBtn = document.getElementById('theme-btn');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton(currentTheme);
    
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Visitor Counter
function updateVisitorCount() {
    let count = localStorage.getItem('visitorCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    
    const visitorElement = document.getElementById('visitor-count');
    if (visitorElement) {
        visitorElement.textContent = `Visitors: ${count}`;
    }
}

// Product Management
function loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        // Default products with price variants
        products = [
            { 
                id: 1, 
                name: 'Rice', 
                price: 80, 
                category: 'grocery', 
                available: true,
                priceVariants: [
                    { size: '250g', price: 25 },
                    { size: '500g', price: 45 },
                    { size: '1kg', price: 80 },
                    { size: '2kg', price: 155 },
                    { size: '5kg', price: 380 },
                    { size: '10kg', price: 720 }
                ]
            },
            { 
                id: 2, 
                name: 'Wheat Flour', 
                price: 45, 
                category: 'grocery', 
                available: true,
                priceVariants: [
                    { size: '250g', price: 15 },
                    { size: '500g', price: 25 },
                    { size: '1kg', price: 45 },
                    { size: '2kg', price: 85 },
                    { size: '5kg', price: 200 },
                    { size: '10kg', price: 380 }
                ]
            },
            { 
                id: 3, 
                name: 'Sugar', 
                price: 50, 
                category: 'grocery', 
                available: true,
                priceVariants: [
                    { size: '250g', price: 16 },
                    { size: '500g', price: 28 },
                    { size: '1kg', price: 50 },
                    { size: '2kg', price: 95 },
                    { size: '5kg', price: 225 }
                ]
            },
            { 
                id: 4, 
                name: 'Tea Powder', 
                price: 120, 
                category: 'grocery', 
                available: true,
                priceVariants: [
                    { size: '50g', price: 30 },
                    { size: '100g', price: 55 },
                    { size: '250g', price: 120 },
                    { size: '500g', price: 230 },
                    { size: '1kg', price: 450 },
                    { size: '2kg', price: 850 }
                ]
            },
            { 
                id: 5, 
                name: 'Biscuits', 
                price: 25, 
                category: 'snacks', 
                available: true,
                priceVariants: [
                    { size: 'Small Pack', price: 15 },
                    { size: 'Regular Pack', price: 25 },
                    { size: 'Family Pack', price: 45 },
                    { size: 'Jumbo Pack', price: 75 }
                ]
            },
            { 
                id: 6, 
                name: 'Chips', 
                price: 20, 
                category: 'snacks', 
                available: false,
                priceVariants: [
                    { size: 'Small (25g)', price: 10 },
                    { size: 'Medium (50g)', price: 20 },
                    { size: 'Large (100g)', price: 35 }
                ]
            },
            { 
                id: 7, 
                name: 'Detergent', 
                price: 180, 
                category: 'household', 
                available: true,
                priceVariants: [
                    { size: '500g', price: 95 },
                    { size: '1kg', price: 180 },
                    { size: '2kg', price: 340 },
                    { size: '3kg', price: 480 }
                ]
            },
            { 
                id: 8, 
                name: 'Soap', 
                price: 35, 
                category: 'household', 
                available: true,
                priceVariants: [
                    { size: '1 Bar', price: 35 },
                    { size: '3 Bars', price: 95 },
                    { size: '6 Bars', price: 180 }
                ]
            },
            { 
                id: 9, 
                name: 'Cold Drink', 
                price: 40, 
                category: 'beverages', 
                available: true,
                priceVariants: [
                    { size: '250ml', price: 25 },
                    { size: '500ml', price: 40 },
                    { size: '750ml', price: 55 },
                    { size: '1.5L', price: 85 }
                ]
            },
            { 
                id: 10, 
                name: 'Water Bottle', 
                price: 20, 
                category: 'beverages', 
                available: true,
                priceVariants: [
                    { size: '500ml', price: 15 },
                    { size: '1L', price: 20 },
                    { size: '2L', price: 35 },
                    { size: '5L', price: 75 }
                ]
            }
        ];
        saveProducts();
    }
    filteredProducts = [...products];
}

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function addProduct(name, price, category) {
    const newProduct = {
        id: Date.now(),
        name: name,
        price: parseFloat(price),
        category: category,
        available: true
    };
    products.push(newProduct);
    saveProducts();
    return newProduct;
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== parseInt(id));
    saveProducts();
    filteredProducts = filteredProducts.filter(product => product.id !== parseInt(id));
}

function filterProducts(searchTerm, category, priceRange) {
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || product.category === category;
        
        let matchesPrice = true;
        if (priceRange && priceRange !== 'all') {
            const price = product.price;
            switch(priceRange) {
                case '0-50':
                    matchesPrice = price >= 0 && price <= 50;
                    break;
                case '51-100':
                    matchesPrice = price >= 51 && price <= 100;
                    break;
                case '101-150':
                    matchesPrice = price >= 101 && price <= 150;
                    break;
                case '151-200':
                    matchesPrice = price >= 151 && price <= 200;
                    break;
                case '200+':
                    matchesPrice = price > 200;
                    break;
                default:
                    matchesPrice = true;
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    return filteredProducts;
}

// Contact Form
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (name && email && message) {
        // Show thank you message
        const thankYouDiv = document.createElement('div');
        thankYouDiv.className = 'thank-you-message';
        thankYouDiv.innerHTML = `
            <h3>Thank You, ${name}!</h3>
            <p>Your message has been received. We'll get back to you soon at ${email}.</p>
        `;
        
        const form = event.target;
        form.style.display = 'none';
        form.parentNode.insertBefore(thankYouDiv, form);
        
        // Reset form after 5 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            thankYouDiv.remove();
        }, 5000);
    }
}

// Admin Login Validation
function validateLogin(username, password) {
    return username === 'admin' && password === '1234';
}

// Slider functionality for highlights
function initSlider() {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!slider || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Auto-slide
    setInterval(nextSlide, 5000);
    
    // Initialize
    showSlide(0);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Initialize slider if on highlights page
if (window.location.pathname.includes('highlight.html')) {
    document.addEventListener('DOMContentLoaded', initSlider);
}