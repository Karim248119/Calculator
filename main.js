const btn= document.querySelectorAll('button')
const audio= document.querySelector('audio')

btn.forEach(function(btn){
    btn.addEventListener('click',function(){
    audio.play()
    btn.style.scale=0.98;
    setTimeout(function(){
    btn.style.scale=1;
    },100)


})
})

var current_operand, previous_operand
var current_operation
const button_number = document.querySelectorAll('[data-number]')
const button_operation = document.querySelectorAll('[data-operation]')
const delete_button = document.querySelector('[data-delete]')
const equal_button = document.querySelector('[data-equal]')
const clear_button = document.querySelector('[data-clear]')
var previous_operand_text = document.querySelector('.previous')
var current_operand_text = document.querySelector('.current')

function clear(){
    clear_button.addEventListener('click', function(){
    previous_operand_text.textContent=''
    current_operand_text.textContent=''
    button_operation.textContent=''
})
}
clear()

delete_button.addEventListener('click', function(){
    var content=current_operand_text.textContent
    var result= content.slice(0,-1)
    current_operand_text.textContent=result
})

function addNum(){
    button_number.forEach(function(btn_par){
        btn_par.addEventListener('click',function(){
            if(btn_par.textContent =='.' && current_operand_text.textContent.includes('.')){
                return;
            }
            current_operand_text.textContent+=btn_par.innerHTML
            current_operand=current_operand_text.textContent
        })
    })
}
addNum()



    button_operation.forEach(function(btn){
        btn.addEventListener('click',function(){
            if(previous_operand_text.textContent.includes('*')||previous_operand_text.textContent.includes('/')
            ||previous_operand_text.textContent.includes('-')||previous_operand_text.textContent.includes('+')){
                let result;
                const num1= parseFloat(previous_operand)
                const num2=parseFloat(current_operand)
                const op=btn.innerHTML
                switch(op){
                case '+':
                    result= num1+num2;
                break
                case '-':
                    result= num1-num2;
                break
                case '/':
                    result= num1/num2;
                break
                case '*':
                    result= num1*num2;
                break
                default:
                    break;}
                    previous_operand_text.textContent=result+btn.textContent
                    current_operand_text.textContent=''
                    current_operand=''
                    previous_operand=result
                    current_operation=btn.textContent
            }
            
            else{
            previous_operand=current_operand
            current_operand=''
            previous_operand_text.textContent=previous_operand+btn.textContent
            current_operand_text.textContent=''
            current_operand=btn.textContent
        }
        })
    })

     //equal button

equal_button.addEventListener('click',function(){
    if(previous_operand_text.textContent.includes('*')||previous_operand_text.textContent.includes('/')
            ||previous_operand_text.textContent.includes('-')||previous_operand_text.textContent.includes('+')){
                const num1= parseFloat(previous_operand)
                const num2=parseFloat(current_operand)
                const num = previous_operand_text.textContent.trim()
                const op = num.charAt(num.length-1)
                console.log(previous_operand_text.textContent)
                console.log(op)
                let result
                
                switch(op){
                case '+':
                    result= num1+num2;
                break
                case '-':
                    result= num1-num2;
                break
                case '/':
                    result= num1/num2;
                break
                case '*':
                    result= num1*num2;
                break
                default:
                    break;}
                    current_operand_text.textContent=result
                    current_operand=result
                    previous_operand_text.textContent=''
                    console.log(result)
            }
            else{
            }
    })
//end





//    button_number.forEach(function(btnn){
//                 btnn.addEventListener('click',function(){
//                 previous_operand_text.textContent=''
//                 current_operand_text.textContent=''
//                 button_operation.textContent=''
//                 addNum()
//                 // current_operand_text.textContent=btnn.innerHTML
//                 })
//             })



    
            // if((btn.textContent =='+'||btn.textContent =='/'||btn.textContent =='*'||btn.textContent =='-') && 
            // (current_operand_text.textContent.includes('+')||current_operand_text.textContent.includes('/')
            // ||current_operand_text.textContent.includes('-')||current_operand_text.textContent.includes('*')||current_operand_text.textContent=='')){
            //     return;
            // }
            // current_operand_text.textContent+=btn.innerHTML
            // previous_operand_text.textContent=current_operand_text.textContent
            // current_operand_text.textContent=''
            // current_operation=btn.textContent

// if(op =='*'){
                //     result= num1*num2;
                // }
                // else if(op=='+'){
                //     result= num1+num2;
                // }
                // else if(op=='-'){
                //     result= num1-num2;
                // }
                // else {
                //     result= num1/num2;
                // }
                // current_operand_text.textContent=result




// current_operand= current_operand_text.textContent
//                 previous_operand= previous_operand_text.textContent.slice(0,-1)
//                 const num2= parseFloat(previous_operand)
//                 const num1=parseFloat(current_operand)
//                 const op=btn.innerHTML
//                 console.log(num1)
//                 console.log(op)
//                 console.log(num2)
                
//             switch(op){
//                 case '+':
//                     result= num1+num2;
//                 break
//                 case '-':
//                     result= num1-num2;
//                 break
//                 case '/':
//                     result= num1/num2;
//                 break
//                 case '*':
//                     result= num1*num2;
//                 break
//                 default:
//                     break
//             }
//                 console.log(result)
//             current_operand_text.textContent=result
//             current_operand=result