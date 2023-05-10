function validate()
{
    var fname=document.getElementById("fname");
    var lname=document.getElementById("lname");
    var phone=document.getElementById("phone-no");
    var email=document.getElementById("email");
    var pass=document.getElementById("password");
    var Agree=document.getElementById("agree");
  
    if(fname.value.trim()=="")
    {
        fname.style.border="3px solid red";
        document.getElementById("n1").style.visibility="visible";
        alert("Name cannot be empty");
        return false;
    }
   else if(lname.value.trim()=="")
    {
        lname.style.border="3px solid red";
        document.getElementById("n2").style.visibility="visible";
        alert("Name cannot be empty");
        return false;
    }
    else if(phone.value.trim()=="" || phone.style.max-length<10)
    {
        phone.style.border="3px solid red";
        document.getElementById("pho").style.visibility="visible";
        alert("please enter a valid phone number");
        return false;
    }
    else if(email.value.trim()=="")
    {
        email.style.border="3px solid red";
        document.getElementById("em").style.visibility="visible";
        alert("please enter a valid email address");
        return false;
    }
    else if(pass.value.trim()==""|| pass.style.min-length<8)
    {
        pass.style.border="3px solid red";
        document.getElementById("pss").style.visibility="visible";
        alert("password must contain 8 character with atleast one numeric,one uppercase value");
        return false;
    }
    else if(agree.value.trim()=="")
    {
        agree.style.border="3px solid red";
        document.getElementById("agg").style.visibility="visible";
        alert("please select");
        return false;
    }
}