var width = 250;
var height = 250;

var arc_colors = ["#ffb7b2", "#ffdac1", "#e2f0cb", "#b5ead7"]
var inner_radius = 60
var radius_width = 10

var con4Svg = d3.select("div.conArc").append("svg")
    .attr("width", width)
    .attr("height", height) 
    .attr("class", "contactArc") 
    .attr("class", "contactText")  
    .append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

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

con4Svg.selectAll("path").data(data).enter()
      .append("path")
      .style("fill", function(d){ return d.fill })
      .attr("d", arc);

con4Svg.append("text")
      .attr("x", -75)
      .attr("y", 20)
      .attr("class", "conText")
      .attr("fill", "black")
      .attr("opacity", 0.7)
      .text("Instagram");

d3.interval(function() {
  con4Svg.selectAll("path").transition()
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
};

con4Svg.on("click", function() { 
  window.open("https://www.instagram.com/mattblancofilm"); 
});

con4Svg.on("mouseover", function() {
  con4Svg.attr("opacity", 0.5);
});

con4Svg.on("mouseout", function() {
  con4Svg.attr("opacity", 1);
});