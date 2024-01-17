function calculateLove() {
  var name1 = document.getElementById("name").value;
  var name2 = document.getElementById("crush").value;

  if (name1 === "" || name2 === "") {
    alert("Please enter both names");
    return;
  }

  var n = Math.random();
  n = n * 100;
  n = Math.floor(n) + 1;
  alert("There is a " + n + "% chance " + name2 + " likes you back!");
}
