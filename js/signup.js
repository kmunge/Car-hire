var divs = new Array();
divs[0]="errUid";
divs[1]="errPwd";
divs[2]="errConfirm";

function valid(){
    var inputs=new Array();
    errors[0]="<span>Please enter your username!</span>";
    errors[1]="<span>Please enter your password correctly!</span>";
    errors[2]="<span>Please confirm your password!</span>";
    for(i in inputs){
        var errMsg=errors[i];
        var divMsg=divs[i];
        if(inputs[i]=="")
        
        documents.getElementById(divMsg).innerHTML=errMsg;

        else if(i=1){
            var ff=document.getElementById('pwd').value;
            var ss=document.getElementById('confirm').value;
            if(ss!=ff)
                document.getElementById('errConfirm').innerHTML="<span>Your password doesnt match..!!</span>";
            else
                document.getElementById(divMsg).innerHTML="OK!";
        }
    }
    
}
function finalValidate(){
    var count = 0;

    for(i=0;i<2;i++){
        var divMsg = divs[i];

        if(document.getElementById(divMsg).innerHTML == "OK!")

            count = count + 1;
    }
    if(count == 2)
    document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
    else
    document.getElementById("errFinal").innerHTML = "Please enter all the required fields.!!";
    
}