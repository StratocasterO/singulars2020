// Proves d'expressions regulars
        

var matches = 'aBC'.match(/[A-Z]/g);    // busca les coincidencies a tot el string (g = global) i les fica a un array
console.log(matches);

var index = 'aBC'.search(/[A-Z]/);      // índex de la primera aparició
console.log(index);

var next = 'aBC'.replace(/a/, 'A');     // substitueix la primera coincidència
console.log(next);

var next = 'cocaCOLA'.replace(/[cC]/g, 'A');    // substitueix totes les coincidències
console.log(next);



var test = /amor/.test('sd2k5g5436a6jfamor2i2345i3sdf')   // comprova si hi ha coincidències
console.log(test);

var test2 = /[0-9]amor[0-9]/.test('sd2k5g5436a6jf3amor2i2345i3sdf')
console.log(test2);

var test3 = /amor*/.test('sd2k5g5436a6jfamo2i2345i3sdf')   // '*' => zero o més ocurrències
console.log(test3);

var test4 = /amor+/.test('sd2k5g5436a6jfamo2i2345i3sdf')   // '+' => una o més ocurrències
console.log(test4);

var test5 = /amor{4}/.test('sd2k5g5436a6jfamorrrr2i2345i3sdf')   // '{n}' => n ocurrències (ídem per min, max)
console.log(test5);

var test6 = /amor1?2?3?/.test('sd2k5g5436a6jfamorrrr123i2345i3sdf')   // '?' => una ocurrència o no
console.log(test6);

var test7 = /amor|odio/.test('sd2k5g5436a6jfodio2i2345i3sdf')   // '|' => or lògic
console.log(test7);

var test8 = 'aAbBcC 123'.match(/[^A-Z]/g)  // '^' => not lògic
console.log(test8);


// Other: \d \w \s => digit, word and space character
//        \D \W \S => not digit, not word and not space character
//        \t \n    => tab, new line
//        .        => any character


// contrasenya (min 8 caràcters, min 1 num, min 1 mayus, min 1 minus)
var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test('Pa55w.ord')  
console.log(pass)

// colors hexadecimals
var hex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.test("#ffc6e3")
console.log(hex);

// elimina etiquetes HTML
const re = /(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)/g
const sanitized = "<h1>Hello World</h1>".replace(re, '');
console.log(sanitized);

// lletres amb accents
reg = /[A-zÀ-ú]/             // accepts lowercase and uppercase characters
reg = /[A-zÀ-ÿ]/             // as above but including letters with an umlaut (includes [ ] ^ \ × ÷)
reg = /[A-Za-zÀ-ÿ]/          // as above but not including [ ] ^ \
reg = /[A-Za-zÀ-ÖØ-öø-ÿ]/    // as above but not including [ ] ^ \ × ÷

