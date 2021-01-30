const hash = () => {
    return (new Date().getTime()).toString(36);
}


module.exports = {
    hash
}