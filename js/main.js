// Main JavaScript - LANCH Style Portfolio

import { initNavigation } from './navigation.js';
import { initScrollObserver } from './scrollObserver.js';
import { initWorksManager } from './worksManager.js';
import { initAnalytics } from './analytics.js';
import { loadContent } from './contentLoader.js';
import { initLanguage } from './language.js';

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Initializing AI PM Portfolio...');

    // Initialize language system first
    initLanguage();

    // Load content data
    await loadContent();

    // Initialize navigation
    initNavigation();

    // Initialize scroll observer for auto tab switching
    initScrollObserver();

    // Initialize works manager
    initWorksManager();

    // Initialize analytics
    initAnalytics();

    // Initialize modals
    initModals();

    // Initialize entrance animations
    initEntranceAnimations();

    console.log('✅ Portfolio initialized successfully');
});

// Modal functionality
function initModals() {
    // WeChat modal
    const wechatBtn = document.getElementById('wechatBtn');
    const wechatModal = document.getElementById('wechatModal');
    const wechatClose = document.getElementById('wechatClose');

    if (wechatBtn && wechatModal) {
        wechatBtn.addEventListener('click', () => {
            wechatModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        wechatClose?.addEventListener('click', () => {
            wechatModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        wechatModal.querySelector('.modal-overlay')?.addEventListener('click', () => {
            wechatModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

// Entrance animations
function initEntranceAnimations() {
    // Animate elements on page load
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up');

    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });

    // Intersection Observer for scroll-triggered animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

// Smooth scroll with offset
export function smoothScrollTo(target, offset = 0) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Debounce utility
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle utility
export function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
