var years = [1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977,
  1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1989, 1990, 1991, 1992, 1993,
  1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

var programmingLanguages = [
  {
    name: "Fortran", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [56.74, 51.11, 40.27, 29.33, 24.85, 24.51, 24.32, 24.76, 24.31, 24.63, 25.25, 25.16,
      24.29, 24.37, 24.63, 23.52, 22.51, 21.75, 21.29, 20.75, 19.96, 18.9, 18.36, 17.36, 15.26, 13.22, 13.33,
      12.66, 12.08, 10.67, 8.73, 7.61, 6.07, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "COBOL", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [13.19, 12, 9.92, 7.94, 6.73, 6.82, 7.28, 8.01, 10.05, 11.33, 12.51, 12.18,
      12.14, 11.65, 12.65, 12.92, 12.41, 11.28, 9.31, 8.12, 8.03, 8.14, 8.05, 6.97, 5.48, 4.21, 3.37,
      3.36, 3.63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "Algol", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [10.21, 9.64, 8.11, 6.45, 5.5, 4.55, 4.2, 4.12, 4.57, 5, 5.08, 4.72,
      3.92, 3.24, 2.61, 2.38, 1.84, 1.49, 1.36, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "Assembler", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [5.3, 4.97, 4.45, 4.44, 4.66, 4.92, 4.89, 4.4, 3.75, 3.83, 4.42, 4.81,
      4.88, 4.68, 4.82, 6.85, 9.4, 11.27, 12.49, 12.17, 10.78, 9.84, 9.01, 7.94, 7.64, 6.87, 6.47,
      5.91, 5.67, 5.83, 5.67, 5.76, 5.76, 4.95, 4.09, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "BASIC", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [2.1, 2.36, 2.77, 3.66, 3.86, 4.29, 5.08, 5.52, 5.64, 5.8, 5.81, 6.15,
      6.15, 7.71, 9.89, 13.39, 17.46, 20.24, 21.42, 20.58, 17.99, 15.22, 11.59, 9.2, 7.86, 7.67, 7.85,
      7.93, 8.07, 7.94, 7.85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "LISP", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [1.46, 1.39, 1.44, 1.9, 2.41, 3.57, 4.33, 5.04, 6.18, 6.67, 6.88, 7.08,
      7.67, 8.37, 8.89, 10.53, 12.53, 15.09, 19.22, 22.92, 22.95, 24.06, 19.39, 17.38, 14.15, 11.31, 9.16,
      7.44, 5.25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "APL", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [1.9, 4.13, 5, 5.06, 4.31, 4.08, 3.81, 3.58, 3.88, 4.33, 4.58, 4.47,
      4.47, 4.69, 4.31, 3.69, 4.44, 4.87, 5.21, 5.35, 4.69, 4.14, 3.88, 3.24, 2.72, 2.3, 2.03,
      2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "Pascal", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0.99, 1.72, 2.61, 4.05, 5.21, 7.01, 9.04,
      12.71, 15.86, 20.35, 26.85, 30.33, 33.78, 35.59, 35.89, 36.41, 35.7, 34.55, 30.99, 27.51, 24.37, 20.18,
      15.81, 12.64, 9.33, 7.65, 6.68, 5.74, 5.2, 4.38, 4, 3.65, 3.38, 3.17, 2.94, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "C", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.51, 3.63,
      5.23, 6.24, 7.95, 11.27, 15.75, 20.31, 25.53, 32.99, 37.37, 42.08, 47.8, 50.47, 52.73, 56.02, 62.63,
      70.73, 71.97, 67.06, 62, 55.24, 48.27, 43.5, 34.54, 26.9, 20.26, 16.64, 13.86, 12.4, 12.08, 12.43, 12.74, 11.87, 10.71, 9.27, 7.98,
      7.65, 7.29, 6.85, 6.39, 6.01, 5.76, 5.35, 5.02]
  },
  {
    name: "Ada", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 7.72, 15.58, 18.65, 22.96, 28.79, 35.37, 42.84, 45.14, 47, 41.08, 34.16, 28.51,
      18.42, 13.54, 8.78, 5.33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "C++", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1.48, 2.98, 4.75, 6.38, 8.25, 9.34, 10.52, 11.95, 12.83, 14.52, 16.5, 18.16,
      20.18, 20.49, 20.31, 19.26, 18.14, 17.11, 15.71, 14.14, 13.2, 12.23, 11.32, 11.16, 11.46, 11.6, 11.89, 12.12, 12.43, 12.39,
      11.7, 10.5, 9.38, 9, 8.57, 8.06, 7.55, 7.17, 6.89, 6.62]
  },
  {
    name: "Visual Basic", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.52, 3.27, 4.76, 5.92, 7.25, 8.55, 9.36, 10.16, 10.58, 10.64, 10.48, 10.21, 9.42, 8.66, 7.61,
      6.71, 6.29, 6.03, 5.72, 5.08, 4.46, 3.75, 3.05, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "Perl", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.01, 2.78, 4.29, 6.59, 8.21, 10.14, 11.32, 11.17, 10.46, 9.67, 8.58, 7.75, 6.77, 5.79, 5.07,
      4.43, 3.79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "Java", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.51, 8.6, 12.68, 16.48, 20.16, 23.9, 27.78, 31.63, 33.57, 34.75, 34.46, 34.1, 33.81,
      33.16, 32.56, 32.01, 31.23, 30.47, 29.37, 28.17, 26.79, 25.52, 24.38, 23.44, 22.39]
  },
  {
    name: "JavaScript", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6.24, 8.92, 11.84, 14.66, 17.26, 19.5, 21.37, 22.81, 23.45, 23.22, 22.6, 21.78,
      21.01, 20.39, 20.38, 20.63, 20.89, 21.39, 21.77, 22.2, 22.72, 22.98, 23.03, 23.18, 23]
  },
  {
    name: "Delphi", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.12, 5.89, 6.23, 6.03, 5.45, 4.81, 4.02, 3.49, 2.99, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "PHP", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6.02, 8.93, 12.53, 16.23, 19.94, 21.87, 22.99, 23.07, 22.64,
      21.84, 20.63, 18.98, 17.69, 16.37, 15.09, 13.56, 12.11, 10.74, 9.39, 8.52, 7.77, 7.19]
  },
  {
    name: "C#", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4.3, 5.24, 6.3, 7.04, 7.8, 8.36, 8.34,
      8.09, 8, 8.72, 9.59, 10.52, 11.15, 10.8, 10.23, 9.69, 9.16, 8.83, 8.62, 8.41]
  },
  {
    name: "Python", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.05, 3.54, 3.97, 4.59, 5.56, 6.35, 6.99, 7.78,
      8.76, 9.7, 10.9, 12, 12.78, 13.51, 14.45, 16.25, 19.21, 22.12, 23, 24.27]
  },
  {
    name: "Ruby", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.86, 3.35,
      4.43, 4.07, 4.09, 4.13, 4.17, 4.11, 3.9, 3.64, 3.36, 3.07, 2.9, 2.75, 0]
  },
  {
    name: "Matlab", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.83, 3.08,
      3.31, 3.49, 3.57, 3.54, 3.48, 3.41, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    name: "Objective C", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 3.66, 5.43, 7.01, 7.83, 7.72, 6.92, 5.99, 5.07, 4.36, 3.82, 3.47]
  },
  {
    name: "R", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 3.46, 3.98, 4.32, 4.52, 4.59, 4.48, 4.36]
  },
  {
    name: "Swift", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 3.54, 4.38, 4.55, 4.4, 4.1, 3.77, 3.76]
  },
  {
    name: "Kotlin", color: "#" + Math.floor(Math.random(2260) * 16777215).toString(16),
    ranks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.64]
  }
];

