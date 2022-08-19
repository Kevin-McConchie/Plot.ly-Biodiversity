
 // Use D3 to select the dropdown menu for when a selection is made
var selection = d3.select("#selDataset");

// Use D3 to create an event handler
d3.selectAll("body").on("change", init);

// dropdown select function
function init() {

// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {

// create Test subject dropdown list
  var sampleNames = data.names; 
    sampleNames.forEach((sample)=> {
      selection
      .append("option")
      .text(sample)
      .property("value",sample);
    })
 

// Populate Demographic info panel
// Populate Demographic info panel
// var dropdownMenu = d3.select("#selDataset");
// var dataset = dropdownMenu.property("value");
// var info=[]
// console.log(info)

var infoPanel = d3.select('#sample-metadata')
infoPanel.html("")

var id = 940;
var metadata= data.metadata;
var info =metadata.filter(sampleId=>sampleId.id === id)
console.log(info)
console.log(metadata);

for (const [key,value] of Object.entries(info)){
  console.log(`${key},${value}`);
}

  });

}
init();


// BAR PLOT Slice the first 10 objects for plotting from 2-06
// slicedData = sortedByGreekSearch.slice(0, 10);
// Sort the array in descending order and assign the results to a variable
// var sorted = numArray.sort(function sortFunction(a, b) {
//     return b - a;
//   });

