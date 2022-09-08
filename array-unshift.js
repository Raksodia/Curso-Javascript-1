<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Methods</h2> 
<h2>unshift()</h2>
<p>The unshift() method adds new elements to the beginning of an array:</p>

<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.unshift("Lemon");
document.getElementById("demo2").innerHTML = fruits;
</script>

</body>
</html>