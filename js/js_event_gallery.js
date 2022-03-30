"use strict";

const bUL=document.querySelector('.bottom-con>ul');
const bLi=document.querySelectorAll('.bottom-con>ul>li');
const bLiimg=document.querySelectorAll('.bottom-con>ul>li img');
const topCon=document.querySelector('.top-con')

//모든 bLi forEach click 이벤트 바인딩

bLi.forEach((el,idx)=>{
    el.addEventListener('click',(e)=>{
        const eTarget=e.target;
        const eCTarget=e.currentTarget;

        bLiimg.forEach((el2,idx2)=>{
            if(eTarget===el2){

                const imgSrc = el2.getAttribute('src');
                const imgAlt = el2.getAttribute('alt');

                console.log(`idx ->`, idx);

                const topConImg =topCon.children[0];
                const topConImgTxt =topCon.children[1];

                topConImg.setAttribute('src',imgSrc)
                topConImgTxt.setAttribute('alt',imgAlt)

                topConImgTxt.innterText=imgAlt;
                
                el2.classList.add('on')
            }else{
                el2.classList.remove('on')
            }
        })
    })
})