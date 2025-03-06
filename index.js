function receivesAFunction(callback) {
    console.log(`I have a received a function`)
    callback()
};
function returnsANamedFunction() {
    const namedFunction = () => {
        console.log(`I am what is named`)
    };
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return () => {
        console.log(`Okay, I am anonymous`);
    }
}

