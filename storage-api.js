<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
localStorage.setItem("name","John Doe");
document.getElementById("demo").innerHTML = localStorage.getItem("name");
</script>

</body>
</html>
