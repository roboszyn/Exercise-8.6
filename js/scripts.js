var a = prompt('Podaj dugość podstawy trójkąta');
var h = prompt('Podaj wysokość trójkąta');


function getTriangleArea (a, h) {
	if ((a <= 0) || (h <= 0)) {
	  return ('Nieprawidłowe dane');
	} else { 
	  	return ('pole Δ = ' +  a * h / 2);
	}
}

console.log(getTriangleArea (a, h));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(7, 12);
var triangle3Area = getTriangleArea(4, 9);

console.log(triangle1Area)
console.log(triangle2Area)
console.log(triangle3Area)