let args = process.argv.slice(2);

const fetcher = function(args) {
  const request = require('request');
  const fs = require('fs');

  request(args[0], (error, response, body) => {
    if (response && response.statusCode === 200) {
      fs.writeFile(args[1], body, (err) => {
        if (err) throw err;
        console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
      });
    } else {
      console.log("bad url was input :(");
      console.log('error:', error);
    }
  });
};

fetcher(args);