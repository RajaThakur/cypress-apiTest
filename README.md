# "Cypress.io"

## Project Description:
* Project setup with Cypress.io and windows 10
* Makes use of Page Objects and json files for testdata management 
* Written in Javascript

## Setup:
* Install [Node](http://nodejs.org) (v16.x.x or later)
* `npm install` to install the project dependencies

## Run tests:
* `cypress open` in project root to start the cypress server
* and select the spec file to run the spec

or
* `npx cypress run` in project root to start the cypress server
* It would give summary alongwith run results on commands prompt

## Assignment Description:
Automation testing practical test task

Here is a trivial public API for converting unix epoch time to human readable format:
Unix Timestamp Converter | Online Javascript Time Tools
https://helloacm.com/tools/unix-timestamp-converter/

Please create a test suit for this API assuming this is mission critical production service that is exposed publicly over the internet. You can
use any programming language and any library you typically use for writing API level tests.
The deliverable should be a Git project that we can easily download from GitHub or similar service. The application should have basic docs
and instructions on how to run tests (from command line preferably).
Your main challenge is to demonstrate api analysis skills, programming skills, best practices of HTTP API testing and ability to think outside
of the box when working with such a trivial API. You need to come up with reasonable set of meaningful test cases. We will also pay
attention at application structure, code style and configuration.
Bonus task: tell us how the API can be improved.


Sample screenshot for all test post run
* ` To Convert From Date String to Unix TimeStamp
API example:
  https://helloacm.com/api/unix-timestamp-converter/?cached&s=2016-01-01%202:3:22
returns: 
  1451613802
  `
  
* `To Convert From Unix TimeStamp to Date String
API example:
  https://helloacm.com/api/unix-timestamp-converter/?cached&s=1451613802
returns:
  "2016-01-01 02:03:22"
Invalid Date String
 `
* `API example:
  https://helloacm.com/api/unix-timestamp-converter/?cached&s=asdfasd
returns:
  false
  `
* For all API test Validation, 
Please see
* api-test.js under cypress/api-tests

List of Positive and negative cases
Positive cases
*  1.Whether the date field allows a unique character or not
*  2.blank space after date
*  3.blank space after month
*  4.zeros in the date
*  5.zeros in the month
*  6.valid month, date, year in mm/dd/yyyy format (14175ms)
*  7.field accepts with backword slash
*  8.field accepts with forward slash
*  9.field accepts alphabets in the date format

Negative cases
*  1.February 30 or 31 is accepted in the date format
*  2.decimal point is accepted instead of hyphen or slashes (- or /)
*  3.blank spaces are accepted in the date format fields
*  4.blank space after year
*  5.alphabetic and alphanumeric data in the field
*  6.Enter a decimal point
*  7.invalid date and valid month, and valid year
*  8.valid date and invalid month, and valid year
*  9.valid date and valid month, and invalid year
*  10.wrong month, year and date format is accepte*  d.in YYYY/dd/mm 
*  11.field accepts the input as blank
*  12.field accepts special character instead of the dates
*  13.field accepts more than 4 digits for the year
*  14.field accepts zero in all fields of the box
*  15.field accepts blank field for one of the part of the date format
*  16.month field accepts 13 or higher number or flags errors
*  17.year is accepted in 3 digits or 2 digits
  
Some Cases result alongwith time took to respond from server
* valid month, date, year in mm/dd/yy format (14175ms)
* wrong month, year and date format is accepted. in yy/dd/mm (413ms)
* field accepts the input as blank (295ms)
* field accepts with backword slash (223ms)
* field accepts with forward slash (209ms)
* field accepts special character instead of the dates (214ms)
* field accepts more than 4 digits for the year (240ms)
* field accepts zero in all fields of the box (222ms)
* field accepts blank field for one of the part of the date format (225ms)
* field accepts alphabets in the date format (251ms)
* month field accepts 13 or higher number or flags errors (240ms)
* year is accepted in 3 digits or 2 digits (349ms)

