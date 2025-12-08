const display=document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let currentExpression='';

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const value = button.textContent;
        if(value === 'clear'){
         currentExpression ='';
            display.value=currentExpression;  
        }
        else if(value === '='){
            try{
                const result=eval(currentExpression);
                display.value=result;
                currentExpression=String(result);
            }
            catch{
                display.value='Error';
                currentExpression='';
            }
        }
        else{
            currentExpression+=value;
            display.value=currentExpression;
        }
    });
});