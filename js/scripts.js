var a = prompt('Podaj dugość podstawy trójkąta');
var h = prompt('Podaj wysokość trójkąta');


function getTriangleArea (a, h) {
	if ((a <= 0) || (h <= 0)) {return alert('Nieprawidłowe dane');}
	return alert('pole Δ = ' +  a * h / 2);
}
console.log( getTriangleArea(a,h))
