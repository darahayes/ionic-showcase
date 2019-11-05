const fs = require('fs').promises

const f1 = './README.adoc'
const f2 = './package.json'

function mergeFile(f1, f2) {
  console.log(f1.toString().slice(0, 10) + f2.toString().slice(0, 10))
}

function readFiles(f1, f2) {
  return fs.readFile(f1).then((file1) => {
    return fs.readFile(f2)
  }) 
}

async function start () {
  try {
    readFiles.then(console.log).then((console.log))
  } catch (e) {
    console.log(e)
  }
}

function add(x, y) {
  return new Promise((resolve, reject) => {
    resolve(x + y)
  })
}



console.log(add(5, 10).then((result) => {}))



// (function foo() {})()

// const foo = () => {}



// function foo(a, b, c) {

  
//   function bar() {
//     console.log(a + b + c)
//   }

//   bar()
// }

// foo(1, 2, 3)