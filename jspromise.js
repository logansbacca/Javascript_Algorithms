function job() {
    return new Promise((resolve, reject) => {
    setTimeout(function() { resolve("promise fulfilled"); }, 2000);
});
}

module.exports = job;
