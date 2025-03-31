let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators ul');  
let dots = indicator.querySelectorAll('li');  
let numberIndicator = document.querySelector('.indicators .number'); 
let list = container.querySelector('.list'); 


let active = 0;
let lastPosition = items.length - 1; 

nextButton.onclick = () => {
    
    if (list) list.style.setProperty('--calculation', 1); modificar

    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active');

    active = active + 1 > lastPosition ? 0 : active + 1;  
    items[active].classList.add("active");

    let dotsOld = indicator.querySelector('li.active');
    if (dotsOld) dotsOld.classList.remove('active');  
    dots[active].classList.add('active');

    if (numberIndicator) numberIndicator.innerHTML = String(active + 1).padStart(2, '0'); 
};

prevButton.onclick = () => {
    if (list) list.style.setProperty('--calculation', -1);

    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active');

    active = active - 1 < 0 ? lastPosition : active - 1;
    items[active].classList.add("active");

    let dotsOld = indicator.querySelector('li.active');
    if (dotsOld) dotsOld.classList.remove('active');  
    dots[active].classList.add('active');

    if (numberIndicator) numberIndicator.innerHTML = String(active + 1).padStart(2, '0');  
};
