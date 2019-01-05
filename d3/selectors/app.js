document.addEventListener("DOMContentLoaded", function() {
  //select all li elements
  d3.selectAll("li").nodes();
  //select first li
  d3.selectAll("li").node();
  //select a single node
  d3.select("#page-title").node();
  //change properties
  d3.select("#page-title")
    .style("background-color", "teal")
    .style("color", "white")
    .attr("class", "new-class")
    .text("D3 is super cool!");
  //getters the text
  // d3.select("#page-title").text()
  // d3.select("#page-title").style('color')
  //instead of attr('class','new-class')
  //classed('new-class',true)

  //using callbacks; arguments of callback are (_,idx)
  d3.selectAll("li").style("font-size", () => {
    return Math.random() * 40 + "px";
  });

  d3.selectAll("li").style("background-color", (_, idx) => {
    return idx % 2 === 0 ? "lightgray" : "white";
  });

  //select part of selection by chaining
  d3.select(".outer")
    .style("color", "purple")
    .select("div")
    .style("font-size", "30px")
    .style("background-color", "orange")
    .select("div")
    .style("border", "3px solid green");
});
