// rotation image

var images = document.querySelectorAll('.humberger .img-fluid')

for (i = 0; i < images.length; i++) {
    image = images[i];  

    var event = function() { 
    this.classList.add('rotation-img')

    }

    image.addEventListener('mouseover', event)

    var event2 = function(){
        this.classList.remove('rotation-img')
    }

    image.addEventListener('mouseout', event2)
    
}


// rotation btn

var btns = document.querySelectorAll('.btn')

for (i = 0; i < btns.length; i++) {
    btn = btns[i];

    event = function(){
        this.classList.add('rotation-btn') 
    }

    btn.addEventListener('mouseover', event)

    event2 = function(){
        this.classList.remove('rotation-btn')
    }

    btn.addEventListener('mouseout', event2)

}


