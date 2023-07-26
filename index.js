const { name, description, version } = require("./package.json");
const WELCOME_MESSAGE = `Welcome to ${name} - v${version}\n\n${description}\n`;

console.log(WELCOME_MESSAGE);
