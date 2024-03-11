let a=-1,b=-3,c=-4;
let discriminant=b*b-4*a*c;
let r1,r2;

switch (true) {
    case discriminant > 0:
        r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The equation has two distinct real roots: ${r1} and ${r2}`);
        break;

    case discriminant === 0:
        r1=-b/(2*a);
        console.log(`The equation has one double root: ${r1}`);
        break;

    case discriminant < 0:
        let realPart = (-b / (2 * a)).toFixed(2);
        let imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        console.log(`The equation has two complex roots: ${realPart} + ${imaginaryPart}i and ${realPart} - ${imaginaryPart}i`);
        break;

    default:
        console.log("unexpected case");


}