"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function genNameField(nameField) {
    const ms = new Date().getTime();
    const rand = getRandomInt(999);
    return `${nameField}${ms}${rand}`;
}
exports.genNameField = genNameField;
//# sourceMappingURL=Generator.js.map