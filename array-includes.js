<!DOCTYPE html>
<html>
<body>

<h1>Array includes()</h1>

<p>Check if the fruit array contains "Mango":</p>

<p id="demo"></p>

<p><strong>Note:</strong> The includes method is not supported in Edge 13 (and earlier versions).</p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.includes("Mango");
</script>

</body>
</html>
