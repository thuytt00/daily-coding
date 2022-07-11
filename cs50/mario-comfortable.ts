function generateTower(height: number) {
	const total = 2 * height;
	let tower ='';
	for (let row = 0; row < height; row++) {
		for(let spacing= 0; spacing <  (height - row + 1); spacing++){
			tower += ' ';
		}

		for(let colum = 0; colum <= row; colum++){
			tower += "#"
		}
		tower+= ' ';

		for(let colum = 0; colum <= row; colum++){
			tower += "#"
		}

		tower+='\n'
	}

	console.log(tower)
}

generateTower(4);
