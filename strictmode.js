<!DOCTYPE html>
<html>
<body>

<p>"use strict" in a function will only cause errors in that function.</p>

<p>Activate debugging in your browser (F12) to see the error report.</p>

<script>
x = 3.14;    // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;  // This will cause an error (y is not defined).
}
</script>

</body>
</html>
