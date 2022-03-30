"use strict";

const gnbA = document.querySelectorAll('.gnb>ul>li>a');
const gnbLi = document.querySelectorAll('.gnb>ul>li');
const gnbUl = document.querySelector('.gnb>ul');

// gnbA[0].addEventListener('click',(e)=>{

//     console.log(e.type)
// });
// gnbLi[0].addEventListener('click',(e)=>{

//     console.log(e.type)
// });

// gnbLi.forEach((el)=>{
//   el.addEventListener('click',(e)=>{
//       console.log(event)
//       console.log(event.type)
//       console.log(`target ->`, event.target)
//       console.log(`target ->`, event.currentTarget)
//   })
// })

gnbUl.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.type)

    const eCTarget =e.currentTarget;
    const eTarget =e.target;

    gnbLi.forEach((el,idx) =>{
        //클릭 -> 타겟이 li , 같으면 실행 
        if(el===eTarget){
            console.log(`idx1 -> ${idx}`)
        }else{
            console.log(`idx2 -> ${idx}`)
        }
    });
});