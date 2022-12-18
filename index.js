const git = 'newproject';
const rectangleeSquare = () => {
    const a = prompt('Write the side 1 of the rectangle:');
    const b = prompt('Write the side 2 of the rectangle:');
    const square = a * b;

    alert(`Rectangle square is ${square}`);
};

rectangleeSquare();

const cylinderSquare = () => {
    const a = prompt('Write the radius of the cylinder:');
    const b = prompt('Write the height of the cylinder:');
    const result = Math.PI * Math.pow(a, 2) * b;

    alert(`Cylinder square is ${result}`);
};

cylinderSquare();