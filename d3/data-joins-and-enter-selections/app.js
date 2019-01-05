var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  },
  {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  },
  {
    quote:
      "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  },
  {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  },
  {
    quote:
      "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];

var colors = {
  G: "#3cff00",
  PG: "#f9ff00",
  "PG-13": "#ff9000",
  R: "#ff0000"
};

d3.select("#quotes")
  .style("list-style", "none")
  .selectAll("li")
  .data(quotes)
  .enter()
  .append("li")
  .text(data => {
    return (
      '"' + data.quote + '"' + " - " + data.movie + " " + " (" + data.year + ")"
    );
  })
  .style("margin", "20px")
  .style("padding", "20px")
  .style("font-size", d => {
    return d.quote.length < 25 ? "1.3em" : "1.1em";
  })
  .style("background-color", d => {
    return colors[d.rating];
  })
  .style("border-radius", "6px");