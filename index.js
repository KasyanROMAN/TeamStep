let a = {
    b:13
}

delete a.b

a.n1 = 13
a.n2 = 0

console.log(typeof a.n1)
console.log(typeof a.n2)