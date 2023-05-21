const helperFunctions = (function() {

    function getRandomNumberInRange(start = 1, end = 20) {
        return Math.floor(Math.random() * (start - end + 1) + end);
    }

    return {
        getRandomNumberInRange,
    };

})();

const { getRandomNumberInRange } = helperFunctions;

export { getRandomNumberInRange };



