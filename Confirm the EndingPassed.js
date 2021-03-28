
function confirmEnding(str, target) {
 if (str.substring(str.length - target.length, str.length) !==target) {
  return false
 }
  return true
}

confirmEnding("Bastian", "n");
