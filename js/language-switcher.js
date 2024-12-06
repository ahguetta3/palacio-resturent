// Translations object
const translations = {
    en: {
        // Navigation
        home: 'Home',
        menu: 'Menu',
        services: 'Services',
        blog: 'Blog',
        about: 'About',
        contact: 'Contact',
        
        // Hero Section
        delicious: 'Delicious',
        italianCuisine: 'Italian Cuisine',
        welcomeText: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        orderNow: 'Order Now',
        viewMenu: 'View Menu',
        
        // Menu Section
        ourMenu: 'Our Menu',
        menuDesc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        addToCart: 'Add to Cart',
        hotPizzaMeals: 'Hot Pizza Meals',
        
        // Pizza Types
        italianPizza: 'Italian Pizza',
        greekPizza: 'Greek Pizza',
        caucasianPizza: 'Caucasian Pizza',
        americanPizza: 'American Pizza',
        tomatosPizza: 'Tomatos Pizza',
        margheritaPizza: 'Margherita Pizza',
        
        // Pizza Descriptions
        pizzaDesc1: 'A small river named Duden flows by their place and supplies',
        pizzaDesc2: 'Far far away, behind the word mountains',
        pizzaDesc3: 'Even the all-powerful Pointing has no control about the blind texts',
        
        // Services Section
        servicesTitle: 'Our Services',
        servicesDesc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        fastDelivery: 'Fast Delivery',
        freshFood: 'Fresh Food',
        qualitySupport: 'Quality Support',
        originalRecipes: 'Original Recipes',
        healthyFoods: 'Healthy Foods',
        
        // Price Section
        pricing: 'Pricing',
        pricingDesc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        startingAt: 'Starting at',
        
        // Customer Reviews
        customerReviews: 'Customer Reviews',
        reviewsDesc: 'What our customers say about us',
        
        // Footer
        aboutUs: 'About Us',
        aboutUsDesc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        recentBlog: 'Recent Blog',
        questions: 'Have Questions?',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        
        // Contact Form
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Message',
        sendMessage: 'Send Message',
        
        // Common
        readMore: 'Read More',
        orderNowBtn: 'Order Now',
        learnMore: 'Learn More',
        followUs: 'Follow Us',
        subscribe: 'Subscribe',
        currency: '$'
    },
    ar: {
        // Navigation
        home: 'الرئيسية',
        menu: 'قائمة الطعام',
        services: 'خدماتنا',
        blog: 'المدونة',
        about: 'من نحن',
        contact: 'اتصل بنا',
        
        // Hero Section
        delicious: 'شهية',
        italianCuisine: 'المطبخ الإيطالي',
        welcomeText: 'استمتع بأشهى أنواع البيتزا الإيطالية الأصيلة مع أفضل المكونات الطازجة',
        orderNow: 'اطلب الآن',
        viewMenu: 'شاهد القائمة',
        
        // Menu Section
        ourMenu: 'قائمتنا',
        menuDesc: 'اكتشف تشكيلتنا المميزة من البيتزا الإيطالية الأصيلة والمشروبات المنعشة',
        addToCart: 'أضف إلى السلة',
        hotPizzaMeals: 'وجبات البيتزا الساخنة',
        
        // Pizza Types
        italianPizza: 'بيتزا إيطالية',
        greekPizza: 'بيتزا يونانية',
        caucasianPizza: 'بيتزا قوقازية',
        americanPizza: 'بيتزا أمريكية',
        tomatosPizza: 'بيتزا الطماطم',
        margheritaPizza: 'بيتزا مارجريتا',
        
        // Pizza Descriptions
        pizzaDesc1: 'بيتزا تقليدية على الطريقة الإيطالية مع صلصة طماطم طازجة',
        pizzaDesc2: 'مزيج شهي من المكونات الطازجة والجبن الإيطالي الأصيل',
        pizzaDesc3: 'خبز البيتزا المقرمش مع أفضل أنواع الإضافات',
        
        // Services Section
        servicesTitle: 'خدماتنا',
        servicesDesc: 'نقدم لكم أفضل الخدمات مع التركيز على الجودة والسرعة في التوصيل',
        fastDelivery: 'توصيل سريع',
        freshFood: 'طعام طازج',
        qualitySupport: 'دعم متميز',
        originalRecipes: 'وصفات أصلية',
        healthyFoods: 'أطعمة صحية',
        
        // Price Section
        pricing: 'الأسعار',
        pricingDesc: 'أسعار مناسبة للجميع مع عروض خاصة على الطلبات الكبيرة',
        startingAt: 'يبدأ من',
        
        // Customer Reviews
        customerReviews: 'آراء العملاء',
        reviewsDesc: 'ماذا يقول عملاؤنا عنا',
        
        // Footer
        aboutUs: 'من نحن',
        aboutUsDesc: 'نحن متخصصون في تقديم ألذ أنواع البيتزا الإيطالية الأصيلة منذ أكثر من 20 عاماً',
        recentBlog: 'آخر المقالات',
        questions: 'لديك أسئلة؟',
        address: 'العنوان',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        
        // Contact Form
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        sendMessage: 'إرسال الرسالة',
        
        // Common
        readMore: 'اقرأ المزيد',
        orderNowBtn: 'اطلب الآن',
        learnMore: 'اعرف المزيد',
        followUs: 'تابعنا',
        subscribe: 'اشترك',
        currency: 'أوقية'
    }
};

