const upperSet = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerSet = "qwertyuiopasdfghjklzxcvbnm"
const numberSet = "1234567890"
const symbolSet = "!@#$%^7890"


const upperInput = document.getElementById("upper-case")
const lowerrInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const totalChar = document.getElementById("total-char")
const passBox = document.getElementById("pass-box")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]

}


const generatePassword = (password = "") => {
    if(upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if(lowerrInput.checked) {
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length <= totalChar.value) {
        return generatePassword(password)
    }
    passBox.innerText = truncateString(password, totalChar.value);

}

document.getElementById("btn").addEventListener("click", 
function() {
    generatePassword();
}
)


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