var index = 5;
var width = 1300;
var height = 416;

var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var xScale = d3.scaleLinear()
  .domain([years[0], years[5]])
  .range([400, 1050]);

var yScale = d3.scaleLinear()
  .domain([0, 60])
  .range([400, 50]);

var xAxis = svg.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(0, 400)`)
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(400,0)`)
  .call(d3.axisLeft().scale(yScale));

var paths = svg.selectAll("data")
  .data(programmingLanguages)
  .enter()
  .append("path")
  .attr("d", function (d) {
    var str = "M ";

    for (var i = index - 5; i < index + 1; i++) {
      str += xScale(years[i]) + " " + yScale(d.ranks[i]) + " ";
    }

    return str;
  })
  .attr("stroke-width", 3)
  .attr("stroke", function (d) {
    return d.color;
  })
  .attr("fill", "none")
  .attr("class", "data")
  .attr("opacity", function (d) {
    if (d.ranks[index] === 0) {
      return 0;
    }
    else {
      return 100;
    }
  });

var circles = svg.selectAll("circle")
  .data(programmingLanguages)
  .enter()
  .append("circle")
  .attr("cx", xScale(years[index]))
  .attr("cy", function (d) {
    return yScale(d.ranks[index])
  })
  .attr("r", 5)
  .attr("fill", function (d) {
    return d.color;
  })
  .attr("opacity", function (d) {
    if (d.ranks[index] === 0) {
      return 0;
    }
    else {
      return 100;
    }
  });

