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

    radialPattern(p.color(240, 81, 100, 75), (p.width * .30), .02, .04)
    radialPattern(p.color(255, 219, 63, 80), (p.width * .10), .02, .01)

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

    let points = [];
    
    // Generate control points
    for (let i = 0; i <= 500; i++) {
      let ang = p.map(i, 0, 500, 0, p.TWO_PI + .01);
      let rad = (maxRadius - t) * p.noise(i * xFactor, t * yFactor);
      
      let x = rad * p.cos(ang) + xOffset;
      let y = rad * p.sin(ang) + yOffset;
      
      points.push({x, y});
    }

    // Add the first point at the end to ensure seamless closing
    points.push(points[0]);

    // Interpolate between control points using curvePoint
    for (let i = 0; i < points.length - 1; i++) {
      let p0 = points[i === 0 ? points.length - 2 : i - 1];
      let p1 = points[i];
      let p2 = points[i + 1];
      let p3 = points[i + 2] || points[1];

      // Generate smooth curve segments with more resolution
      for (let t_curve = 0; t_curve <= 1; t_curve += 0.1) {
        let x = p.curvePoint(p0.x, p1.x, p2.x, p3.x, t_curve);
        let y = p.curvePoint(p0.y, p1.y, p2.y, p3.y, t_curve);
        p.vertex(x, y);
      }
    }

    p.endShape(p.CLOSE);
  }

}, document.getElementById('graph'))
