console.log(1)

setTimeout(()=>console.log(2))

Promise.resolve().then(() => console.log(3))

Promise.resolve().then(() => setTimeout(() => console.log(4)))

Promise.resolve().then(() => console.log(5))

setTimeout(() => console.log(6))

console.log(7)

//O que eu entendi sobre o clog(6) vir antes do clog(4):
//no cl4, apesar de ser um promise, ele tem um setTimeout
//isso faz cair na macrotask queue, tal qual o cl6
//no entanto, o js ainda precisa resolver a promoise, oq seria o *step 1* na fila macro da execuçao
//ja o clog6 o *step1* ja é o console log entao ele sai na frente
//e o *step 2* do cl4 seria o settimeout para entao executar o cl4

//se eu estiver errado nisso aqui fodeuKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK

//ex final
//primiero o js resolve a promise e recebe uma callback clog(4)
//o js le o settimout e executa clog(6)
//enfim o js le o settimout do clog(4) e mostra na tela clog(4)