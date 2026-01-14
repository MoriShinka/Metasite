// Navigation - Tab Click Handlers

import { smoothScrollTo } from './main.js';
import { trackEvent } from './analytics.js';

let activeSection = 'intro';

export function initNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            const sectionId = tab.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (section) {
                // Update active tab
                setActiveTab(sectionId);

                // Smooth scroll to section
                smoothScrollTo(section, 80);

                // Track analytics
                trackEvent('tab_click', { section: sectionId });
            }
        });
    });
}

export function setActiveTab(sectionId) {
    if (activeSection === sectionId) return;

    activeSection = sectionId;

    // Update nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        const tabSection = tab.getAttribute('data-section');
        if (tabSection === sectionId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Update URL hash without scrolling
    history.replaceState(null, null, `#${sectionId}`);
}

export function getActiveSection() {
    return activeSection;
}
