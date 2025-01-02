//.toLocaleString() = returns a string with a language sensitive representaion of a number

//Int1.NumberFormat() = International number format

//number.toLocateString("locale", {options});

//'locale' = specify the language (undefined = default set in a browser)
//'options' = object wiht formatting options

let number = 123456.789;
console.log(number);

console.log(number.toLocaleString(undefined)) //default locale
console.log(number.toLocaleString("en-US"))
console.log(number.toLocaleString("hi-IN"))
console.log(number.toLocaleString("de-DE"))
console.log(number.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log(number.toLocaleString("hi-IN", {style: "currency", currency: "INR"}));
console.log(number.toLocaleString("de-DE", {style: "currency", currency: "EUR"}));
