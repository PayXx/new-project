const git = 'newproject'
function rectangleeSquare(a,b) {
    a = prompt('write the side 1 of the rectangle');
    b = prompt('write the side 2 of the rectangle');
    let square = a * b;
    alert('rectangle Square is ' + square)

}
//rectangleeSquare()

const cylinderSquare = () => {
    const a = prompt('Write the radius of the cylinder');
    const b = prompt("Write the height of the cylinder");
    const result = Math.PI * Math.pow(a, 2) * b;
    alert(`Cylinder square is ${result}`);
};
cylinderSquare();