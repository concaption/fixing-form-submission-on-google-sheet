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
                 "Agreed Price", "Requested Date", "Print Locations", "Style", "Color", "Size", "Quantity"];
                 
  // Set the header row if the sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  var timestamp = new Date().toISOString();
  // Primary fields
  var primaryFields = [
    timestamp, data["Project/Event Name"], data["Company/Organization"], data["First Name"], data["Last Name"], 
    data["Street Address 1"], data["Street Address 2"], data["City"], data["State"], data["ZIP"], 
    data["Email"], data["Additional Comments"], data["Agreed Price"], data["Requested Date"], 
    data["Print Locations"].join(', ')
  ];

  // Process each order
  data.orders.forEach(function(order) {
    var row = primaryFields.slice();
    row.push(order.style, order.color, order.size, order.quantity);
    sheet.appendRow(row);
  });

  var result = {
    result: "success"
  };
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}