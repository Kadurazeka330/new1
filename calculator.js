window.addEventListener('DOMContentLoaded', () =>{

 let calculatorSlider = document.querySelector('.calculator__slider')
 let div =document.querySelector('.div');
 let weight ;
 let height;
 let age;
 let activity;
 let sex;
 let bmr;
 let p = 0;

 class Calculator{
     weigh;
     height;
     age;

    lookNextSlider(selector){
        if(p ==1600){
          p =0;
          return   selector.closest('.div').querySelector('.calculator__inner').style.right = p +'px';
       }
         p +=800;
         selector.closest('.div').querySelector('.calculator__inner').style.right = p +'px';
     }

     lookPrevSlider(selector){
        if(p ==0){
        p =1600;
        return   selector.closest('.div').querySelector('.calculator__inner').style.right = p +'px'
    } else
      {  
        p -=800;
        return   selector.closest('.div').querySelector('.calculator__inner').style.right = p +'px'
      }
     }

    inputCalc(selector){
        selector.closest('.div').querySelectorAll('.input__calc').forEach((input)=>{
            if(input.getAttribute('id')==='weight'){this.weight = +input.value}
            if(input.getAttribute('id')==='height'){this.height = +input.value}
            if(input.getAttribute('id')==='age'){this.age = +input.value}
        }) 
       }
   
    calc(selector, activity, sex){
               if(!sex || !this.weight || !this.height || !this.age || !activity){
                selector.closest('.div').querySelector('.input__resul').textContent="=====";
                   return;
               }
           
               if(sex === "man"){
                  bmr = (88.36 +(13.4 * this.weight) + (4.8 * this.height) - (5.7 * this.age))*activity;
                  selector.closest('.div').querySelector('.input__resul').textContent= bmr;
           }
               if(sex==="woman"){
                   bmr= (447.6 + (9.2 * this.weight) + (3.1 * this.height) - (4.3 *this.age))*activity;
                   selector.closest('.div').querySelector('.input__resul').textContent= bmr;
               }
       }
    render(parent){
       const element = document.createElement('section');
       element.classList.add('calculator');
       element.innerHTML = `<div class="calculator__title">
       Бажаєте розрахувать добову калорійність
   </div>
   <div class="calculator__slider">
       <div class="calculator__inner">
           <div class="slider-1">
               <div class="sex__inner">
                   <div class="sex__title">
                       Вкажіть ваш пол
                   </div>
                   <div data-sex="man" id="man">Чоловік</div>
                   <div data-sex="woman" id="woman">Жінка</div>
               </div>
               <div class="body__inner">
                   <div class="body__title">
                       Ваша конституція тіла
                   </div>
                  <input class="input__calc" id="weight" type="text" placeholder="Ваша вага, кг">
                  <input class="input__calc" id="height" type="text" placeholder="Ваш зріст">
                  <input class="input__calc" id="age" type="text" placeholder="Ваша вік">
               </div>
           </div>
           <div class="slider-2">
               <div class="activity__inner">
                   <div class="activity__title">
                       Ваша активність
                   </div>
                  <div data-activity="1.2">Мінімальний рівень активності</div>
                  <div data-activity="1.375">Низький рівень активності</div>
                  <div  data-activity="1.55">Середній рівень активності</div>
                  <div  data-activity="1.725">Високий рівень</div>
                  <div  data-activity="1.9">Дуже високий</div>
               </div>
               <div class="purpose__inner">
                   <div class="purpose__title">
                       Ваша ціл
                   </div>
                  <div>Схуднути</div>
                  <div>Набрати</div>
                  <div>Підтримувати</div>
               </div>
           </div>
           <div class="slider-3">
               <div class="resul__title">
                   Ваша добова норма калорій
               </div>
               <div class="input__resul"></div>
           </div>
       </div>
   </div>
   <button class="calc__prev">Назад</button>
   <button class="calc__next" >Вперед</button>`;
        document.querySelector(parent).appendChild(element)
   }  
 }

const calculator = new Calculator;
calculator.render(".div");
div.addEventListener('click', (Event)=>{
    if(Event.target.classList.contains('calc__next')){
        calculator.lookNextSlider(Event.target);
    }else{
        if(Event.target.classList.contains('calc__prev')){
            calculator.lookPrevSlider(Event.target);
        }
    }
    if(Event.target.getAttribute('data-sex')){
        sex = Event.target.getAttribute('data-sex');
       calculator.inputCalc(Event.target);
       calculator.calc(Event.target, sex);
    }else{
         activity = Event.target.getAttribute('data-activity');
         calculator.inputCalc(Event.target);
         calculator.calc(Event.target, activity);
    }
});

})