let view1 = document.querySelector('.span-1')
let viewgit1 = document.querySelector('.span-2')
viewgit1.addEventListener('mouseover', () => {
    view1.style.display = "block";
    viewgit1.style.display = 'none';
})   
        
view1.addEventListener('mouseout', () => {
    viewgit1.style.display = 'block';
    view1.style.display = 'none';
})

let view2 = document.querySelector('.span-3')
let viewgit2 = document.querySelector('.span-4')

viewgit2.addEventListener('mouseover', () => {
    view2.style.display = "block";
    viewgit2.style.display = 'none';
})   
        
view2.addEventListener('mouseout', () => {
    viewgit2.style.display = 'block';
    view2.style.display = 'none';
})

let view3 = document.querySelector('.span-5')
let viewgit3 = document.querySelector('.span-6')

viewgit3.addEventListener('mouseover', () => {
    view3.style.display = "block";
    viewgit3.style.display = 'none';
})   
        
view3.addEventListener('mouseout', () => {
    viewgit3.style.display = 'block';
    view3.style.display = 'none';
})

let view4 = document.querySelector('.span-7')
let viewgit4 = document.querySelector('.span-8')

viewgit4.addEventListener('mouseover', () => {
    view4.style.display = "block";
    viewgit4.style.display = 'none';
})   
        
view4.addEventListener('mouseout', () => {
    viewgit4.style.display = 'block';
    view4.style.display = 'none';
})

let menu = document.querySelector('ul');

function toggleClass() {

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    }
    else {
        menu.style.display = 'none'
    }
    
}

$(document).ready(function() {
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize >= 760) {
            // menu.style.display = 'block';
            menu.style.display = 'flex'
        }else {
            menu.style.display = 'none'

        }

    }

    checkWidth();
    $(window).resize(checkWidth);
})


