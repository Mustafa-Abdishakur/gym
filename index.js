
document.querySelector('.dots').addEventListener('click', e => {
    if(e.target.className.includes('dot-1')) {
        document.querySelector('.text-container').style.animationPlayState = 'paused';
        document.querySelector('.text-container').style.right = '0%';
    }
})

  
  