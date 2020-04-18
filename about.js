var svg = d3.select("body").append("svg")
.attr("width", window.innerWidth - 50)
.attr("height", 600);

// Red Square
svg.append("rect")
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
svg.append("rect")
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
svg.append("rect")
.attr("x", -600)
.attr("y", 500)
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
svg.append("rect")
.attr("x", window.innerWidth)
.attr("y", 485)
.attr("width", 500)
.attr("height", 20)
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
