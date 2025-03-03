
import binaryToSpriteBitmap from "./binaryToSpriteBitmap";

console.log('testing 0, width: 16...')
binaryToSpriteBitmap(0, 16)
console.log('\tcorrectly works')

console.log('testing 2**256, width: 16...')
binaryToSpriteBitmap(2**255, 16)
console.log('\tcorrectly works')


console.log('testing -1, width: 16...')
try {
    binaryToSpriteBitmap(-1, 16)
}
catch (ex) { console.log('' +
    '\tcorrectly errors when values are below 0') }


console.log('testing 2**256 + 1, width: 16...')
try {
    binaryToSpriteBitmap(2**255 + 1, 8)
}
catch (ex) { console.log('' +
    '\tcorrectly errors when values are above 2 to the power of width^2 - 1') }
