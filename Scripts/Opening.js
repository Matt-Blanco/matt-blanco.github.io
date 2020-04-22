var width = window.innerWidth
var height = window.innerHeight + 10;

var arc_colors = ["#ffb7b2", "#ffdac1", "#e2f0cb", "#b5ead7"]
var inner_radius = 240
var radius_width = 20

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "arcs")  
    .append("g").attr("transform", "translate(" + width / 2 + "," + (height / 2 - 40)+ ")")

var arc = d3.arc()

var data = []
for (var k = 0; k < 4; k++){

  var score = 0.7 * Math.random()
  var startAngle = Math.random() * 2 * Math.PI
  var endAngle = startAngle + score * 2 * Math.PI
  data.push({
          startAngle: startAngle,
          endAngle: endAngle,
          innerRadius: inner_radius + k * radius_width,
          outerRadius: inner_radius + (k + 1) * radius_width,
          fill: arc_colors[k]
        })
}

svg.selectAll("path").data(data).enter()
      .append("path")
      .style("fill", function(d){ return d.fill })
      .attr("d", arc);

svg.append("text")
    .attr("x", -135)
    .attr("y", 0)
    .attr("class", "arcText")
    .attr("fill", "black")
    .attr("opacity", 0.7)
    .text("Hey, I'm Matt")

d3.interval(function() {
  svg.selectAll("path").transition()
      .duration(3000)
      .attrTween("d", function(d){ return arcTween(d, 0.7 * Math.random()) })
}, 3000, -3000)

function arcTween(d, new_score) {
    var new_startAngle = Math.random() * 2 * Math.PI
    var new_endAngle = new_startAngle + new_score * 2 * Math.PI
    var interpolate_start = d3.interpolate(d.startAngle, new_startAngle)
    var interpolate_end = d3.interpolate(d.endAngle, new_endAngle)
    return function(t) {
      d.startAngle = interpolate_start(t)
      d.endAngle = interpolate_end(t)
      return arc(d)
    }
}

$(document).ready(function(){ 
   $(window).scroll(function(){ 
       $('.arcs').css("opacity", 1 - $(window).scrollTop() / 300) 
   }) 
});