/**
 * 한음 더힐(HANEUM THE HILL) - Main JavaScript
 * Premium Real Estate Multi-Page Website
 */

(function() {
    'use strict';

    // ===================================
    // Configuration
    // ===================================
    const CONFIG = {
        headerScrollThreshold: 50,
        animationThreshold: 0.15,
        smoothScrollOffset: 80,
        lazyLoadThreshold: '100px'
    };

    // ===================================
    // Component Loader
    // ===================================
    class ComponentLoader {
        constructor() {
            this.components = [
                { id: 'header-component', path: './components/header.html' },
                { id: 'footer-component', path: './components/footer.html' }
            ];
        }

        async loadAll() {
            const loadPromises = this.components.map(component => 
                this.loadComponent(component.id, component.path)
            );
            
            try {
                await Promise.all(loadPromises);
                this.onComponentsLoaded();
            } catch (error) {
                console.error('Error loading components:', error);
            }
        }

        async loadComponent(elementId, path) {
            const element = document.getElementById(elementId);
            if (!element) return;

            try {
                const response = await fetch(path);
                if (!response.ok) {
                    throw new Error(`Failed to load ${path}`);
                }
                const html = await response.text();
                element.innerHTML = html;
            } catch (error) {
                console.error(`Error loading component ${path}:`, error);
                this.loadFallback(elementId);
            }
        }

        loadFallback(elementId) {
            const fallbacks = {
                'header-component': this.getHeaderFallback(),
                'footer-component': this.getFooterFallback()
            };
            
            const element = document.getElementById(elementId);
            if (element && fallbacks[elementId]) {
                element.innerHTML = fallbacks[elementId];
            }
        }

        getHeaderFallback() {
            return `
                <header class="site-header scrolled" id="header">
                    <div class="header-inner">
                        <a href="./index.html" class="logo">
                            <div class="logo-text-wrap">
                                <span class="logo-text">한음 더힐</span>
                                <span class="logo-sub">THE HILL</span>
                            </div>
                        </a>
                        <nav class="main-nav" id="mainNav">
                            <ul class="nav-list">
                                <li><a href="./history.html" class="nav-link" data-page="history">사업이력</a></li>
                                <li><a href="./land.html" class="nav-link nav-link-new" data-page="land"><span class="nav-new-badge">NEW</span>토지분양</a></li>
                                <li><a href="./news.html" class="nav-link" data-page="news">호재뉴스</a></li>
                                <li><a href="./location.html" class="nav-link" data-page="location">오시는길</a></li>
                            </ul>
                        </nav>
                        <div class="header-actions">
                            <a href="tel:010-8935-5030" class="header-tel">010-8935-5030</a>
                            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="메뉴 열기">
                                <span class="hamburger"><span></span><span></span><span></span></span>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
                    <div class="mobile-nav" id="mobileNav">
                        <ul class="mobile-nav-list">
                            <li><a href="./index.html" class="mobile-nav-link" data-page="home">홈</a></li>
                            <li><a href="./history.html" class="mobile-nav-link" data-page="history">사업이력</a></li>
                            <li><a href="./land.html" class="mobile-nav-link mobile-nav-link-new" data-page="land"><span class="nav-new-badge">NEW</span>토지분양</a></li>
                            <li><a href="./news.html" class="mobile-nav-link" data-page="news">호재뉴스</a></li>
                            <li><a href="./location.html" class="mobile-nav-link" data-page="location">오시는길</a></li>
                        </ul>
                        <div class="mobile-nav-contact">
                            <a href="tel:010-8935-5030" class="mobile-tel-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                전화 상담하기
                            </a>
                        </div>
                    </div>
                </header>
            `;
        }

        getFooterFallback() {
            return `
                <footer class="site-footer">
                    <div class="footer-inner">
                        <div class="footer-mobile">
                            <div class="footer-mobile-brand">
                                <span class="footer-mobile-logo">한음 더힐</span>
                                <span class="footer-mobile-sub">THE HILL</span>
                            </div>
                            <a href="tel:010-8935-5030" class="footer-mobile-tel">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                010-8935-5030
                            </a>
                            <p class="footer-mobile-copy">&copy; 2024 한음 더힐. All Rights Reserved.</p>
                        </div>
                        <div class="footer-desktop">
                            <div class="footer-top">
                                <div class="footer-brand">
                                    <div class="footer-logo">
                                        <span class="footer-logo-kr">주식회사 한음</span>
                                        <span class="footer-logo-en">HAN EUM Co.,Ltd</span>
                                    </div>
                                    <p class="footer-tagline">용인 처인구 프리미엄 토지분양</p>
                                </div>
                                <div class="footer-links">
                                    <div class="footer-col">
                                        <h4>메뉴</h4>
                                        <ul>
                                            <li><a href="./index.html">홈</a></li>
                                            <li><a href="./history.html">사업이력</a></li>
                                            <li><a href="./land.html">토지분양</a></li>
                                            <li><a href="./news.html">호재뉴스</a></li>
                                            <li><a href="./location.html">오시는길</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-col">
                                        <h4>상담</h4>
                                        <ul>
                                            <li>평일 09:00~18:00</li>
                                            <li>주말 사전예약</li>
                                        </ul>
                                    </div>
                                    <div class="footer-col">
                                        <h4>문의</h4>
                                        <ul>
                                            <li><a href="tel:010-8935-5030" class="tel-link">010-8935-5030</a></li>
                                            <li>용인시 처인구</li>
                                            <li>고림동 666-160</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-bottom">
                                <div class="footer-info">
                                    <p><strong>한음</strong> 180-88-02582</p>
                                    <p><strong>중개</strong> 41461-2017-00083</p>
                                    <p><strong>이첸이엔씨</strong> 406-81-04386</p>
                                </div>
                            </div>
                            <div class="footer-copyright">
                                <p>&copy; 2024 한음 더힐. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            `;
        }

        onComponentsLoaded() {
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
        }
    }

    // ===================================
    // Sticky Header
    // ===================================
    class StickyHeader {
        constructor() {
            this.header = null;
            this.lastScrollY = 0;
            this.ticking = false;
            this.isSubPage = false;
        }

        init() {
            this.header = document.getElementById('header');
            if (!this.header) return;

            // Check if we're on a sub-page (not home)
            const currentPage = document.body.getAttribute('data-page');
            this.isSubPage = currentPage && currentPage !== 'home';

            // Sub-pages always have scrolled class
            if (this.isSubPage) {
                this.header.classList.add('scrolled');
            } else {
                window.addEventListener('scroll', () => this.onScroll(), { passive: true });
                this.checkScroll();
            }
        }

        onScroll() {
            this.lastScrollY = window.scrollY;
            
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.checkScroll();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        }

        checkScroll() {
            if (this.isSubPage) return;
            
            if (this.lastScrollY > CONFIG.headerScrollThreshold) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }
    }

    // ===================================
    // Mobile Menu
    // ===================================
    class MobileMenu {
        constructor() {
            this.menuBtn = null;
            this.mobileNav = null;
            this.overlay = null;
            this.isOpen = false;
        }

        init() {
            this.menuBtn = document.getElementById('mobileMenuBtn');
            this.mobileNav = document.getElementById('mobileNav');
            this.overlay = document.getElementById('mobileNavOverlay');
            
            if (!this.menuBtn || !this.mobileNav) return;

            this.menuBtn.addEventListener('click', () => this.toggle());
            
            // 오버레이 클릭 시 메뉴 닫기
            if (this.overlay) {
                this.overlay.addEventListener('click', () => this.close());
            }
            
            const navLinks = this.mobileNav.querySelectorAll('.mobile-nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => this.close());
            });
        }

        toggle() {
            this.isOpen ? this.close() : this.open();
        }

        open() {
            this.isOpen = true;
            this.menuBtn.classList.add('active');
            this.mobileNav.classList.add('active');
            if (this.overlay) {
                this.overlay.classList.add('active');
            }
            document.body.style.overflow = 'hidden';
        }

        close() {
            this.isOpen = false;
            this.menuBtn.classList.remove('active');
            this.mobileNav.classList.remove('active');
            if (this.overlay) {
                this.overlay.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    }

    // ===================================
    // Smooth Scroll (for anchor links only)
    // ===================================
    class SmoothScroll {
        constructor() {
            this.offset = CONFIG.smoothScrollOffset;
        }

        init() {
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a[href^="#"]');
                if (!link) return;
                
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                e.preventDefault();
                this.scrollTo(targetElement);
            });
        }

        scrollTo(element) {
            const headerHeight = document.getElementById('header')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // ===================================
    // Lazy Loading Images
    // ===================================
    class LazyLoader {
        constructor() {
            this.observer = null;
        }

        init() {
            if (!('IntersectionObserver' in window)) {
                this.loadAllImages();
                return;
            }

            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                {
                    rootMargin: CONFIG.lazyLoadThreshold,
                    threshold: 0
                }
            );

            this.observeImages();
        }

        observeImages() {
            const lazyImages = document.querySelectorAll('img.lazy');
            lazyImages.forEach(img => this.observer.observe(img));
        }

        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }

        loadImage(img) {
            const src = img.dataset.src;
            if (!src) return;

            img.src = src;
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            
            img.addEventListener('error', () => {
                img.classList.add('loaded');
            });
        }

        loadAllImages() {
            const lazyImages = document.querySelectorAll('img.lazy');
            lazyImages.forEach(img => this.loadImage(img));
        }
    }

    // ===================================
    // Scroll Animations (Fade In)
    // ===================================
    class ScrollAnimations {
        constructor() {
            this.observer = null;
        }

        init() {
            if (!('IntersectionObserver' in window)) {
                this.showAllElements();
                return;
            }

            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                {
                    threshold: CONFIG.animationThreshold,
                    rootMargin: '0px 0px -50px 0px'
                }
            );

            this.observeElements();
        }

        observeElements() {
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => {
                // 초기 로드 시 이미 뷰포트에 있는 요소는 즉시 표시
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible) {
                    el.classList.add('visible');
                } else {
                    this.observer.observe(el);
                }
            });
        }

        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }

        showAllElements() {
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => el.classList.add('visible'));
        }
    }

    // ===================================
    // History Loader (JSON 데이터 로드)
    // ===================================
    class HistoryLoader {
        constructor() {
            this.dataPath = './data/history.json';
            this.containerId = 'history-list';
            this.allData = [];
            this.currentFilter = 'all';
        }

        async init() {
            const container = document.getElementById(this.containerId);
            if (!container) return;

            await this.loadHistory();
            this.initFilters();
        }

        async loadHistory() {
            const container = document.getElementById(this.containerId);
            if (!container) return;

            try {
                const response = await fetch(this.dataPath);
                if (!response.ok) {
                    throw new Error(`Failed to load history data`);
                }
                
                const data = await response.json();
                this.allData = data.history;
                this.renderHistory(container, this.allData);
            } catch (error) {
                console.error('Error loading history:', error);
                this.renderFallback(container);
            }
        }

        renderHistory(container, historyData) {
            if (!historyData || historyData.length === 0) {
                container.innerHTML = '<p class="history-empty">시공이력이 없습니다.</p>';
                return;
            }

            const html = historyData.map((item, index) => `
                <div class="history-item" style="animation-delay: ${index * 0.03}s" data-year="${item.date.substring(0, 4)}">
                    <span class="history-date">${item.date}</span>
                    <span class="history-name">${item.name}</span>
                </div>
            `).join('');

            container.innerHTML = html;
        }

        initFilters() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            if (filterBtns.length === 0) return;

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active state
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Filter data
                    const filter = btn.getAttribute('data-filter');
                    this.currentFilter = filter;
                    this.filterHistory(filter);
                });
            });
        }

        filterHistory(filter) {
            const container = document.getElementById(this.containerId);
            if (!container) return;

            let filteredData;
            if (filter === 'all') {
                filteredData = this.allData;
            } else {
                filteredData = this.allData.filter(item => item.date.startsWith(filter));
            }

            this.renderHistory(container, filteredData);
        }

        renderFallback(container) {
            const fallbackData = [
                { date: '2016.01', name: '은평교회 증축 및 리모델링공사' },
                { date: '2017.02', name: '아야진 연수원 증축 및 용도변경' },
                { date: '2017.03', name: '대전 서구 관저동 다가구주택 건축' },
                { date: '2018.03', name: '광진구 구의동 다세대주택 신축공사' },
                { date: '2019.02', name: '경기동부인삼농협 현대화사업 신축공사' },
                { date: '2020.03', name: '안성시 고삼면 다세대주택 신축공사' },
                { date: '2021.03', name: '포천축협 계란유통센터' },
                { date: '2022.07', name: '처인구 남동 615-6 단독주택 신축공사' },
                { date: '2023.01', name: '쌍학리 1종근생-소매점/주택 신축공사' },
                { date: '2024.09', name: '능서초 체육관 환경개선공사' }
            ];
            
            this.allData = fallbackData;
            this.renderHistory(container, fallbackData);
        }
    }

    // ===================================
    // Page Scroll to Top
    // ===================================
    class ScrollToTop {
        init() {
            // Scroll to top on page load
            window.scrollTo(0, 0);
        }
    }

    // ===================================
    // Hero Slider (Home only) - 2.5초 간격 무한 슬라이드
    // ===================================
    class HeroSlider {
        constructor() {
            this.track = null;
            this.slides = [];
            this.slideCount = 0;
            this.currentIndex = 0;
            this.intervalMs = 2500; // 2.5초
            this.timerId = null;
            this.isTransitioning = false;
        }

        init() {
            // Only run on home page
            const currentPage = document.body.getAttribute('data-page');
            if (currentPage !== 'home') return;

            this.track = document.getElementById('heroSliderTrack');
            if (!this.track) return;

            this.slides = Array.from(this.track.querySelectorAll('.hero-slide'));
            this.slideCount = this.slides.length;
            if (this.slideCount <= 1) return;

            // 첫 번째 슬라이드 클론을 맨 뒤에 추가 (무한 루프용)
            const firstClone = this.slides[0].cloneNode(true);
            firstClone.classList.add('clone');
            this.track.appendChild(firstClone);

            // transitionend 이벤트로 클론→첫 번째 점프 처리
            this.track.addEventListener('transitionend', () => this.onTransitionEnd());

            this.currentIndex = 0;
            this.setPosition(0, false);
            this.start();

            // 탭 전환 시 타이머 제어
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.stop();
                } else {
                    this.start();
                }
            });
        }

        start() {
            if (this.timerId) return;
            this.timerId = setInterval(() => this.next(), this.intervalMs);
        }

        stop() {
            if (this.timerId) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
        }

        next() {
            if (this.isTransitioning) return;
            this.isTransitioning = true;
            this.currentIndex++;
            this.setPosition(this.currentIndex, true);
        }

        onTransitionEnd() {
            this.isTransitioning = false;
            // 클론(마지막+1)에 도달하면 애니메이션 없이 첫 번째로 점프
            if (this.currentIndex >= this.slideCount) {
                this.currentIndex = 0;
                this.setPosition(0, false);
            }
        }

        setPosition(index, animate) {
            if (!this.track) return;
            this.track.style.transition = animate ? 'transform 0.8s ease-in-out' : 'none';
            this.track.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    // ===================================
    // Initialize Application
    // ===================================
    class App {
        constructor() {
            this.componentLoader = new ComponentLoader();
            this.stickyHeader = new StickyHeader();
            this.mobileMenu = new MobileMenu();
            this.smoothScroll = new SmoothScroll();
            this.lazyLoader = new LazyLoader();
            this.scrollAnimations = new ScrollAnimations();
            this.historyLoader = new HistoryLoader();
            this.scrollToTop = new ScrollToTop();
            this.heroSlider = new HeroSlider();
        }

        async init() {
            // Scroll to top on page load
            this.scrollToTop.init();

            await this.componentLoader.loadAll();
            
            document.addEventListener('componentsLoaded', () => {
                this.initModules();
            });

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    setTimeout(() => this.initModules(), 100);
                });
            } else {
                setTimeout(() => this.initModules(), 100);
            }
        }

        initModules() {
            this.stickyHeader.init();
            this.mobileMenu.init();
            this.smoothScroll.init();
            this.lazyLoader.init();
            this.scrollAnimations.init();
            this.historyLoader.init();
            this.heroSlider.init();

            setTimeout(() => {
                this.lazyLoader.observeImages();
                this.scrollAnimations.observeElements();
            }, 200);
        }
    }

    // Start the application
    const app = new App();
    app.init();

})();
