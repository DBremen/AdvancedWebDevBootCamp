d3.select('#reset').on('click', ()=> {
    d3.selectAll('.letter').remove();
    d3.select('#phrase').text('');
    d3.select('#count').text('');
});
d3.select("form").on("submit", () => {
  d3.event.preventDefault();
  let input = d3.select("input");
  let text = input.property("value");

  //updated
  //need key function to determine which elements to update
  //other d3 will use the index as the key of the data
  //which will overwrite existing elements at the same index
  //we want to use the character instead as the key
  let letters = d3
    .select("#letters")
    .selectAll(".letter")
    .data(getFrequencies(text), d => d.character);

  //elements that don't have data anymore
  letters
    .classed("new", false)
    .exit()
    .remove();

  //new data that do not have elements on the page
  //below merge applies to update and enter
  letters
    .enter()
    .append("div")
    .classed("letter", true)
    .classed("new", true)
    .merge(letters)
    .style("width", "20px")
    .style("line-height", "20px")
    .style("margin-right", "5px")
    .style("height", d => d.count * 20 + "px")
    .text(d => d.character);

  d3.select("#phrase").text("Analysis of: " + text);
  //update letter count
  d3.select("#count").text(
    "(New characters: " + letters.enter().nodes().length + ")"
  );
  input.property("value", "");
});
function getFrequencies(str) {
  var out = [];
  var sorted = str.split("").sort();
  sorted.forEach(letter => {
    let charIndex = out.findIndex(obj => obj["character"] === letter);
    if (charIndex === -1) {
      out.push({ character: letter, count: 0 });
      charIndex = out.length - 1;
    }
    out[charIndex].count++;
  });
  return out;
}
