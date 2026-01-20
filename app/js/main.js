document.addEventListener('DOMContentLoaded', function() {
	// Menu button toggle
	const menuBtn = document.querySelector('.menu-btn');
	const menuWrapper = document.querySelector('.menu-wrapper');
	
	if (menuBtn && menuWrapper) {
		menuBtn.addEventListener('click', function() {
			menuBtn.classList.toggle('active');
			menuWrapper.classList.toggle('active');
		});
	}

	// Language dropdown toggle
	const langButton = document.querySelector('.lang-button');
	const langSelector = document.querySelector('.lang-selector');
	const langDropdown = document.querySelector('.lang-dropdown');
	const langCurrent = document.querySelector('.lang-current');

	if (langButton && langSelector) {
		langButton.addEventListener('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			langSelector.classList.toggle('active');
		});

		// Close dropdown when clicking outside
		document.addEventListener('click', function(e) {
			if (!langSelector.contains(e.target)) {
				langSelector.classList.remove('active');
			}
		});

		// Change language on click
		if (langDropdown) {
			langDropdown.addEventListener('click', function(e) {
				if (e.target.tagName === 'A') {
					const lang = e.target.getAttribute('data-lang');
					if (lang && langCurrent) {
						langCurrent.textContent = lang;
						langSelector.classList.remove('active');
					}
					// Allow default link behavior - navigation will happen
				}
			});
		}
	}
});