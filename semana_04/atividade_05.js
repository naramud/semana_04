// `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 |

const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}

console.log(fatorial(6))