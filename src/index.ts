// import joint from "jointjs";

console.log("joint", joint);

var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
  el: document.getElementById("app"),
  model: graph,
  width: window.innerWidth,
  height: window.innerHeight,
  gridSize: 10,
  drawGrid: true,
  background: {
    color: "rgba(0, 255, 0, 0.3)"
  }
});

var rect = new joint.shapes.standard.Rectangle();
rect.position(100, 30);
rect.resize(100, 40);
rect.attr({
  body: {
    fill: "#FAFEFF"
  },
  label: {
    text: "Hello",
    fill: "#333"
  }
});
rect.addTo(graph);

var rect2 = rect.clone();
rect2.translate(300, 0);
rect2.attr("label/text", "World!");
rect2.addTo(graph);

var link = new joint.shapes.standard.Link();
link.source(rect);
link.target(rect2);
link.addTo(graph);

setTimeout(() => {
  paper.scale(0.5, 0.5);
}, 3000);
