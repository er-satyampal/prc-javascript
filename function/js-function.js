function mysum(f1, f2){
    total = f1 + f2;
    return total;
}

a = 10;
b = 10;
z = mysum (a, b);
// ------------------------
x = 100;
y = 100;
zz = mysum(x, y);
// ------------------------
c = 100;
d = 12;
zzz = mysum(c, d);

document.getElementById('bucket').innerHTML = z;
document.getElementById('bucket1').innerHTML = zz;
document.getElementById('bucket2').innerHTML = zzz;


/*
function sum(f1,f2){
    return  f1 + f2;
}
document.getElementById('bucket').innerHTML = sum(4,6);

document.getElementById('bucket').innerHTML = sum(5,4);
*/
