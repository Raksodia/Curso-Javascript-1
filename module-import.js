<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Modules</h1>

<p id="demo"></p>

<script type="module">
import { name, age } from "./module-export.js";

let text = "My name is " + name + ", I am " + age + ".";

document.getElementById("demo").innerHTML = text
</script>

</body>
</html>
