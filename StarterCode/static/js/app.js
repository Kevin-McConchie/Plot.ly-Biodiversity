
// dropdown select function for selecting/ refreshing page
function dropMenu() {

// create id dropdown list
  var selection = d3.select("#selDataset");

  d3.json("samples.json").then((data) =>{
    var sampleName = data.names; 
    sampleName.forEach((name)=> {
      selection
      .append("option")
      .text(name)
      .property("value",name);
  });

   //set default
  var defaultSample = sampleName[0];

  demoInfo(defaultSample)
});

function optionChanged(sampleName){
  demoInfo(sampleName);
}

// used sample id to poplate infoPanel with details
function demoInfo(id) {
  d3.json("samples.json").then((data) =>{
  var metadata= data.metadata;
  console.log(metadata);
  var info =metadata.filter(sampleId=>sampleId.id == id)[0];
  console.log(info)

// Populate demoInfo panel with id information
  var infoPanel = d3.select('#sample-metadata');
  infoPanel.html("");
    Object.entries(info).forEach(([key,value])=>{
    infoPanel.append("h6").text(`${key}:${value}`);
    console.log(`key:${key} and value:${value}`);
    });
  });
}

}//dropMenu() end bracket
dropMenu()


// BAR PLOT Slice the first 10 objects for plotting from 2-06
// slicedData = sortedByGreekSearch.slice(0, 10);
// Sort the array in descending order and assign the results to a variable
// var sorted = numArray.sort(function sortFunction(a, b) {
//     return b - a;
//   });

