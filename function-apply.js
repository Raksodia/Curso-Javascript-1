<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>In this example the fulllName method of person is <b>applied</b> on person1:</p>

<p id="demo"></p>

<script>
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

document.getElementById("demo").innerHTML = person.fullName.apply(person1); 
</script>

</body>
</html>

