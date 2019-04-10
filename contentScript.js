function nodeInsertedCallback(event) {
    var translateInput;
	if ( translateInput = document.querySelector('[data-test=challenge-translate-input]') ) {
		var ht = document.querySelectorAll('[data-test=hint-token]')
		var htArr = Array.from(ht);
		const answer = htArr.map( h => h.querySelector('td'))
			 				.filter(t => !!t)
			 				.map(t => t.textContent)
			 				.filter((t,i,a) => i=0 || t != a[i-1] )
			 				.join(' ');
		translateInput.value = answer;
		// setTimeout(function(){
		// 	translateInput.focus();
		// 	translateInput.blur();
		// 	document.querySelector('[data-test=player-next]').click();
		// }, 1000);

		

	}
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
