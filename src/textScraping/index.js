const path = require("path");
const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient({
  keyFilename: path.join(__dirname, "..", "config", "secret1.json"),
});

/**
 *
 * Receive two Strings and returns the greater one.
 *
 * @param {String} text1
 * @param {String} text2
 * @returns The greater String
 */
// function greaterString(text1, text2) {
//   if (text1.length > text2.length || text1.length == text2.length) {
//     return text1;
//   } else {
//     return text2;
//   }
// }

/**
 *
 * Receive an image from the current directory and detect the text in it.
 *
 * @param {String} image Path to the image file.
 * @returns The text from the image.
 * @example await textScraping("image.png");
 */
async function textScraping(image) {
  try {
    console.log(path.join(__dirname, "..", "config", "secret.json"));
    const text1 = await client.textDetection(image);
    // const text2 = await client.documentTextDetection(image);

    Promise.all([text1]);

    // const result1 = text1[0].fullTextAnnotation.text
    //   .replace(/ /g, "")
    //   .replace(/\n/g, "");
    // const result2 = text2[0].fullTextAnnotation.text
    //   .replace(/ /g, "")
    //   .replace(/\n/g, "");

    return text1[0].fullTextAnnotation.text;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = textScraping;
