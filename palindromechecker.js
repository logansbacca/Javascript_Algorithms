function checkPalindrome(str) {
  let array = str.split("")
  let reve = array.reverse()
  let joining= reve.join("")

  if (str == joining) {
    return "it is a palindrome"
  }
  return "it is not a palindrome"
}

checkPalindrome("hello")
