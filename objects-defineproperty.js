<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object.defineProperty()</h2>

<p>This example changes a property value.</p>

<p id="demo"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN" 
};

// Change a property
Object.defineProperty(person, "language", {value:"NO"})
document.getElementById("demo").innerHTML = person.language;
</script>

</body>
</html>
