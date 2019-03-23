
console.log('!!!');

const fs = require('fs');



async function readDir (path) {
    try {
        var content = await fs.readdirSync(path, {withFileTypes: true});

        for (var i = 0; i < content.length; i++) {
            // if folder
            if (content[i].isDirectory() && content[i].name.charAt(0) !== '.') {
                //console.log(content[i].name);
                readDir(path + content[i].name + '/');

            } else if (content[i].name === 'index.txt') {
                var str = fs.readFileSync(path + 'index.txt');
                fs.writeFileSync(path + 'index.html', str);
                console.log('created: ' + path + 'index.html');
            }
        }


        //console.log(content);
    } catch (error) {
        console.log(error);
    }

    //fs.writeFileSync("index.html", "This is a test!!!");
}




async function build () {
    try {
        readDir("./");
    } catch (error) {
        console.log(error);
    }

}


build();





