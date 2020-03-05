const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function decode(expr) {
    let arr = []
let arr2 = []
let x = []
let str = []

for(let i = 0; i<expr.length; i=i+10){
	arr.push(expr.substr(i, 10))
}


for(let i = 0; i<arr.length; i++){
	for(let j = 0; j<arr[i].length;j=j+2){
  	x.push(arr[i].substr(j, 2))
    if(x.length==5){arr2.push(x); x = []}
  } 
}


let arr3 = arr2.map(el=>el.filter(el=>el !== '00')).map(el=>el.map(el=>el=='10' ? '.' : el=='11'? '-' : '**')).map(el=>el.join(''))


for(let i=0; i<=arr3.length; i++){
	for(let j in MORSE_TABLE){
  	if(arr3[i] == j){str.push(MORSE_TABLE[j])}
}
}
return str.join('')
}

module.exports = {
    decode
}