var dataText = svg.selectAll("dataText")
  .data(programmingLanguages)
  .enter()
  .append("text")
  .attr("fill", "white")
  .attr("class", "dataText")
  .text(function (d) {
    return d.name + ": " + d.ranks[index];
  })
  .attr("x", xScale(years[index]) + 15)
  .attr("y", function (d) {
    return yScale(d.ranks[index]);
  })
  .attr("opacity", function (d) {
    if (d.ranks[index] === 0) {
      return 0;
    }
    else {
      return 100;
    }
  });

d3.select("#add").on("click", function () {
  if (index <= 52) {
    if (index + 5 >= years.length) {
      index += 1;
    }
    else {
      index += 5;
    }
    transitionCanvas();
  }
});

d3.select("#sub").on("click", function () {
  if (index > 5) {
    if (index - 5 <= 5) {
      index -= 1;
    }
    else {
      index -= 5;
    }
    transitionCanvas();
  }
});

function transitionCanvas() {
  programmingLanguages.sort(function (a, b) { return a.ranks[index] - b.ranks[index] });
  xScale.domain([years[index - 5], years[index]])
  yScale.domain([0, findMax()])

  svg.selectAll(".data").transition()
    .duration(2000)
    .attr("d", function (d) {
      var str = "M ";

      for (var i = index - 5; i < index + 1; i++) {
        str += xScale(years[i]) + " " + yScale(d.ranks[i]) + " ";
      }

      return str;
    })
    .attr("opacity", function (d) {
      if (d.ranks[index] === 0) {
        return 0;
      }
      else {
        return 100;
      }
    });

  svg.selectAll("circle").transition()
    .duration(2000)
    .attr("cx", xScale(years[index]))
    .attr("cy", function (d) {
      return yScale(d.ranks[index])
    })
    .attr("opacity", function (d) {
      if (d.ranks[index] === 0) {
        return 0;
      }
      else {
        return 100;
      }
    })

  svg.selectAll(".dataText").transition()
    .duration(2000)
    .text(function (d) {
      return d.name + ": " + d.ranks[index];
    })
    .attr("y", function (d) {
      return yScale(d.ranks[index]);
    })
    .attr("opacity", function (d) {
      if (d.ranks[index] === 0) {
        return 0;
      }
      else {
        return 100;
      }
    });


  xAxis.transition()
    .duration(2000)
    .call(d3.axisBottom().scale(xScale));
  yAxis.transition()
    .duration(2000)
    .call(d3.axisLeft().scale(yScale));
}

function findMax() {
  var max = 0;
  for (var i = 0; i < programmingLanguages.length; i++) {
    for (var j = index - 5; j < index + 1; j++) {
      if (programmingLanguages[i].ranks[j] > max) {
        max = programmingLanguages[i].ranks[j];
      }
    }
  }
  return max + 5;
}