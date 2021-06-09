class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// const json = '{ "name": "Yoda", "age": 20 }'; // no error
// const json = 'bad json'; // error
const json = '{ "age": 15 }'; // does not raise an error but will cause a bug
     
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new CustomError("'name' is required.");
    }
    if (!user.age) {
        throw new CustomError("'age' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof CustomError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}