function name_check(){
    var userNameInput = document.getElementById("name");
    if (/^[a-zA-Z\s]{1,30}$/.test(userNameInput.value)) {
        document.getElementById("result_name").textContent = "name format is valid.";
        document.getElementById("result_name").style.color = "green";
        return true;
    } else {
        document.getElementById("result_name").textContent = "Invalid name format. Please follow the pattern.";
        document.getElementById("result_name").style.color = "red";
        return false;
    }
}

function password_check() {
    var password = document.getElementById("password");

    if (password.value.length >= 8) {
        document.getElementById("result_password").textContent = "Password is strong";
        document.getElementById("result_password").style.color = "green";
        return true;
    } else {
        document.getElementById("result_password").textContent = "Password is weak (should be at least 8 characters)";
        document.getElementById("result_password").style.color = "red";
        return false;
    }
}

function mobile_check(){
    var mobile = document.getElementById("mobile");
    if(mobile.value.length==10){
        return true;
    }
    else{
        return false;
    }
}

function dob_check() {
    var dob = document.getElementById("DOB").value;
    var parts = dob.split("-");
    if(parts.length==3){
        if (2023 - Number(parts[0])>=16){
            return true
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
    
}

function check_subject() {
    var subjects = document.querySelectorAll(".subject");
    
    for (var i = 0; i < subjects.length; i++) {
        if (!/^[a-zA-Z]{3,11}$/.test(subjects[i].value)) {
            return false;
        }
    }

    return true;
}

function check_marks() {
    var maxMarksInputs = document.querySelectorAll(".max_marks");
    var marksInputs = document.querySelectorAll(".marks");

    for (var i = 0; i < maxMarksInputs.length; i++) {
        var max_marks = parseInt(maxMarksInputs[i].value);
        var marks = parseInt(marksInputs[i].value);

        if (isNaN(max_marks) || isNaN(marks) || marks > max_marks) {
            return "a";
        }
        else if(marks<=0.4*max_marks){
            return "b";
        }
    }

    return true;
}

function validate_form(){
    if(name_check()){
        if(password_check()){
            if(mobile_check()){
                if(dob_check()){
                    if(check_subject()){
                        if(check_marks()=="a"){
                            alert('enter proper marks.');
                            return;
                        }
                        else if(check_marks()=="b"){
                            alert('we are very sorry but you are not eligible to write this exam.')
                            return;
                        }
                        else{
                            alert("All details are valid.");
                            return;
                        }
                    }
                    else{
                        alert('enter appropriate subjects.');
                    }
                }
                else{
                    alert('you are too young to apply for this test.');
                }
            }
            else{
                alert('invalid mobile number');
            }
        }
        else{
            alert('the password is too short')
        }
    }
    else{
        alert('incorrect name formmat.')
    }
}