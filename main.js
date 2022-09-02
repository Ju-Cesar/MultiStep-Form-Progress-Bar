let progressBar = document.querySelector('.progress');
let circles = document.querySelectorAll('.circle');
let nextBtn = document.querySelector('#nxt');
let prevBtn = document.querySelector('#prev');
let progressStep = 1 / (circles.length - 1);
let progressState = 0;
let indexOfActiveCircle = 0;

circles[indexOfActiveCircle].classList.add('active');

nextBtn.addEventListener('click',()=> {
    if(indexOfActiveCircle  < (circles.length - 1)) {
        prevBtn.disabled = false;
        incrementProgress();
        progressBar.style.width = `${progressState * 100}%`;
        circles[indexOfActiveCircle].classList.add('active')
        if(indexOfActiveCircle == (circles.length - 1)) {
            nextBtn.disabled = true;
        }
     } 
});
prevBtn.addEventListener('click',()=> {
    if(indexOfActiveCircle > 0) {
        nextBtn.disabled = false;
        circles[indexOfActiveCircle].classList.remove('active')
        decrementProgress();
        progressBar.style.width = `${progressState * 100}%`;
        circles[indexOfActiveCircle].classList.add('active')
        if(indexOfActiveCircle == 0) {
            prevBtn.disabled = true;
        }
    }
})
function incrementProgress() {
    indexOfActiveCircle++;
    progressState = progressStep * indexOfActiveCircle;
}
function decrementProgress() {
    indexOfActiveCircle--;
    progressState = progressStep * indexOfActiveCircle ;
}
