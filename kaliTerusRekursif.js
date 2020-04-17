
function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (String(angka).length == 1) return angka
    else {
        return kaliTerusRekursif(kaliTerusRekursif(Number(String(angka)[0])) * kaliTerusRekursif(Number(String(angka).slice(1))))
    }
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
