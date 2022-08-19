
// dropdown select function
function dropMenu() {

// create id dropdown list
  var selection = d3.select("#selDataset");

  d3.json("samples.json").then((data) =>{
    var sampleNames = data.names; 
    sampleNames.forEach((name)=> {
      selection
      .append("option")
      .text(name)
      .property("value",name);
  });
});
}

dropMenu()




///////////////////////////////
// var id = 940
// var metadata= data.metadata;
// var info =metadata.filter(sampleId=>sampleId.id === id)
// console.log(info)
// console.log(metadata);

// var infoPanel = d3.select('#sample-metadata').html("")

// // Object.entries(sample).forEach(([key,value])=>{
// //   row = sampleMetadata.append("h6").text(`${key}:${value}`);
// // console.log(`key:${key} and value:${value}`)

// for (const [key,value] of Object.entries(info)){
//   infoPanel.append("sample-metadata").text(`${key}`,`${value}`)
//   console.log(`${key},${value}`);
// }



//   });





// BAR PLOT Slice the first 10 objects for plotting from 2-06
// slicedData = sortedByGreekSearch.slice(0, 10);
// Sort the array in descending order and assign the results to a variable
// var sorted = numArray.sort(function sortFunction(a, b) {
//     return b - a;
//   });

