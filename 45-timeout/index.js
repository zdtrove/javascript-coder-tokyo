console.log('Start');
var timeoutId = setTimeout(function() {
    console.log('Finish');
}, 1000);
console.log('Done');

clearTimeout(timeoutId);