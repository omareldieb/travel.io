const buttons = document.querySelectorAll('a');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(evt){
        evt.preventDefault(); 
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: 'smooth'})
    })
}