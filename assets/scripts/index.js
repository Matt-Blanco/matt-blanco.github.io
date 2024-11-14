new p5((p) => {

  let t;
  let increaing = true;
  const maxFrames = 500;
  let xOffset = 150;
  let yOffset = 0;


  p.setup = () => {
    p.createCanvas(window.innerWidth - (window.innerWidth * .1), window.innerHeight - (window.innerHeight * .1));
    p.background(255);
    p.noFill();
    p.frameRate(24);
    t = 0;

    if (p.width < 800) {
      xOffset = 0
      yOffset = 100
    }

  }

  p.draw = () => {
    p.translate(p.width / 2, p.height / 2);

    radialPattern(p.color(255, 125, 0, 15), (p.width * .30), .02, .04)
    radialPattern(p.color(0, 50, 255, 10), (p.width * .10), .02, .01)

    if (t == maxFrames || t == -1) {
      increaing = !increaing
    }
    if (!increaing) {
      t--
    } else {
      t += 1;
    }

    // clear the background every 500 frames using mod (%) operator
    // if (p.frameCount % maxFrames == 0) {
    //   p.noLoop();
    // }
  }

  function radialPattern(color, maxRadius, xFactor, yFactor) {
    p.stroke(color);

    p.beginShape();
    for (let i = 0; i <= 500; i++) {
      let ang = p.map(i, 0, 500, 0, p.TWO_PI + 0.5);
      let rad = (maxRadius - t) * p.noise(i * xFactor, t * yFactor);

      let x, y;
      x = rad * p.cos(ang) + xOffset;
      y = rad * p.sin(ang) + yOffset;

      p.curveVertex(x, y);
    }
    p.endShape();
  }
}, document.getElementById('graph'))
