let counters = document.querySelectorAll('.counter');
let speed = 100; 

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
        const inc = target / speed;
        
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = Math.ceil(count + inc);
			// Call function every 1.5s
			setTimeout(updateCount, 15);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});

// SOURCE https://codepen.io/bradtraversy/pen/poJwqOK 