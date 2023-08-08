function isJavascriptFile(filename) {
    if (typeof filename != 'string') {
        return 'Please provide a string'
    }
    else {
        const arr = filename.split('.')
        return arr;
    }
}
    console.log(isJavascriptFile('hello.js.hello.world'));