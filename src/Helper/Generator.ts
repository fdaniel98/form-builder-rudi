
function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}


function genNameField(nameField: string) {
    const ms = new Date().getTime();
    const rand = getRandomInt(999);
    return `${nameField}${ms}${rand}`
}

export {
    genNameField
}