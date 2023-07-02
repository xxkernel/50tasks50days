panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        RemoveActive();
        panel.classList.add('active');
    })
})

function RemoveActive(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}