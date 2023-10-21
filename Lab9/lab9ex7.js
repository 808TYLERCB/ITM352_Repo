function download(url, callback) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        let picture_data = "image data:XOXOXO"; 
        callback(picture_data); // Invoking the callback function with the picture_data
    }, 3 * 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';
download(url, process);