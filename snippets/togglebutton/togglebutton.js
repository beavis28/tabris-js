var page = tabris.create("Page", {
  title: "Toggle Buttons",
  topLevel: true
});

tabris.create("ToggleButton", {
  layoutData: {left: 10, top: 10},
  text: "selected",
  selection: true
}).on("change:selection", function(button, selection) {
  this.set("text", selection ? "selected" : "not selected");
}).appendTo(page);

page.open();
