// Scroll Observer - Auto Tab Switching on Scroll

import { setActiveTab, getActiveSection } from './navigation.js';
import { throttle } from './main.js';
import { trackEvent } from './analytics.js';

let isScrolling = false;
let scrollTimeout;

export function initScrollObserver() {
    const sections = document.querySelectorAll('.content-section');

    // Intersection Observer for section detection
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', // Trigger when section is 40-60% in viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isScrolling) {
                const sectionId = entry.target.id;
                const currentSection = getActiveSection();

                if (sectionId !== currentSection) {
                    setActiveTab(sectionId);
                    trackEvent('scroll_tab_switch', { section: sectionId });
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Light snap behavior on scroll end
    window.addEventListener('scroll', throttle(handleScroll, 100));
}

function handleScroll() {
    isScrolling = true;

    // Clear previous timeout
    clearTimeout(scrollTimeout);

    // Set timeout to detect scroll end
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
        applyLightSnap();
    }, 150);
}

function applyLightSnap() {
    const sections = document.querySelectorAll('.content-section');
    const viewportHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    let closestSection = null;
    let closestDistance = Infinity;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const distance = Math.abs(sectionTop - scrollTop);

        // Only snap if we're close to the top of a section (within 100px)
        if (distance < 100 && distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
        }
    });

    // Apply gentle snap if close enough
    if (closestSection && closestDistance < 80) {
        const targetPosition = closestSection.getBoundingClientRect().top + scrollTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
