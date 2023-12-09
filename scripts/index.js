import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const data = {
  nodes: [
    {id: 'Design', group: 1, color: 'black', page: 'about.html'},
    {id: 'Research', group: 2, color: 'black', page: 'about.html'},
    {id: 'Computer Science', group: 3, color: 'black', page: 'about.html'},
    {id: 'Photography', group: 4, color: 'black', page: 'about.html'},
    {id: 'Adventure', group: 4, color: 'black', page: 'about.html'},
    {id: 'About', group: 4, color: 'black', page: 'about.html'},
    {id: '', group: 0, color: 'black', page: 'about.html'}
  ],
  links: [
    {source: '', target: 'Design'},
    {source: '', target: 'Research'},
    {source: '', target: 'Computer Science'},
    {source: '', target: 'Photography'},
    {source: '', target: 'About'},
    {source: '', target: 'Adventure'},

  ]
}

// Copyright 2021-2023 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/force-directed-graph
function ForceGraph({
  nodes, // an iterable of node objects (typically [{id}, …])
  links // an iterable of link objects (typically [{source, target}, …])
}, {
  nodeId = d => d.id, // given d in nodes, returns a unique identifier (string)
  nodeGroup, // given d in nodes, returns an (ordinal) value for color
  nodeGroups, // an array of ordinal values representing the node groups
  nodeTitle, // given d in nodes, a title string
  nodeFill = "currentColor", // node stroke fill (if not using a group color encoding)
  nodeStroke = "#fff", // node stroke color
  nodeStrokeWidth = 1.5, // node stroke width, in pixels
  nodeStrokeOpacity = 1, // node stroke opacity
  nodeRadius = 5, // node radius, in pixels
  nodeStrength,
  linkSource = ({source}) => source, // given d in links, returns a node identifier string
  linkTarget = ({target}) => target, // given d in links, returns a node identifier string
  linkStroke = "#000000", // link stroke color
  linkStrokeOpacity = 0.6, // link stroke opacity
  linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
  linkStrokeLinecap = "round", // link stroke linecap
  linkStrength,
  colors = d3.schemeTableau10, // an array of color strings, for the node groups
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
  invalidation // when this promise resolves, stop the simulation
} = {}) {
  // Compute values.
  const N = d3.map(nodes, nodeId).map(intern);
  const LS = d3.map(links, linkSource).map(intern);
  const LT = d3.map(links, linkTarget).map(intern);
  if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
  const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
  const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
  const W = typeof linkStrokeWidth !== "function" ? null : d3.map(links, linkStrokeWidth);
  const L = typeof linkStroke !== "function" ? null : d3.map(links, linkStroke);

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = d3.map(nodes, (_, i) => ({id: N[i]}));
  links = d3.map(links, (_, i) => ({source: LS[i], target: LT[i]}));

  // Compute default domains.
  if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

  // Construct the scales.
  const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({index: i}) => N[i])
    .distance(200);

  const simulation = d3.forceSimulation(nodes)
      .force("link", forceLink)
      .force("charge", d3.forceManyBody().strength(-550))
      .force("center", d3.forceCenter(0, 0))
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  const link = svg.append("g")
      .attr("stroke", typeof linkStroke !== "function" ? linkStroke : null)
      .attr("stroke-opacity", linkStrokeOpacity)
      .attr("stroke-width", typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null)
      .attr("stroke-linecap", linkStrokeLinecap)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg
    .selectAll("rect")
    .data(nodes)
    .enter()
    .append("g")
    .attr('class', 'node')
      .append("rect")
        .attr("fill", "transparent")
        .attr("width", 100)
        .attr("height", 20)
        .attr('class', 'node')
    
    const labels = svg.selectAll(".node")
    .append('a')
      .attr('class', 'nodeText')
      .attr('href', (d) => `${String(d.id).toLowerCase()}.html`)
    .append('text')
      .attr("width", 40)
      .attr("height", 20)
      .attr("font-size", "1.3em")
      .attr("color", "black")
      .text((d) => d.id)
      // .attr('href', d => d.page)
      .call(drag(simulation))


  if (invalidation != null) invalidation.then(() => simulation.stop());

  function intern(value) {
    return value !== null && typeof value === "object" ? value.valueOf() : value;
  }

  function ticked() {
    link
      .attr("x1", d => d.source.x + 20)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x + 50)
      .attr("y2", d => d.target.y);

    node
      .attr("x", d => d.x)
      .attr("y", d => d.y);

    labels 
      .attr("x", d => d.x)
      .attr("y", d => d.y)
  }

  function drag(simulation) {    
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return Object.assign(svg.node(), {scales: {color}});
}

const chart = ForceGraph(data, {
  nodeId: d => d.id,
  nodeGroup: d => d.group,
  nodeTitle: d => d.id,
  width: document.getElementsByTagName('html')[0].clientWidth,
  height: document.getElementsByTagName('html')[0].clientHeight,
})

document.getElementById('graph').append(chart)
