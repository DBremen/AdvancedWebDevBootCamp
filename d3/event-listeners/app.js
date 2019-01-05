document.addEventListener("DOMContentLoaded", function() {
  d3.select("#new-note").on("submit", () => {
    d3.event.preventDefault();
    let input = d3.select("input");
    d3.select("#notes")
      .append("p")
      .classed("note", true)
      .text(input.property("value"));
    input.property("value", "");
  });
});
