const fac = recursive((self, n, acc=1) => {
    console.log(hello)
    return n < 2 ? acc : self(n-1, acc*n)
})
const isEven = recursive(
    (self, n) => n < 2 ? false 
              : (n == 2 ? true 
                : self(n - 2))
)

//console.log(isEven(84327681))
console.log(fac(100))

const isEvenU = (n) => n < 2 ? false 
              : (n == 2 ? true 
                : isEvenU(n - 2))

console.log(isEvenU(84327681))

console.log(isEven(84327681))
