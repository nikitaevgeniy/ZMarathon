function formattedPhone(phone) {
    if (lengthOfPhonenumber(phone) == 12){
        let result = '';
        for (let i = 0; i < phone.length; i++){
            if(i == 0) {
                result += addChar('', phone.charAt(i))
            }else if (i == 1) {
                result += addChar('', phone.charAt(i))
            }else if (i == 2) {
                result += addChar(' (', phone.charAt(i))
            }else if (i == 3) {
                result += addChar('', phone.charAt(i))
            }else if (i == 4) {
                result += addChar('', phone.charAt(i))
            }else if (i == 5) {
                result += addChar(') ', phone.charAt(i))
            }else if (i == 6) {
                result += addChar('', phone.charAt(i))
            }else if (i == 7) {
                result += addChar('', phone.charAt(i))
            }else if (i == 8) {
                result += addChar('-', phone.charAt(i))
            }else if (i == 9) {
                result += addChar('', phone.charAt(i))
            }else if (i == 10) {
                result += addChar('-', phone.charAt(i))
            }else if (i == 11) {
                result += addChar('', phone.charAt(i))
            }
        }
        return result;
    } else {
        return "number of phone is not has 12 characters";
    }
}
function addChar(char, resultChar) {
    return char + resultChar ;
}
function lengthOfPhonenumber(str){
    return str.length
}
console.log(formattedPhone('+71234567890'));
console.log(formattedPhone('+712345678901111'));
console.log(formattedPhone('+71237890'));