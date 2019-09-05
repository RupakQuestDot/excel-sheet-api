var xlsx = require('xlsx');

var wb = xlsx.readFile('sampleTimeSheet.xlsx',{cellDates : true});

var ws = wb.Sheets['Sheet1'];

var data = xlsx.utils.sheet_to_json(ws);

//  console.log(wb.SheetNames);
//  console.log(ws);
 console.log(data);

 //xlsx.writeFile(data, 'out.xlsx');

 
//Converting Json To Sheet Again
var newWb = xlsx.utils.book_new();
var newWs = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(newWb,newWs,"new_sheet");

xlsx.writeFile(newWb,"my_new_excel_data.xlsx");

