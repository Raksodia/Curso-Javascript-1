<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The Array.keys() method returns an Array Iterator object with the keys of the array.</p>

<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

<p>Array.keys() is not supported in Internet Explorer.</p>

</body>
</html>
