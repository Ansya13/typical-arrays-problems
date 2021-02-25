
exports.min = function min(array) {
    if (array == undefined|| array.length==0){
        return 0
    } else {
         let a = [0];
    function compareNumeric(a, b) {
  if (a < b) return -1;
  if (a == b) return 0;
  if (a > b) return  1;
    }
    a = array.sort(compareNumeric);
    a = array[0];
     return a;
    }
}

exports.max = function max(array) {
    if (array == undefined|| array.length==0){
        return 0
    } else {
        let a = [];
    function compareNumeric(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
    }
    a = array.sort(compareNumeric);
    a = array[0];

    return a;
    }

}

exports.avg = function avg(array) {
    if (array==undefined||array.length==0) {
        return 0
    } else {
        sum = array.reduce(getResult,0);

function getResult(sum, number) {

    return sum + number;
}

return(sum/array.length);
    }
}
