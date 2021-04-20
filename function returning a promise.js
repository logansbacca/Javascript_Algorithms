function job(data) {
    return new Promise((resolve,reject) => {
        if (isNaN(data)) {
            reject("error")
        }
         else if (data % 2 == 0) {
             setTimeout(reject,2000,"even")
        }
        else {
            setTimeout(resolve,1000,"odd")
        }
    });
}

module.exports = job;
