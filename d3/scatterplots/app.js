var width, height;
width = height = 500;
var padding = 30;
// d3.extent instead
// var yMax = d3.max(birthData2011, d => d.lifeExpectancy);
// var yMin = d3.min(birthData2011, d => d.lifeExpectancy);7

//scatter plot for life Expectancy vs birth/population

var yScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
  .range([height - padding, padding]);

var xScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.births / d.population))
  .range([padding, width - padding]);

var xAxis = d3
  .axisBottom(xScale)
  .tickSize(-height + 2 * padding)
  .tickSizeOuter(0);
var yAxis = d3
  .axisLeft(yScale)
  .tickSize(-width + 2 * padding)
  .tickSizeOuter(0);

//change color based on population density
var colorScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.population / d.area))
  .range(["lightblue", "darkblue"]);

//radius of circles based on absolute number of births
var radiusScale = d3
  .scaleLinear()
  .domain(d3.extent(birthData2011, d => d.births))
  .range([2, 40]);

d3.select("svg")
  .append("g")
  .attr("transform", "translate(0," + (height - padding) + ")")
  .call(xAxis);

d3.select("svg")
  .append("g")
  .attr("transform", "translate(" + padding + ",0)")
  .call(yAxis);

d3.select("svg")
  .attr("width", width)
  .attr("height", height)
  .selectAll("circle")
  .data(birthData2011)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d.births / d.population))
  .attr("cy", d => yScale(d.lifeExpectancy))
  .attr("r", d => radiusScale(d.births))
  .attr("fill", d => colorScale(d.population / d.area));

d3.select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", height - padding)
  .attr("dy", "1.5em")
  .style("text-anchor", "middle")
  .text("Births per Capita");

d3.select("svg")
  .append("text")
  .attr("x", width / 2)
  .attr("y", padding)
  .attr("dy", "2em")
  .style("font-weight", "bold")
  .style("text-anchor", "middle")
  .text("Births per capita vs. life expectancy");

d3.select("svg")
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", -height / 2)
  .attr("y", padding)
  .attr("dy", "-1.1em")
  .style("text-anchor", "middle")
  .text("Life expectancy");
