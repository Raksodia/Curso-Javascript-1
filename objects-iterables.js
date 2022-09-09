<!DOCTYPE html>
<html>
<body>
<h2>JavaScript Iterables</h2>
<p>Home Made Iterable:</p>

<p id="demo"></p>

<script>
// Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
n.next(); // 10
n.next(); // 20
n.next(); // 30

document.getElementById("demo").innerHTML = n.next().value;
</script>
</body>
</html>
