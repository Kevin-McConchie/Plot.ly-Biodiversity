
// Create listner function for changes on dropdown
function optionChanged(sampleName) {
  demoInfo(sampleName);
  hBar(sampleName);
  bubble(sampleName)
}

// dropdown select function for selecting/ refreshing page
function dropMenu() {

  // create id dropdown list
  var selection = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    var sampleName = data.names;
    sampleName.forEach((name) => {
      selection
        .append("option")
        .text(name)
        .property("value", name);
    });

    //set default value
    var defaultSample = sampleName[0];
    hBar(defaultSample)
    demoInfo(defaultSample)
    bubble(defaultSample);
  });
}

// used sample id to poplate infoPanel with details
function demoInfo(id) {
  d3.json("samples.json").then((data) => {
    var filtered = data.metadata;
    // console.log(metadata);
    var info = filtered.filter(sampleId => sampleId.id.toString() === id)[0];
    // console.log(info)

    // Populate demoInfo panel with id information
    var infoPanel = d3.select('#sample-metadata');
    infoPanel.html("");
    Object.entries(info).forEach(([key, value]) => {
      infoPanel.append("h6").text(`${key}:${value}`);
      // console.log(`key:${key} and value:${value}`);
    });
  });
}

// Horizontal Bar chart variables
function hBar(id) {
  d3.json("samples.json").then((data) => {
    var bardata = data.samples;
    // console.log(bardata);
    var filtered = bardata.filter(sampleId => sampleId.id.toString() === id)[0];
    // console.log(filtered)
    var sample_values = filtered.sample_values;
    var otu_ids = filtered.otu_ids;
    var otu_labels = filtered.otu_labels;


    // Create bar chart
    var traceBar = [{
      x: sample_values.slice(0, 10).reverse(),
      y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      type: "bar",
      text: otu_labels.slice(0, 10).reverse(),
      orientation: "h",

      marker: {
        color: otu_ids,
        colorscale: "Earth",
      }

    }]

    var layout = {
      title: "Top 10 OTU",
      xaxis: { title: "OTU (Operational Taxonomic Unit) Labels" },
      yaxis: { title: "OTU (Operational Taxonomic Unit) IDs" }
    }

    Plotly.newPlot("bar", traceBar, layout);
  })
};

// Create scatter plot
function bubble(id) {
  d3.json("samples.json").then((data) => {
    var bubbledata = data.samples;
    // console.log(bubbledata);
    var filtered = bubbledata.filter(sampleId => sampleId.id.toString() === id)[0];
    // console.log(filtered)
    var sample_values = filtered.sample_values;
    var otu_ids = filtered.otu_ids;
    var otu_labels = filtered.otu_labels;


    // Create bubble chart
    var size = sample_values;
    var bubbleTrace = [{
      x: otu_ids,
      y: sample_values,
      type: "bubble",
      text: otu_labels,
      mode: "markers",
      
      marker: {
        size: size,
        color: otu_ids,
        colorscale: "Earth",
      }
    }]

    var layout = {
      title: "Top 10 OTU",
      xaxis: { title: "OTU (Operational Taxonomic Unit) Labels" },
      yaxis: { title: "OTU (Operational Taxonomic Unit) IDs" }
    }

    Plotly.newPlot("bubble", bubbleTrace, layout);
  })
};

// Initiate refresh of html
dropMenu()




