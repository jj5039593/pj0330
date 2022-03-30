"use strict";


const eventCon = document.querySelector('.event-con');
const eventConImg = document.querySelector('.event-con>img');
const eventConP = document.querySelector('.event-con>p');

const popUp = document.querySelector('.popup');

const popCon = document.querySelector('.pop-con');
// const popImg = document.querySelector('.pop-con>img');
// const popP = document.querySelector('.pop-con>P');

//.event-con img 를 클릭하면 콘솔에 img의 src, alt값 출력

//eventConImg 클릭하면 콘솔에 img의 src,alt값 -> popup-con img(src,alt) set
//eventConP 클릭하면 콘솔에 p의 innerText값 -> popup-con p.innerText set 

// eventConImg.addEventListener('click',(e)=>{
//     const eTarget=e.target;

//     const imgSrc = eTarget.getAttribute('src');
//     const imgAlt = eTarget.getAttribute('alt');

//     popCon.children[0].setAttribute('src',imgSrc);
//     popCon.children[0].setAttribute('alt',imgAlt);
// })

// //.event-con p 를 클릭하면 콘솔에 p의 text 출력

// eventConP.addEventListener('click',e=>{
//     const eTarget=e.target;
    
//     const pTxt = eTarget.innerText

//     popCon.children[1].innerText=pTxt
//     // eTarget.setAttribute(innerText,pTxt)
//     console.log(pTxt)
// // });

// event-con(parent) click event binding -> getting element of childern(img,p) 
// pop-con(parent) setting childern(img,p) 

eventCon.addEventListener('click',(e)=>{
    
    const eTarget=e.target
    const eCTarget=e.currentTarget
    const eCTargetChildren=eCTarget.children;

    // console.log(eCTargetChildren)
    // console.log(eCTargetChildren[0])
    // console.log(eCTargetChildren[1])

    const imgTag=eCTargetChildren[0];
    const pTag=eCTargetChildren[1];

    
     const imgSrc =  imgTag.getAttribute('src');
     const imgAlt =  imgTag.getAttribute('alt');
     const pTxt =pTag.innerText;

     console.log(imgAlt,imgSrc,pTxt)

     popCon.children[0].setAttribute('src',imgSrc)
     popCon.children[0].setAttribute('alt',imgAlt)
     popCon.children[1].innerText=pTxt

     popUp.style.display='flex'
     popUp.classList.add('.pop-animation')
});