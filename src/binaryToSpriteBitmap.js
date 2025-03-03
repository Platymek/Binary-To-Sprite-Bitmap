
function binaryStringToSpriteBitmap(
    ctx, binaryString, width = 16
) {

    if (binaryString.length > (width**2))
        throw "binary cannot be larger than bounds set by width";

    let imageData = ctx.createImageData(width, width);

    for (let i = 0; i < width*width; i++) {

        if (binaryString[i] === '1') {

            let pixelIndex = i * 4;

            imageData.data[pixelIndex    ] = 0
            imageData.data[pixelIndex + 1] = 0
            imageData.data[pixelIndex + 2] = 0
            imageData.data[pixelIndex + 3] = 255
        }
    }

    return createImageBitmap(
        imageData, 0, 0, width, width, { resizeQuality: "pixelated" });
}


function binaryNumberToSpriteBitmap(
    ctx, binary, width = 16) {

    if (binary < 0) throw "binary cannot be negative number";
    let bString = binary.toString(2);

    return binaryStringToSpriteBitmap(ctx, bString, width);
}


export default binaryNumberToSpriteBitmap
export { binaryStringToSpriteBitmap, binaryNumberToSpriteBitmap };
