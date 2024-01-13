//==== PROMISE CHANGE =====

var promise = new Promise(
    function (resole, reject) {
        resole();
    }
)

//Cái đằng sau cần value của đằng trước để thực thi
promise
    .then(function () {
        /**
         * Nếu returrn không phải promise thì sẽ chạy then ở phía sau (return 1)
         * Nếu return promise thì phải chờ promise giải quyết xong thì then kế tiếp sẽ phải chờ
         */
        return new Promise (function(resole) {
            setTimeout(function() {
                resole([1, 2, 3]);
            }, 3000);
        });
    })
    .then(function (data) {
        console.log(data);
        return 2;
    })
    .then(function (data) {
        console.log(data);
        return 3;
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function () {

    })
    .finally(function () {
        console.log('Done');
    })

//Bài khác
function sleep (ms) {
    return new Promise (function (resole) {
        setTimeout(resole, ms);
    });
}

sleep(1000) 
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
