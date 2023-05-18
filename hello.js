function hello(str) {
    let word = 'Hello' + ', ' + str;
    console.log(word);
    return word;
};

hello('world!')

module.exports = hello;