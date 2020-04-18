var test = d3.select("body").append("svg")
.attr("width", window.innerWidth)
.attr("height", 750);

// Red Square
test.append("rect")
.attr("x", -600)
.attr("y", 10)
.attr("width", 500)
.attr("height", 20)
.attr("fill", "#ffb7b2")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x", -600)
  .transition()
  .duration(9000)
  .attr("x", window.innerWidth)
  .on("end", repeat)
});

// Orange Square
test.append("rect")
.attr("x", -800)
.attr("y", 0)
.attr("width", 300)
.attr("height", 20)
.attr("fill", "#ffdac1")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x", -800)
  .transition()
  .delay(500)
  .duration(8000)
  .attr("x", window.innerWidth)
  .on("end", repeat)
});

// Light Green Square
test.append("rect")
.attr("x", -600)
.attr("y", 320)
.attr("width", 500)
.attr("height", 20)
.attr("fill", "#e2f0cb")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x", -600)
  .transition()
  .duration(10000)
  .attr("x", window.innerWidth)
  .on("end", repeat)
});

// Darker Green Square
test.append("rect")
.attr("x", window.innerWidth)
.attr("y", 330)
.attr("width", 500)
.attr("height", 25)
.attr("fill", "#b5ead7")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x",  window.innerWidth)
  .transition()
  .duration(10000)
  .attr("x", -500)
  .on("end", repeat)
});


// Orange Square
test.append("rect")
.attr("x", -800)
.attr("y", 680)
.attr("width", 300)
.attr("height", 25)
.attr("fill", "#ffdac1")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x", -800)
  .transition()
  .duration(8500)
  .attr("x", window.innerWidth)
  .on("end", repeat)
});

// Light Green Square
test.append("rect")
.attr("x", -500)
.attr("y", 700)
.attr("width", 500)
.attr("height", 20)
.attr("fill", "#e2f0cb")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x", -600)
  .transition()
  .duration(9000)
  .attr("x", window.innerWidth)
  .on("end", repeat)
});