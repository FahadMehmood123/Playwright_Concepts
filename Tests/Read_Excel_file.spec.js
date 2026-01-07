import {test, expect} from '@playwright/test';
import * as XLSX from 'xlsx';
import path from 'path';

// install package 'xlsx' before running this test: npm install xlsx
// refer to https://www.npmjs.com/package/xlsx for more details

test('Read Excel file and verify content', async ({}) => {
  // Define the path to the Excel file
    const excelFilePath = path.resolve(__dirname, '../Tests/file_example_XLSX_10.xlsx');
    // Read the Excel file
    const workbook = XLSX.readFile(excelFilePath);
    // Get the first sheet name
    const firstSheetName = workbook.SheetNames[0];
    // Get the first sheet
    const worksheet = workbook.Sheets[firstSheetName];
    // Convert sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    // Log the JSON data to console
    console.log(jsonData[0]);

});
