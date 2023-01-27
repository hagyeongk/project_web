import {bestList, bestHover, phoneMain, mainHover} from "./data.js"


const bestBox = document.querySelector('.sub')
const mainBox = document.querySelector('.main')

for(let i=0; i<bestList.length; i++){
    let bestDiv = document.createElement('div')
    
    let bestImg = document.createElement('img')
    bestImg.setAttribute('src', bestList[i].src)
    bestDiv.appendChild(bestImg)

    let bestName = document.createElement('p')
    let bestNameTxt = document.createTextNode(bestList[i].name)
    bestName.appendChild(bestNameTxt)
    bestDiv.appendChild(bestName)

    let bestPrice = document.createElement('span')
    let bestPriceTxt = document.createTextNode(bestList[i].price)
    bestPrice.appendChild(bestPriceTxt)
    bestDiv.appendChild(bestPrice)

    let bestEnd = document.createElement('span')
    bestEnd.classList.add('price_end')
    let bestEndTxt = document.createTextNode(bestList[i].end)
    bestEnd.appendChild(bestEndTxt)
    bestDiv.appendChild(bestEnd)

    bestBox.appendChild(bestDiv)

    bestImg.addEventListener('mouseover',function(){
        bestImg.src= bestHover[i].src
    })
    bestImg.addEventListener('mouseout',function(){
        bestImg.src = bestList[i].src
    })
    bestImg.addEventListener('click',function detail (){
        window.location.assign("http://127.0.0.1:5500/detail.html")
    })

    let cheapList = document.querySelector('.cheap')
    cheapList.addEventListener('click', function(){
    bestList.sort(function(a,b){
        return a.price - b.price;
        
    });

    
})

}

for(let i=0; i<phoneMain.length; i++){
    let mainDiv = document.createElement('div')

    let mainImg = document.createElement('img')
    mainImg.setAttribute('src', phoneMain[i].src)
    mainDiv.appendChild(mainImg)

    let mainName = document.createElement('p')
    let mainNameTxt = document.createTextNode(phoneMain[i].name)
    mainName.appendChild(mainNameTxt)
    mainDiv.appendChild(mainName)

    let mainPrice = document.createElement('s')
    let mainPriceTxt = document.createTextNode(phoneMain[i].price)
    mainPrice.appendChild(mainPriceTxt)
    mainDiv.appendChild(mainPrice)

    let mainSale = document.createElement('span')
    mainSale.classList.add('sale')
    let mainSaleTxt = document.createTextNode(phoneMain[i].sale)
    mainSale.appendChild(mainSaleTxt)
    mainDiv.appendChild(mainSale)

    let realPrice = document.createElement('p')
    realPrice.classList.add('real')
    let realPriceTxt = document.createTextNode(phoneMain[i].realprice)
    realPrice.appendChild(realPriceTxt)
    mainDiv.appendChild(realPrice)




    mainBox.appendChild(mainDiv)

    mainImg.addEventListener('mouseover',function(){
        mainImg.src=mainHover[i].src
    })
    mainImg.addEventListener('mouseout',function(){
        mainImg.src=phoneMain[i].src
    })
    mainImg.addEventListener('click',function detail (){
        window.location.assign("http://127.0.0.1:5500/detail.html")
    })

}
   






