const fileClient = require('solid-file-client');

function createFile(newFile) {
    fileClient.createFile(newFile).then( fileCreated => {
        console.log(`Created file ${fileCreated}.`);
    }, err => console.log(err) );
};