function validate()
{
    var name=/^[A-Z]{1}[A-Z a-z]+$/;
    var user=/^[A-Z a-z 0-9 # @]+$/;
    var ph=/^[6-9]{1}[0-9]{9}$/;
    var pass=/^[a-z A-Z 0-9 # @ _]{6}[a-z A-Z 0-9 # @ _]+$/;
    if(document.validationForm.fullName.value.search(name)==-1){
        alert("FullName starts with an uppercase letter, followed by one or more letters (both uppercase and lowercase) or spaces");
        return false;
    }
    if(document.validationForm.phNo.value.search(ph)==-1){
        alert("Enter valid Phone Number");
        return false;
    }
    if(document.validationForm.userName.value.search(user)==-1){
        alert("Username can contain letters (in any case), digits, and the special characters # and @ only.");
        return false;
    }
    if(document.validationForm.password.value.search(pass)==-1){
        alert("password must contain a minimum of 6 characters and can include letters (uppercase or lowercase), digits, and the special characters #, @, and _.");
        return false;
    }
    if(document.validationForm.confirmPassword.value.search(document.validationForm.password.value)==-1){
        alert("Password doesn't match");
        return false;
    }
    return true;
}