// const json = '{ "name": "Yoda", "age": 20 }'; // no error
// const json = 'bad json'; // error
const json = '{ "age": 15, "name": "shinigami" }'; // does not raise an error but will cause a bug
     
try {
    const user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
    undefinedVariabel;
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}