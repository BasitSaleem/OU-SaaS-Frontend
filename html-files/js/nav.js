// Navigation bar interactions & drawer menu

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const navEl = document.querySelector('.nav');
    const linksRef = document.querySelector('.nav__links');
    const productsBtn = document.querySelector('.nav__item button');
    const productsMenu = document.getElementById('products-menu');
    const toggleBtn = document.querySelector('.nav__toggle');
    const mobileSheet = document.getElementById('mobile-menu');

    if (!navEl) return;

    let scrolled = false;
    let hidden = false;
    let open = false; // mobile menu
    let menu = false; // products dropdown
    let closeTimer = 0;

    // Scroll state tracking
    let lastY = window.scrollY, raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        scrolled = y > 8;
        if (scrolled) navEl.classList.add('nav--scrolled');
        else navEl.classList.remove('nav--scrolled');

        const delta = y - lastY;
        if (Math.abs(delta) > 6) {
          hidden = delta > 0 && y > window.innerHeight * 1.2 && !open && !menu;
          if (hidden) navEl.classList.add('nav--hidden');
          else navEl.classList.remove('nav--hidden');
          lastY = y;
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight pill movement
    const moveTo = (el) => {
      if (!linksRef || !el) return;
      const a = linksRef.getBoundingClientRect(), b = el.getBoundingClientRect();
      linksRef.style.setProperty('--ix', `${b.left - a.left}px`);
      linksRef.style.setProperty('--iw', `${b.width}px`);
      linksRef.dataset.pill = 'on';
    };

    const clearPill = () => {
      if (linksRef && !menu) linksRef.dataset.pill = 'off';
    };

    if (linksRef) {
      linksRef.addEventListener('mouseleave', clearPill);
      linksRef.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('mouseenter', (e) => moveTo(e.currentTarget));
        link.addEventListener('focus', (e) => moveTo(e.currentTarget));
      });
    }

    // Products dropdown menu
    const setMenuState = (isOpen) => {
      menu = isOpen;
      if (productsBtn) productsBtn.setAttribute('aria-expanded', menu ? 'true' : 'false');
      if (productsMenu) {
        productsMenu.dataset.open = menu ? 'true' : 'false';
        productsMenu.setAttribute('aria-hidden', menu ? 'false' : 'true');
      }
      if (menu) navEl.classList.remove('nav--hidden');
    };

    const openMenu = () => { clearTimeout(closeTimer); setMenuState(true); };
    const closeMenuSoon = () => { clearTimeout(closeTimer); closeTimer = setTimeout(() => setMenuState(false), 140); };

    const navItem = document.querySelector('.nav__item');
    if (navItem) {
      navItem.addEventListener('mouseenter', openMenu);
      navItem.addEventListener('mouseleave', closeMenuSoon);
    }
    if (productsBtn) {
      productsBtn.addEventListener('click', () => setMenuState(!menu));
    }

    // Mobile drawer toggle
    const setOpenState = (isOpen) => {
      open = isOpen;
      document.body.style.overflow = open ? 'hidden' : '';
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (navEl) navEl.classList.toggle('nav--open', open);
      if (mobileSheet) {
        mobileSheet.dataset.open = open ? 'true' : 'false';
        mobileSheet.toggleAttribute('inert', !open);
      }
      if (open) navEl.classList.remove('nav--hidden');
    };

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => setOpenState(!open));
    }

    // Mobile sheet links click handler
    if (mobileSheet) {
      mobileSheet.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => setOpenState(false));
      });
    }

    // Close on escape & click outside
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setOpenState(false);
        setMenuState(false);
      }
    });

    document.addEventListener('pointerdown', (e) => {
      if (!navEl.contains(e.target)) setMenuState(false);
    });
  });
})();
