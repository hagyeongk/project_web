
const detailImg = document.querySelector('.detail_sheet>img')
const thum01 = document.querySelector('.thum01')
const thum02 = document.querySelector('.thum02')
const thum03 = document.querySelector('.thum03')
const thum04 = document.querySelector('.thum04')

thum01.addEventListener('mouseover',function(){
   detailImg.src = './images/airpod_detail_main01.jpg'
})

thum02.addEventListener('mouseover',function(){
    detailImg.src = './images/dtail02.jpg'
})

thum03.addEventListener('mouseover',function(){
    detailImg.src = './images/dtail03.jpg'
})

thum04.addEventListener('mouseover',function(){
    detailImg.src = './images/dtail04.jpg'
})


const reviewBox = document.querySelector('.review_box')


document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('.save').addEventListener('click', ()=>{
        let reviewBox = document.querySelector('.review_box')
        let review = document.createElement('div')
       review.setAttribute('class','re_create')
        reviewBox.appendChild(review)


        let reviewTxt = document.querySelector('.txt')
        let txtBox = document.createElement('span')
        txtBox.setAttribute('class', 'txt_box')
        let newTxt = document.createTextNode(reviewTxt.value)

        txtBox.appendChild(newTxt)
        review.appendChild(txtBox)


        let del = document.createElement('span')
        del.setAttribute('class', 'del')
        let delTxt = document.createTextNode('삭제')

        del.appendChild(delTxt)
        review.appendChild(del)

        let delBtn = document.querySelectorAll('.del')

        for(let i=0; i<delBtn.length; i++) {
            delBtn[i].addEventListener('click', function(){
                if(this.parentNode.parentNode){
                    this.parentNode.parentNode.removeChild(this.parentNode)
                }

            })
        }
        reviewTxt.value = null
    })


})
