

function eliminatecomma(val){
    let str = "";
    for (let i = 0; i < val.length; i++) {
   
        if(val[i]=="."){
            break;
        }
        if(val[i]!=","){
            str = str.concat(val[i]);
        }
     
      }
      
      return str;
      
}

    let ids = {"Jitesh":"jiteshagarwal82@gmal.com","Deepika":"raghavagarwal0247@gmail.com",
"Rajveer":"answersgeneral@gmail.com"
};

    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    user.value = "jiteshagarwal82@gmail.com";
    pass.value = "sink@3690"
    document.getElementById("loginBtn").click();
    let valu = parseInt(eliminatecomma(val.innerHTML));                 //login in
    document.getElementById("1-4-13108-1-txt").value = valu+500;        //Value of bid text1;

setInterval(function(){ 
    
}, 10000);
