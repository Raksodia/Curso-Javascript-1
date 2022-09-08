<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array.filter()</h2>
<p>Creates a new array with all array elements that passes a test.</p>

<p id="demo"></p>

<script>
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}
</script>

</body>
</html>
