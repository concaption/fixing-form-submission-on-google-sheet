function doGet(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

function doPost(e) {
  var sheet = SpreadsheetApp.openById("1hOiMux_xyZ43D6XD59fFRjK3cktwo964YL4XOR8GgSg").getSheetByName("Sheet1");
  var data = JSON.parse(e.postData.contents);
  
  // Define the headers
  var headers = ["Timestamp", "Project/Event Name", "Company/Organization", "First Name", "Last Name", "Street Address 1", 
                 "Street Address 2", "City", "State", "ZIP", "Email", "Additional Comments", 
                 "Agreed Price", "Requested Date", "File Upload", "Print Locations", "Style", "Color", "Size", "Quantity"];
                 
  // Set the header row if the sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  var timestamp = new Date().toISOString();
  // Primary fields
  var primaryFields = [
    timestamp, data["Project/Event Name"], data["Company/Organization"], data["First Name"], data["Last Name"], 
    data["Street Address 1"], data["Street Address 2"], data["City"], data["State"], data["ZIP"], 
    data["Email"], data["Additional Comments"], data["Agreed Price"], data["Requested Date"], data["File Upload"], data['Print Locations'].join(', ')
  ];

  // Process the primary style
  var primaryStyle = data["Style"];
  var primaryColor = data["Color"];
  var sizeFields = ["YXS", "YS", "YM", "YL", "YXL"];
  
  sizeFields.forEach(function(sizeField) {
    if (data[sizeField] && data[sizeField] !== "") {
      var row = primaryFields.slice();
      row.push(primaryStyle, primaryColor, sizeField, data[sizeField]);
      sheet.appendRow(row);
    }
  });
  
  // Process each style
  for (var i = 0; i < data.styles.length; i++) {
    var style = data.styles[i];
    var colors = data.colors;
    var sizes = data.sizes[i];

    // Create a row for each color and size
    for (var j = 0; j < colors.length; j++) {
      var color = colors[j];

      for (var size in sizes) {
        var quantity = sizes[size];
        var row = primaryFields.slice();
        row.push(style, color, size, quantity);
        sheet.appendRow(row);
      }
    }
  }

  var result = {
    result: "success"
  };
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
