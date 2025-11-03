document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const accordionHeaders = document.querySelectorAll('#mobile-menu .accordion-header');

    // 切换移动菜单的显示/隐藏
    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('-translate-x-full'); // 滑入/滑出
        mobileMenuOverlay.classList.toggle('hidden'); // 显示/隐藏叠加层
    };

    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu); // 点击叠加层关闭菜单

    // 处理手风琴效果
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling; // 获取下一个兄弟元素，即内容区
            const svgIcon = header.querySelector('svg'); // 获取箭头图标

            if (content && content.classList.contains('accordion-content')) {
                // 切换内容的显示/隐藏
                content.classList.toggle('hidden');

                // 旋转箭头图标
                svgIcon.classList.toggle('rotate-180');
            }
        });
    });

    // 关闭菜单时重置手风琴状态 (可选)
    mobileMenu.addEventListener('transitionend', () => {
        if (mobileMenu.classList.contains('-translate-x-full')) {
            // 如果菜单完全隐藏，将所有手风琴内容收起并重置箭头方向
            accordionHeaders.forEach(header => {
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
});

// --- PC 端菜单逻辑 (点击展开) ---
const pcGuideContainer = document.getElementById('pc-guide-container');
const pcGuideButton = document.getElementById('pc-guide-button');
const pcGuideDropdown = document.getElementById('pc-guide-dropdown');
const pcGuideArrow = document.getElementById('pc-guide-arrow');
const pcAccordionHeaders = document.querySelectorAll('#pc-guide-dropdown .pc-accordion-header');

// 点击 Guide 按钮，显示/隐藏主下拉菜单
pcGuideButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡到 document
    pcGuideDropdown.classList.toggle('hidden');
    pcGuideArrow.classList.toggle('rotate-180');
});

// 点击分类标题，展开/收起子列表
pcAccordionHeaders.forEach(header => {
    header.addEventListener('click', (event) => {
        event.stopPropagation(); // 阻止事件冒泡到 document

        const currentCategory = header.closest('.pc-category-item');
        const content = currentCategory.querySelector('.accordion-content');
        const arrow = header.querySelector('.accordion-arrow');

        // 检查当前点击的分类是否已经打开
        const isOpen = content.style.maxHeight !== '0px';

        // 先关闭所有其他分类
        document.querySelectorAll('#pc-guide-dropdown .accordion-content').forEach(c => {
            c.style.maxHeight = '0px';
        });
        document.querySelectorAll('#pc-guide-dropdown .accordion-arrow').forEach(a => {
            a.classList.remove('rotate-180');
        });

        // 如果当前是关闭状态，则打开它
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
            arrow.classList.add('rotate-180');
        }
    });
});

// 点击页面其他地方，关闭主下拉菜单
document.addEventListener('click', (event) => {
    if (!pcGuideContainer.contains(event.target)) {
        pcGuideDropdown.classList.add('hidden');
        pcGuideArrow.classList.remove('rotate-180');

        // 同时收起所有子列表
        document.querySelectorAll('#pc-guide-dropdown .accordion-content').forEach(c => {
            c.style.maxHeight = '0px';
        });
        document.querySelectorAll('#pc-guide-dropdown .accordion-arrow').forEach(a => {
            a.classList.remove('rotate-180');
        });
    }
});

// 修复 transition 动画和 max-height 的一个问题
document.querySelectorAll('.accordion-content').forEach(content => {
    // 初始化时设置 max-height 为 0，确保 CSS transition 生效
    if (!content.style.maxHeight) {
        content.style.maxHeight = '0px';
    }
}); 