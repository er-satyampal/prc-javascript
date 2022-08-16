
document.getElementById("processForm").addEventListener("click", function(e){
    e.preventDefault();

    let first_name =  document.getElementById("fname").value;
    let last_name =  document.getElementById("lname").value;
    let state =  document.getElementById("state").value;


    if ((first_name.length == "") || (first_name.length >= 13 )){
        document.getElementById("msg").innerHTML = "Condition for first name does not met";

        document.getElementById("fname").addEventListener("keyup", function(){
            document.getElementById("msg").innerHTML = "";
        });
    }


  });  

  document.getElementById("process")