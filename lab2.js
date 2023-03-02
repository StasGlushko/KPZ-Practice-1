let num = 0
const prime_num_generator = () => {
    return ++num
    
}

const next = prime_num_generator

console.log(next());
console.log(next());
console.log(next());
console.log(next());
