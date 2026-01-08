import {test, expect} from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';

// install package 'xlsx' before running this test: npm install xlsx
// refer to https://www.npmjs.com/package/xlsx for more details

// steps to read excel file:
//1: get the path of the excel file
//2: read the excel file
//3: get the sheet you want to read
//4: convert sheet to json format
//5: use the json data in your test


test('Read Excel file and verify content', async ({}) => {
  // 1: Define the path to the Excel file
    const excelFilePath = path.resolve(__dirname, '../Tests/file_example_XLSX_10.xlsx');
    // 2: Read the Excel file
    const workbook = XLSX.readFile(excelFilePath);
    // 3: Get the first sheet name
    const firstSheetName = workbook.SheetNames[0];
    // 4: Get the first sheet
    const worksheet = workbook.Sheets[firstSheetName];
    // 5:  Convert sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    // Log the JSON data to console
    console.log(jsonData[0]); // first row data


});
