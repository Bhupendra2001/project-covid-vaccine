let isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
}

let isValidPassword = function (password) {
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
    return passwordRegex.test(password)
}

let isValidName = function (name) {
    let nameregex = /^[a-zA-Z\. ]*$/
    return nameregex.test(name)
}

const isValid = function (value) {
    if (typeof value !== "string") return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidAadhar = function (abc) {
    let sample = /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/
    return sample.test(abc)
}
let isValidNumber = (age) => {
    return /\d/.test(age)
}

let isValidPincode = (num) => {
    return /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/.test(num);
}

let isValidDate= (date)=>{
   return /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/.test(date)

}

module.exports={isValidDate,isValidPhone,isValidPassword,isValidName,isValid,isValidAadhar,isValidNumber,isValidPincode}