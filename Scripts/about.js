var aboutSvg = d3.select(".container").append("svg")
.attr("width", "100%")
.attr("height", 1000)
.attr("id", "aboutSvg");

// Red Square
aboutSvg.append("rect")
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
aboutSvg.append("rect")
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
aboutSvg.append("rect")
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
aboutSvg.append("rect")
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
aboutSvg.append("rect")
.attr("x", -800)
.attr("y", 730)
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
aboutSvg.append("rect")
.attr("x", -500)
.attr("y", 745)
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


aboutSvg.append("rect")
.attr("x", window.innerWidth)
.attr("y", 900)
.attr("width", 500)
.attr("height", 25)
.attr("fill", "#ffb7b2")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x",  window.innerWidth)
  .transition()
  .duration(11000)
  .attr("x", -500)
  .on("end", repeat)
});

// Darker Green Square
aboutSvg.append("rect")
.attr("x", -500)
.attr("y", 920)
.attr("width", 500)
.attr("height", 25)
.attr("fill", "#b5ead7")
.transition()
.on("start", function repeat() {
  d3.select(this)
  .attr("x",  -500)
  .transition()
  .duration(8500)
  .attr("x", window.innerWidth)
  .on("end", repeat)
});