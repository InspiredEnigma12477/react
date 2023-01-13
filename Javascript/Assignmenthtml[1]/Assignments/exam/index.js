showData=()=>{
    //get name -text box
     var n =document.getElementById("nm1").value;
    //get email - text box
    var emailId = document.getElementById("em").value;
    //get address - text area
    var address1=document.getElementById("ad").value;  
   
    //get radio button checked status
    var mStatus = document.getElementsByName("r1");
    var status ;
    for(let i=0;i<mStatus.length;i++){
        if(mStatus[i].checked){
            status=mStatus[i].value;
            break;
        }
    }

    //getting text from selected dropdown menu
    // var choice=document.getElementById("chh");
    // if(choice.selectedIndex>0){
    //     var selectedText=choice.options[choice.selectedIndex].text;
    // }
    // else
    //     var selectedText="Not slected"
    var selectedText = document.getElementById("chh").value;

    var window = document.getElementsByName("window");
    for(let i = 0 ; i<window.length;i++){
        if(window[i].checked){
            if(window[i].value=="sameWindow"){
            var output="Name:"+n+"<br>Email-Id"+emailId+"<br>Address:"+address1 +"<br> Maritial Status:"+status +"<br> Choice:"+selectedText;
            var input=`<h3>Your Form Response :</h3><h5>Name:${n}</h5> <h5>Maritial Status:${status}</h5><h5>Email:${emailId}</h5><h5>Address:${address1}</h5><h5>Choice:${selectedText}</h5>`
            document.getElementById("output").innerHTML=input;

            }
            if(window[i].value=="newWindow"){
                document.write(`<h3>Your Form Response :</h3><h5>Name:${n}</h5> <h5>Maritial Status:${status}</h5><h5>Email:${emailId}</h5><h5>Address:${address1}</h5><h5>Choice:${selectedText}</h5>`);
            }
        }


            
       
    }
        
    
}
