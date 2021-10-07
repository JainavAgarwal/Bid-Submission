// let loginwindow = document.URL;
// str1 = "https://rhbauction.procure247.com/x-login";
// var check = 0;
// for(var i = 0;i<str.length;i++){
//     if(str1[i]!=str[i])
// }
if(document.URL.localeCompare("https://rhbauction.procure247.com/x-login")==0){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    user.value = "jainavagrawal@gmail.com";
    pass.value = "sink@3690"
    document.getElementById("loginBtn").click();
}
if(document.URL.localeCompare("https://rhbauction.procure247.com/erfx/bidder/rfx-list")==0){
    window.open("https://rhbauction.procure247.com/eauction/bidder/auction-list");
}
if(document.URL.localeCompare("https://rhbauction.procure247.com/eauction/bidder/auction-list")==0){
   
    window.open(document.getElementsByClassName("action-list-item")[31].innerHTML.substring(21,98));
}
setInterval(function(){ 
    if(document.title.localeCompare("Bidding Hall")==0){
        // alert(document.URl);
        if(document.getElementById("lbl-bidder-rank-1").innerText.localeCompare("1")==1){
            // alert(document.URL);
        let str = document.getElementById("lbl-next-bid-price-1").innerText;
        let st = "";
        for(let i = 0;i<str.length;i++){
            if(str[i].localeCompare(".")==0){
                break;
            }
            if(str[i].localeCompare(',')==1){
                st = st+str[i];
            }
        }
        let i = parseInt(st);
        let limit = 150000;
        if(i<limit){
        document.getElementById("1-4-17701-1-txt").value = st;
        document.getElementById("1-4-17701-1-txt").focus();
        // document.getElementById("1-4-17701-1-txt").click();
        // document.getElementById("1-5-17702-2-cell").click();
        document.getElementById("btn-1").click();

            if(document.getElementsByClassName("btn btn-primary")[0]){
                document.getElementsByClassName("btn btn-primary")[0].click();
            }
        }


    }
}
}, 1000);

// alert(document.URL);