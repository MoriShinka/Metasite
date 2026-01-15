// Scroll Observer - Auto Tab Switching on Scroll

import { setActiveTab, getActiveSection } from './navigation.js';
import { throttle } from './main.js';
import { trackEvent } from './analytics.js';

let isScrolling = false;
let scrollTimeout;

export function initScrollObserver() {
    const sections = document.querySelectorAll('.content-section');

    // Intersection Observer for section detection - More responsive
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Trigger when section enters top 20% of viewport
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver((entries) => {
        // Find the section with the highest intersection ratio
        let mostVisibleSection = null;
        let highestRatio = 0;

        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
                highestRatio = entry.intersectionRatio;
                mostVisibleSection = entry.target;
            }
        });

        // Update tab if we found a visible section
        if (mostVisibleSection && !isScrolling) {
            const sectionId = mostVisibleSection.id;
            const currentSection = getActiveSection();

            if (sectionId !== currentSection) {
                setActiveTab(sectionId);
                trackEvent('scroll_tab_switch', { section: sectionId });
            }
        }
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
