function skipAds() {

	const player = document.querySelector('.html5-video-player');
	const video = document.querySelector('video');

	if (!player || !video) return;

	// Detect if ad is playing
	if (player.classList.contains('ad-showing')) {

		// Method 1: Jump to end of ad
		video.currentTime = video.duration;

		// Click skip button if exists
		const skipBtn = document.querySelector('button.ytp-skip-ad-button');

		if (skipBtn) {
			simulateRealClick(skipBtn);
		}
	}
}

function simulateRealClick(element) {
	['mouseover', 'mousedown', 'mouseup', 'click'].forEach(type => {
		element.dispatchEvent(new MouseEvent(type, {
			view: window,
			bubbles: true,
			cancelable: true,
			buttons: 1
		}));
	});
}

// Run constantly (lightweight)
setInterval(skipAds, 500);