
let idChk = document.querySelector('.chk_id')
let idTxt = document.querySelector('.id_box')

idChk.addEventListener('click',()=>{
    if(idTxt.value == 'hagyeong'){
        alert('사용할 수 없는 아이디입니다')
        idTxt.value = ''
    } else if(idTxt.value == ''){
        alert('아이디를 입력해주세요')
    } else {
        alert('사용할 수 있는 아이디입니다')
    }
})

let pwChk01 = document.querySelector('.pw_box')
let pwChk02 = document.querySelector('.pw_box1')
let pwBtn = document.querySelector('.chk_pw')

pwBtn.addEventListener('click',function(){
    if(pwChk01.value == pwChk02.value){
        alert('비밀번호가 일치합니다')
    } else {
        alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요')
        pwChk01.value= ''
        pwChk02.value= ''
    }

})

let all = document.querySelector('.all')
let agree01 = document.querySelector('.agree01')
let agree02 = document.querySelector('.agree02')
let agree03 = document.querySelector('.agree03')
let agree04 = document.querySelector('.agree04')


all.addEventListener('click',function(){
    if(all.checked){
    agree01.checked = true;
    agree02.checked = true;
    agree03.checked = true;
    agree04.checked = true;
    } else {
        agree01.checked = false;
        agree02.checked = false;
        agree03.checked = false;
        agree04.checked = false;
    } 
})

