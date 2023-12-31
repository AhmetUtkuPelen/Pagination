// ! DEĞİŞKENLERİ SEÇ ! \\



document.addEventListener('DOMContentLoaded',function(){

    const pages = document.querySelectorAll('.page')

    const buttons = document.querySelectorAll('.num_btn')

    const buttonsContainer = document.querySelector('.num_btns')

    const indicator = document.querySelector('.active_indicator')

    const prevButton = document.querySelector('#prevPage')

    const nextButton = document.querySelector('#nextPage')

    const hide = document.querySelectorAll('.none')



    let currentpage = 0


// ! FONKSİYON TANIM ! \\


    function showPage(pageNumber){

        pages.forEach((page,index)=>{

            if(index===pageNumber){

                page.style.display ='block'
            }else{
            page.style.display ='none'
            }

        })


        buttons.forEach((btn,index)=>{

            if(index===pageNumber){

                setTimeout(()=>
                
                    btn.classList.add('num_btn--active'),250)

            }else{

                setTimeout(()=>{

                    btn.classList.remove('num_btn--active',250)

                })

            }

        })


        indicator.style.transform = 'translateX(${pageNumber * 4 }rem)'

    }



    // ! BUTON FONKSİYONUNU TANIT ! \\



    function updateButtons(){

        prevButton.disabled = currentPage === 0

        nextButton.disabled = currentPage === pages.length - 1

    }

    prevButton.addEventListener('click',function(){

        if(currentpage > 0 ){

            currentPage--

            showPage(currentPage)

            updateButtons()

        }

    })

    nextButton.addEventListener('click',function(){

        if(currentpage < pages.length - 1 ){

            currentPage++

            showPage(currentPage)

            updateButtons()

        }

    })

    buttonsContainer.addEventListener('click',function(e){

        const clicked = e.target

        if(!clicked.classList.contains('num_btn'))
        
        return


        const i = Number(clicked.textContent) - 1


        currentPage = i


        showPage(i)


        updateButtons()


    })



    showPage(currentPage)



    updateButtons()




})



