/*
Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/


function changeVocals (str) {
    //code di sini
    var changed = ''
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                changed += 'b'
                break
            case 'i':
                changed += 'j'
                break
            case 'u':
                changed += 'v'
                break
            case 'e':
                changed += 'f'
                break
            case 'o':
                changed += 'p'
                break
            case 'A':
                changed += 'B'
                break
            case 'I':
                changed += 'J'
                break
            case 'U':
                changed += 'V'
                break
            case 'E':
                changed += 'F'
                break
            case 'O':
                changed += 'P'
                break
            default:
                changed += str[i]
                break
        }
    }
    return changed
}
  
function reverseWord (str) {
    //code di sini
    var reversed = ''
    for (var i = str.length-1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
  
function setLowerUpperCase (str) {
    //code di sini
    var text = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            text += str[i].toLowerCase()
        } else if (str[i] != str[i].toUpperCase()) {
            text += str[i].toUpperCase()
        }
    }
    return text
}
  
function removeSpaces (str) {
    //code di sini
    if (str.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
    var text = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            text += str[i]
        }
    }
    return text
}
  
function passwordGenerator (name) {
    //code di sini
    var gantiVocal = changeVocals(name)
    var balikKata = reverseWord(gantiVocal)
    var ubahKapital = setLowerUpperCase(balikKata)
    var hapusSpasi = removeSpaces(ubahKapital)
    return hapusSpasi
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'