<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array Sort</h2>

<p>The lowest number is <span id="demo"></span>.</p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
</script>

</body>
</html>

