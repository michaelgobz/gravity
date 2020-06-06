import {randomIntFromRange,randomColor,distance } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listenes
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('click',(event) => {
 // init();
  //animate();
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
  function Ball (x, y, dx , dy , radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.dx = dx;
    this.radius = radius
    this.color = randomColor(colors);


    this.draw = function(){
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.color
      c.fill();
      c.closePath()
    }

    this.update = function() {
     if(this.y + this.radius >= canvas.height){
       this.dy = -this.dy * 0.99
     }else {
        this.dy += 1;
     }
     if(this.x + this.radius >= canvas.width ||
      this.x - this.radius <= 0){
        this.dx = -this.dx;
      }
      this.x += this.dx;
      this.y += this.dy; 
      this.draw()
    }
  }


// Implementation
var  ball;
var ballArray;
function init() {
// ball = new Ball(canvas.width/2 , canvas.heigth /2 , 30 , 'blue');
ballArray =[]
  for (let i = 0; i < 400; i++) {
    var x =randomIntFromRange(0,canvas.width);
    var y = randomIntFromRange(0,canvas.height);
    var dx = randomIntFromRange(-1,2);
    var dy = randomIntFromRange(-1,2);
    var radius =randomIntFromRange(10,40);
    ballArray.push( new Ball(x , y, dx ,dy ,radius));
  }
  
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height);
  for(var i =0; i<ballArray.length; i++ ){
    // do smth
    ballArray[i].update();
    console.log('you have called me ')
  }

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })
}

init();
animate();