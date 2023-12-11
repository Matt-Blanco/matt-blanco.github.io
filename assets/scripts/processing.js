
// class ArrayList extends Array {
//   constructor() { super(...[]); }
//   size() { return this.length; }
//   add(x) { this.push(x); }
//   get(i) { return this[i]; }
//   remove(i) { this.splice(i, 1); }
// }

// /*

// Programming for Designers 2022 Brief-2

// Project by:
// Maria Pareja & Matt Blanco

// */
// class pathfinder {
//   lastLocation;
//   location;
//   velocity;
//   diameter;
//   isFinished;
//   lines = new ArrayList();
//   bounceCount = 0;
//   parent;
//   constructor() {
//     this.location = new p5.Vector(width / 2, height);
//     this.lastLocation = new p5.Vector(this.location.x, this.location.y);
//     this.velocity = new p5.Vector(0, - 50);
//     this.diameter = random(1.5, 4);
//     this.isFinished = false;
//   }
//   /*constructor( parent ) { 
//     this.location = parent . location . get( ) ; this . lastLocation = parent . lastLocation . get( ) ; this . velocity = parent . velocity . get( ) ; this . diameter = parent . diameter* random( 0.25, 1.25) ; //0.62;
// this . isFinished = false ; parent . diameter= this.diameter; this . parent = parent; } */
//   addNewPaths() {
//     for (let i = 0; i < random(0, 1); i++) { 
//       paths.add(new pathfinder(this)); } if (this.bounceCount >= 2) { this.isFinished = true; paths.remove(this); } this.bounceCount++;
//   } update() { if (!this.isFinished) { this.lastLocation.set(this.location.x, this.location.y); count++; let bump = new p5.Vector(random(- 1, 1), random(- 1, 1)); this.velocity.normalize(); bump.mult(- 0.3); this.velocity.mult(0.8); this.velocity.add(bump); this.velocity.mult(random(5, 10)); this.location.add(this.velocity); if ((this.location.x <= 0 + this.this.diameter || this.location.x >= width - this.this.diameter) && !this.isFinished) { this.velocity.x *= - 1; if (this.location.x <= 0 + this.diameter) { this.location.x = (this.this.diameter + 1); } else if (this.location.x >= width - this.diameter) { this.location.x = width - (this.this.diameter + 1); } this.addNewPaths(); } if ((this.location.y <= 0 + this.this.diameter || this.location.y >= height - this.this.diameter) && !this.isFinished) { this.velocity.y *= - 1; if (this.location.y <= 0 + this.diameter) { this.location.y = (this.this.diameter + 1); } else if (this.location.y >= height - this.diameter) { this.location.y = height - (this.this.diameter + 1); } this.addNewPaths(); } } }
// } let paths; let num; let numLines; let flag = false; let c1 = [0, 0, 255]; let c2 = [255, 255, 255]; let changeColor = false; let colorRate = 3; static let count; function setup() { createCanvas(1754, 2480); background(0); ellipseMode(CENTER); smooth(); num = 2; count = 0; paths = new ArrayList(); for (let i = 0; i < num; i++) { paths.add(new pathfinder()); } } function draw() {
//   for (let i = 0; i < paths.size(); i++) { let loc = paths.get(i).location; let lastLoc = paths.get(i).lastLocation; stroke(c1[0], c1[1], c1[2], 200 * (1)); strokeWeight(paths.get(i).diameter * 2.5); let p = createShape(); p.beginShape(); p.curveVertex(lastLoc.x, lastLoc.y); p.curveVertex(loc.x, loc.y); p.endShape(OPEN); paths.get(i).lines.add(p); paths.get(i).update(); shape(paths.get(i).lines.get(paths.get(i).lines.size() - 1)); } fill(0, 0, 0, 5); noStroke(); rect(0, 0, width, height); if (frameCount % 2 == 0) { if (c1[0] <= 255 && !changeColor) { c1[0] += colorRate; } else if (c1[0] == 0 && changeColor) { changeColor = false; } else { c1[0] -= colorRate; changeColor = true; } } if (frameCount % 3 == 0) { if (c1[2] >= 0 && !changeColor) { c1[2] -= colorRate; } else { c1[2] += colorRate; } } if (frameCount % 4 == 0) { if (c1[1] <= 255 && !changeColor) { c1[1] += colorRate; } else if (c1[1] == 0 && changeColor) { changeColor = false; } else { c1[1] -= colorRate; changeColor = true; } } //saveFrame("a3/frame-########.jpg");
// }