
import { binaryNumberToSpriteBitmap, binaryStringToSpriteBitmap } from "./binaryToSpriteBitmap.js";


// input sprite

let input = document.getElementById('binary');

function drawImageBitmapFromInput() {

    let inputCanvas = document.getElementById('c1');
    let ictx = inputCanvas.getContext('2d');

    try {

        binaryStringToSpriteBitmap(

            ictx, input.value, 4)

            .then((value) => {
                ictx.clearRect(0, 0, inputCanvas.width, inputCanvas.height);
                ictx.imageSmoothingEnabled = false;
                ictx.drawImage(value, 0, 0, 160, 160)
            });
    }
    catch (error) {


    }
}

drawImageBitmapFromInput()

input.oninput = drawImageBitmapFromInput


// sprites 2-4

let binaryNumbers = [

    0b1010010110100101,
    0b0000000000000000,
    0b1111111111111111,
]

for (let i = 2; i <= 4; i++) {

    let canvas = document.getElementById('c' + i);
    let ctx = canvas.getContext('2d');
    ctx.moveTo(0, 0);

    binaryNumberToSpriteBitmap(

        ctx, binaryNumbers[i - 2], 4)

        .then((value) => {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(value, 0, 0, 160, 160)
    });
}
