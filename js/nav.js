//
// 这是整合了所有功能的、最终版的 nav.js 文件
// 它包含了移动端导航、桌面端下拉菜单和响应式反馈面板的全部逻辑
//

document.addEventListener('DOMContentLoaded', function () {

    // ===================================================
    // ===          1. 移动端导航菜单逻辑            ===
    // ===================================================
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileAccordionHeaders = document.querySelectorAll('#mobile-menu .accordion-header');

    if (mobileMenuButton && mobileMenu && mobileMenuOverlay) {
        const toggleMobileMenu = () => {
            mobileMenu.classList.toggle('-translate-x-full');
            mobileMenuOverlay.classList.toggle('hidden');
        };
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }

    if (mobileAccordionHeaders.length > 0) {
        mobileAccordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const svgIcon = header.querySelector('svg');
                if (content && content.classList.contains('accordion-content')) {
                    content.classList.toggle('hidden');
                    if (svgIcon) svgIcon.classList.toggle('rotate-180');
                }
            });
        });
    }

    if (mobileMenu) {
        mobileMenu.addEventListener('transitionend', () => {
            if (mobileMenu.classList.contains('-translate-x-full')) {
                mobileAccordionHeaders.forEach(header => {
                    const content = header.nextElementSibling;
                    const svgIcon = header.querySelector('svg');
                    if (content && !content.classList.contains('hidden')) {
                        content.classList.add('hidden');
                    }
                    if (svgIcon && svgIcon.classList.contains('rotate-180')) {
                        svgIcon.classList.remove('rotate-180');
                    }
                });
            }
        });
    }


    // ===================================================
    // ===          2. 桌面端下拉菜单逻辑            ===
    // ===================================================
    const pcGuideContainer = document.getElementById('pc-guide-container');
    const pcGuideButton = document.getElementById('pc-guide-button');
    const pcGuideDropdown = document.getElementById('pc-guide-dropdown');
    const pcGuideArrow = document.getElementById('pc-guide-arrow');
    const pcAccordionHeaders = document.querySelectorAll('#pc-guide-dropdown .pc-accordion-header');

    if (pcGuideButton && pcGuideDropdown && pcGuideArrow) {
        pcGuideButton.addEventListener('click', (event) => {
            event.stopPropagation();
            pcGuideDropdown.classList.toggle('hidden');
            pcGuideArrow.classList.toggle('rotate-180');
        });
    }

    if (pcAccordionHeaders.length > 0) {
        pcAccordionHeaders.forEach(header => {
            header.addEventListener('click', (event) => {
                event.stopPropagation();
                const currentCategory = header.closest('.pc-category-item');
                const content = currentCategory.querySelector('.accordion-content');
                const arrow = header.querySelector('.accordion-arrow');
                const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

                document.querySelectorAll('#pc-guide-dropdown .accordion-content').forEach(c => c.style.maxHeight = '0px');
                document.querySelectorAll('#pc-guide-dropdown .accordion-arrow').forEach(a => a.classList.remove('rotate-180'));

                if (!isOpen) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (arrow) arrow.classList.add('rotate-180');
                }
            });
        });
    }

    if (pcGuideContainer) {
        document.addEventListener('click', (event) => {
            if (!pcGuideContainer.contains(event.target)) {
                if (pcGuideDropdown) pcGuideDropdown.classList.add('hidden');
                if (pcGuideArrow) pcGuideArrow.classList.remove('rotate-180');
                document.querySelectorAll('#pc-guide-dropdown .accordion-content').forEach(c => c.style.maxHeight = '0px');
                document.querySelectorAll('#pc-guide-dropdown .accordion-arrow').forEach(a => a.classList.remove('rotate-180'));
            }
        });
    }


    // ===================================================
    // ===          3. 响应式反馈面板逻辑            ===
    // ===================================================
    const feedbackToggleButton = document.getElementById('feedback-toggle-button');
    const feedbackModal = document.getElementById('feedback-modal');
    const feedbackPanel = document.getElementById('feedback-panel');
    const closeButton = document.getElementById('close-button');

    const openFeedback = () => {
        if (!feedbackModal) return;
        feedbackModal.classList.remove('hidden');
        setTimeout(() => {
            if (feedbackPanel) feedbackPanel.classList.remove('translate-y-full');
        }, 10);
    };

    const closeFeedback = () => {
        if (!feedbackPanel) return;
        feedbackPanel.classList.add('translate-y-full');
        setTimeout(() => {
            if (feedbackModal) feedbackModal.classList.add('hidden');
        }, 300); // 匹配 CSS 的 transition-duration
    };

    if (feedbackToggleButton && feedbackModal && feedbackPanel && closeButton) {
        feedbackToggleButton.addEventListener('click', openFeedback);
        closeButton.addEventListener('click', closeFeedback);
        feedbackModal.addEventListener('click', (event) => {
            if (event.target === feedbackModal) {
                closeFeedback();
            }
        });
    }
});