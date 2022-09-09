<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>
<p>This example calls the fullName method of person, using it on person2:</p>

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
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
document.getElementById("demo").innerHTML = person.fullName.call(person2); 
</script>

</body>
</html>

