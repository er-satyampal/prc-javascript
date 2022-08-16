
document.getElementById("processForm").addEventListener("click", function (e) {
    e.preventDefault();

    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let state = document.getElementById("state").value;


    if ((first_name.length == "") || (first_name.length >= 13)) {
        document.getElementById("msg").innerHTML = "Condition for first name does not met";

        document.getElementById("fname").addEventListener("keyup", function () {
            document.getElementById("msg").innerHTML = "";
        });

    return false;
    }



    if ((last_name.length == "") || (last_name.length >= 10)) {
        document.getElementById("msg").innerHTML = "Condition for last name does not met";
        document.getElementById("lname").addEventListener("keyup", function () {
            document.getElementById("msg").innerHTML = "";
        });

        return false;
    }

    if ((state.length == " ")||(state.length >= 16)){
        document.getElementById("msg").innerHTML = "Condition for state does not met";
        document.getElementById("state").addEventListener("keyup", function(){
            document.getElementById("msg").innerHTML ="";
        });

        return false;
    }
});
