const windowInnerWidth = window.innerWidth;
const brandsBlock = document.getElementById('brandsBlock');

function resizeBrandsBlock(){
    let showMoreButton = document.querySelector('#showMore');
    showMoreButton.addEventListener('click',function (e){
        e.currentTarget.classList.toggle('read-more-button--show');
        brandsBlock.classList.toggle('brands--show');
    })
}
if (windowInnerWidth < 768){
    new Swiper('.brands');
} else {
    resizeBrandsBlock();
}

