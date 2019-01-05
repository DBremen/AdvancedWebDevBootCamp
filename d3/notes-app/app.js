d3.select("#new-note").on("submit", function() {
  d3.event.preventDefault();
  var input = d3.select("input");
  d3.select("#notes")
    .append("p")
    .classed("note", true)
    .text(input.property("value"));
  input.property("value", "");
  d3.select(".previewNote").remove();
  d3.select("#notes")
    .append("p")
    .classed("previewNote", true)
    .style("display", "none");
});
d3.select("#removeNotes").on("click", () => {
  d3.selectAll(".note").remove();
});
d3.select("#feelLucky").on("click", () => {
  d3.selectAll(".note").style("background-color", () => {
    return ["red", "orange", "yellow", "green", "blue", "purple"][
      (Math.random() * 6) | 0
    ];
  });
});
d3.select("input").on("keyup", () => {
  d3.select(".previewNote")
    .style("display", "block")
    .classed("previewNote", true)
    .text(d3.select("input").property("value"));
});
