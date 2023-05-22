var budget = 0; //預算變數
var spent = 0; //支出變數
var month = 5;
var year = 2023;
const date = [];
var days;
var space = 1;
if(month==1  || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
    days = 31;
}
else if(month == 2){
    days = 28;
    if(year % 4 == 0){
        days+=1;
    }
}
else{
    days = 30;
}
for(var i=0;i<space;i++){
    cal.innerHTML = cal.innerHTML + `
        <button id="useless" style="width:80px;margin:5px 5px 5px 5px;visibility:hidden;">useless</button>
    `
}
for(var i=0;i<days;i++){
    cal.innerHTML = cal.innerHTML + `
        <button id="${"button"+(i+1)}" onclick="date_click(${i+1})" style="width:80px;margin:5px 5px 5px 5px;">${month+"/"+(i+1)}</button>
    `
    if((i+1+space) % 7 == 0){
        cal.innerHTML = cal.innerHTML + `<br/>`
    }
}
function count(){
    leftup.innerHTML = `
    <p>預算: ${budget}</p>
    <p>支出: ${spent}</p>
    <p>剩餘預算: ${budget - spent}</p>
`;
}
count();
reset.addEventListener("click",function(){
    budget = parseInt(prompt("請輸入預算" , 0));
    spent = parseInt(prompt("請輸入支出" , 0));
    count();
})
addbudget.addEventListener("click",function(){
    budget = budget + parseInt(prompt("請新增預算"));
    count();
})
addspent.addEventListener("click",function(){
    spent = spent + parseInt(prompt("請新增支出"));
    count();
})
let line="";
function date_click(x){
    line = month + "/" + x;
    document.getElementById("img").style.display = "block";
    document.getElementById("input").style.display = "flex";
}
sub.addEventListener("click",function(){
    const regex = /^[0-9]+$/;
    if(!regex.test(document.getElementById("money").value)){
        alert("請輸入數字");
        document.getElementById("money").value="0";
        document.getElementById("reason").value="";
    }
    else{
        if(document.getElementById("s").checked){
            line+=" 支出 ";
            spent = spent + parseInt(document.getElementById("money").value);
        }
        else{
            line+=" 收入 ";
            budget = budget + parseInt(document.getElementById("money").value);
        }
        line = line + parseInt(document.getElementById("money").value) + " 元\n原因: ";
        line+=document.getElementById("reason").value;
        document.getElementById("input").style.display = "none";
        document.getElementById("img").style.display = "none";
        document.getElementById("money").value="0";
        document.getElementById("reason").value="";
        alert(line);
        line="";
        count();
    }
})
cancel.addEventListener("click",function(){
    document.getElementById("input").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("money").value="0";
    document.getElementById("reason").value="";
    line="";
})