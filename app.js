const inquirer = require('inquirer');
// this line imports the inquirer module, which provides a simple way to prompt users 
const qr = require('qr-image');
// this line imports the qr-impage module, which allows you to generate QR codes.
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "Type in your URL: ", // prompts user for inputs
        name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); //

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });