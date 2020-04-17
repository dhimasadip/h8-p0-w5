function sorting(arrNumber) {
  // code di sini
    
    var bigNum = 0
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > bigNum) {bigNum = arrNumber[i]}
    }
    return [bigNum, arrNumber]
}

function getTotal(arrNumber) {
  // code di sini
  var total = 0
  for (var i = 0; i < arrNumber[1].length; i++) {
      if (arrNumber[0] == arrNumber[1][i]) { total++}
  }

  if (arrNumber[1] == 0) {return ''}
  return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${total} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
''