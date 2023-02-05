function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'O título da sua página',
			text: 'Um texto de resumo',
			url: 'https://rodrigoborgesmoura.github.io/LinkTree/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}