// RTL-specific styles
const rtlStyles = {
    'body.rtl': {
        fontFamily: "'Tajawal', sans-serif",
        textAlign: 'right'
    },
    'body.rtl .navbar-nav': {
        paddingRight: 0
    },
    'body.rtl .text-left': {
        textAlign: 'right !important'
    },
    'body.rtl .text-right': {
        textAlign: 'left !important'
    },
    'body.rtl .ml-auto': {
        marginRight: 'auto !important',
        marginLeft: '0 !important'
    },
    'body.rtl .mr-auto': {
        marginLeft: 'auto !important',
        marginRight: '0 !important'
    },
    'body.rtl .float-left': {
        float: 'right !important'
    },
    'body.rtl .float-right': {
        float: 'left !important'
    }
};

// Store the current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage();
}

// Function to get translation
function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

// Function to apply RTL styles
function applyRTLStyles() {
    let styleSheet = document.getElementById('rtl-styles');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'rtl-styles';
        document.head.appendChild(styleSheet);
    }

    let stylesText = '';
    for (let selector in rtlStyles) {
        stylesText += selector + ' {\n';
        for (let property in rtlStyles[selector]) {
            stylesText += `    ${property}: ${rtlStyles[selector][property]};\n`;
        }
        stylesText += '}\n';
    }
    styleSheet.textContent = stylesText;
}

// Function to apply language settings
function applyLanguage() {
    const html = document.documentElement;
    const languageToggle = document.getElementById('language-toggle');
    
    // Set language attributes
    if (currentLanguage === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        languageToggle.textContent = 'English';
        document.body.classList.add('rtl');
        
        // Add Tajawal font if not already added
        if (!document.querySelector('link[href*="Tajawal"]')) {
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
        
        // Apply RTL styles
        applyRTLStyles();
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        languageToggle.textContent = 'العربية';
        document.body.classList.remove('rtl');
        
        // Remove RTL styles
        const styleSheet = document.getElementById('rtl-styles');
        if (styleSheet) {
            styleSheet.textContent = '';
        }
    }
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = getTranslation(key);
    });
    
    // Update specific elements by their content
    document.querySelectorAll('[data-content-translate]').forEach(element => {
        const key = element.getAttribute('data-content-translate');
        if (key && translations[currentLanguage][key]) {
            if (element.tagName.toLowerCase() === 'input') {
                element.value = getTranslation(key);
                // Update placeholder for RTL
                if (currentLanguage === 'ar') {
                    element.style.textAlign = 'right';
                    element.setAttribute('placeholder', getTranslation(key));
                } else {
                    element.style.textAlign = 'left';
                    element.setAttribute('placeholder', getTranslation(key));
                }
            } else {
                element.textContent = getTranslation(key);
            }
        }
    });
    
    // Update currency display
    document.querySelectorAll('.price').forEach(element => {
        const price = element.textContent.trim();
        if (price.includes('$')) {
            if (currentLanguage === 'ar') {
                element.textContent = price.replace('$', 'أوقية ');
            } else {
                element.textContent = price.replace('أوقية', '$');
            }
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add data-translate attributes to elements
    const translatableElements = document.querySelectorAll('.nav-link, .section-title, .ftco-heading-2, .btn, h1, h2, h3, h4, h5, h6');
    translatableElements.forEach(element => {
        const text = element.textContent.trim().toLowerCase();
        const key = text.replace(/\s+/g, '');
        if (translations.en[key]) {
            element.setAttribute('data-translate', key);
        }
    });
    
    // Apply initial language
    applyLanguage();
    
    // Add event listeners for form inputs
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', function() {
            if (currentLanguage === 'ar') {
                this.style.textAlign = 'right';
            } else {
                this.style.textAlign = 'left';
            }
        });
    });
});
