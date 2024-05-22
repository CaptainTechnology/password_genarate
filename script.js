const password_box=document.getElementById("password");
const genrate=document.getElementById("generate");
const copy=document.getElementById("copy");

const APPERCASE="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="~@!#$%^&*()_+-=";
const lent=35;
const allchar=APPERCASE+lowercase+number+symbol;

genrate.addEventListener("click",createpassword);
copy.addEventListener("click",()=>{
    // password_box.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(password_box.value);

})



function createpassword(){
    password_box.value="genrated";
    let pass="";
    pass+=APPERCASE[Math.floor(Math.random()*APPERCASE.length)];
    pass+=lowercase[Math.floor(Math.random()*lowercase.length)];
    pass+=number[Math.floor(Math.random()*number.length)];
    pass+=symbol[Math.floor(Math.random()*symbol.length)];

    while(lent>pass.length){
        pass+=allchar[Math.floor(Math.random()*allchar.length)];
    }
    password_box.value=pass;

}

