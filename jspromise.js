function job() {
    return new Promise((resolve, reject) => {
    setTimeout(() => { resolve("promise fulfilled")}, 2000);
});
}

module.exports = job;
