var add = document.getElementById('addElem'),
	list = document.getElementById('list');


add.addEventListener('click', function () {
	var element = document.createElement('li'),
		level = document.getElementsByTagName('li'),
		currentLevel = level.length;

	element.innerHTML = 'item ' + currentLevel;
	list.appendChild(element);
});