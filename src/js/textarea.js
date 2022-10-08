const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
	let textArea = item.offsetHeight;
	item.addEventListener('input', event => {
		let $this = event.target;
		$this.style.height = textArea + "px";
		$this.style.height = $this.scrollHeight + 'px';
	});
});