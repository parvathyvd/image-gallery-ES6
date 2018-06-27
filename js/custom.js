const current = document.getElementById('current');
const imgs  = document.querySelectorAll('.imgs img');
const opacity = 0.6;

//first imgs element opacity is zero

imgs[0].style.opacity = opacity;

// loop through the imgs nodelist
const imgsArray = imgs.forEach(img => img.addEventListener('click', getSrc))

function getSrc(e){
    current.src = e.target.src;
    imgs.forEach(img => (img.style.opacity = 1));
    current.classList.add('fade-in');
    setTimeout(()=> current.classList.remove('fade-in'),500);
    e.target.style.opacity = opacity;
}
