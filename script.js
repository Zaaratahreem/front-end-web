function calculateAge() {
    var dob = document.getElementById("dob").value;// created variable dob
    var dobDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var m = today.getMonth() - dobDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    document.getElementById("age").innerHTML = "Your age is: " + age;
}