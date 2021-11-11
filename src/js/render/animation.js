var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 100;
var width = canvas.width;
var height = canvas.height;
var particles = [];
var colors = ["#029DAF", "#E5D599", "#FFC219", "#F07C19", "#E32551"];

function initParticles() {
  for (var i = 0; i < 200; i++) {
    setTimeout(createParticle, 2 * i, i);
  }
}

function createParticle(i) {
  // initial position in middle of canvas
  var x = width * 0.5;
  var y = height * 0.9;
  // randomize the vx and vy a little - but we still want them flying 'up' and 'out'
  var vx = -5 + Math.random() * 10;
  var vy = Math.random() - 10;
  // randomize size and opacity a little & pick a color from our color palette
  var size = 5 + Math.random() * 6;
  var color = colors[i % colors.length];
  var opacity = 0.5 + Math.random() * 0.5;
  var p = new Particle(x, y, vx, vy, size, color, opacity);
  particles.push(p);
}

function Particle(x, y, vx, vy, size, color, opacity) {
  this.update = function () {
    x += vx;
    y += vy;
  };

  this.draw = function () {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  };
}

function render() {
  ctx.clearRect(0, 0, width, height);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(render);
}

// init
export function winnerCelebrate() {
  initParticles();
  render();
}
