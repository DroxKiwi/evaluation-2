/*Make resizable div by Fredj Corentin*/
function makeResizableDiv(div) {
    const element = document.querySelector(div);
    const resizers = document.querySelectorAll(div + ' .resizer')
    const minimum_size = 100
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
    for (let i = 0;i < resizers.length; i++) {
      const currentResizer = resizers[i];
      currentResizer.addEventListener('mousedown', function(e) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
      })
      
      // this function assign the new position in link with the mouse position
      function resize(e) {
        if (currentResizer.classList.contains('side')) {
          const width = original_width + (e.pageX - original_mouse_x)
          console.log(width)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
        }
      }
      
      function stopResize() {
        window.removeEventListener('mousemove', resize)
      }
    }
  }
  
  makeResizableDiv('.resizable')





// This part of code is to animate the tutorial

let anim = true
let index = 0
let intervAnim

// This function load the animation and play it
function loadAnimationTuto(){
  var test = document.getElementById('tutoResizable')
  console.log(index)
  // if the user click next to the modal, the loop will also stop
  if (!test.classList.contains("show")){
    stopAnimationTuto()
  }
  const resizer = document.getElementById('resizer')
  index++
  if (anim){
    resizer.style.opacity = 1
    anim = false
  }
  else {
    resizer.style.opacity = 0.2
    anim = true
  }
}

// This function stop the animation when we click on the button 
function stopAnimationTuto(){
  const resizer = document.getElementById('resizer')
  clearInterval(intervAnim)
  intervAnim = null
  resizer.style.opacity = "100%"
  let btnModalTuto = document.getElementById("actionTutoResizable")
  console.log(btnModalTuto.classList)
  btnModalTuto.classList.remove("hidden")
}

// This function simulate the click of the Modal concerned after 5 seconds
function tutorialResizable() {
  var btn = document.getElementById('actionTutoResizable');
  btn.click()
  // we verify than any interval are already running
  if (!intervAnim){
    intervAnim = setInterval(loadAnimationTuto, 1000)
  }
}

// function called at the end of loading of the body from js.html
function popupTutorial(){
  setTimeout(() => {
    tutorialResizable();
  }, "5000")
}

