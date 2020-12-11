const root = document.documentElement;
const inputElements = document.querySelectorAll('input');
const Code = document.querySelector('#code');
const btnCopy = document.querySelector('#copy')

let tl = tr = br = bl = '0%';
let final_code;

function restrictInput(evt){
    var charCode = evt.key;
    if(charCode === '.' || (parseInt(charCode) >= 0 && parseInt(charCode)<=9))
        return true
    else
        return false
}

inputElements.forEach((element)=>{
    
    element.addEventListener('input',(event)=>{
        let radius_value = event.target.value !== ''?event.target.value : '0';
        switch(element.id){
            case 'input_tl': root.style.setProperty('--border-radius-tl', radius_value + '%');
                             tl = radius_value + '%';
                             break;
            case 'input_tr': root.style.setProperty('--border-radius-tr', radius_value + '%');
                             tr = radius_value + '%';
                             break;
            case 'input_br': root.style.setProperty('--border-radius-br', radius_value + '%');
                             br = radius_value + '%';
                             break;
            case 'input_bl': root.style.setProperty('--border-radius-bl', radius_value + '%');
                             bl = radius_value + '%';
                             break; 
        }
        if(tl === tr === bl === br){
            if(tl === '0'){
                final_code =`border-radius: 0`;
            }else{
                final_code =`border-radius: ${tl};`
            }
        }
        else if(tl === br && tr === bl){
            final_code = `border-radius: ${tl} ${tr}`
        }
        else{
            final_code = `border-radius: ${tl} ${tr} ${br} ${bl};`;
        }
        Code.innerText = final_code;
    })
})

btnCopy.addEventListener('click',(e)=>copyToClipboard('#code'));

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    alert('Copied to clipboard');
  }