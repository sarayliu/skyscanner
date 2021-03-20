# skyscanner

2021 Capital One Software Engineering Summit (SES) Coding Challenge

## About

My Skyscanner [website](https://sarayliu.github.io/skyscanner/) helps travelers find cheap flights by summarizing all the travel options available in a given time frame to facilitate trip planning. Rather than having to visit several different travel websites to find the cheapest and closest flights, users can instead see a table of consolidated flight information all in one cozy website. 

This website pulls data about airlines using the [Skyscanner API](https://rapidapi.com/skyscanner/api/skyscanner-flight-search). The website meets the following deliverables:
1. Let users view their flight options between two destinations for specific dates
2. Allow users to select their currency preference when searching for flights
3. Use intuitive UI principles to highlight or call out the cheapest flights for a user running a search

## Instructions

First, enter the origin state, destination state, departing date in the form of YYYY-MM or YYYY-MM-DD, returning date in the same format assuming a round trip is taken, and the currency. There are traces of example inputs in the text boxes to help guide you in the correct format to enter. All inputs are required, and the website will prompt you to enter a value if you forget one. If you enter invalid inputs, unexpected results or errors may appear. Do not enter abbreviations for the states.

![instruction step 1](https://github.com/sarayliu/skyscanner/blob/main/finished-app/Instructions%20Step%201.PNG)

Next, click "Submit Preliminary Information."
The results for origin state: California, destination state: New York, departing date: 2021-03, returning date: 2021-04, and currency: USD are shown below. When you scroll down, you can see two tables: one listing airports in the origin state, and another listing airports in the destination state.

![instruction step 2](https://github.com/sarayliu/skyscanner/blob/main/finished-app/Instructions%20Step%202.PNG)

Click on a row in the first table to select the origin airline. The row will turn green to indicate you have selected it. Here, we will choose the airport with ID LAXA-sky on the first row.

![instruction step 3](https://github.com/sarayliu/skyscanner/blob/main/finished-app/Instructions%20Step%203.PNG)

Scroll down and click "Submit Origin Airport."

![instruction step 4](https://github.com/sarayliu/skyscanner/blob/main/finished-app/Instructions%20Step%204.PNG)

Below the submit button, the website now displays "Origin airport LAXA-sky selected!" to confirm your selection. Below that, you will see the table of destination airports. 

![instruction step 5](https://github.com/sarayliu/skyscanner/blob/main/finished-app/Instructions%20Step%205.PNG)

Select a row to choose a destination airport. Once again, the row will turn green to show that you have clicked on it. Here, we will choose the airport with ID JFK-sky on the second row.

![instruction step 6](https://github.com/sarayliu/skyscanner/blob/main/finished-app/Instructions%20Step%206.PNG)

Click "Submit Destination Airport and See Flight Options." The website displays "Destination airport JFK-sky selected!" to validate your selection.

![instruction step 7](https://github.com/sarayliu/skyscanner/blob/main/finished-app/Instructions%20Step%207.PNG)

Scrolling down, you will see a table of all the flights that satisfy the initial conditions you inputted, with the prices displayed in the currency you selected. The table ranks the rows from cheapest to most expensive. The first three rows are highlighted in gold to show that they are the cheapest. For each row, the quote ID, price, outbound carrier ID, outbound carrier name, outbound leg departure date, inbound carrier id, inbound carrier name, inbound leg departure date, direct flight information, and latest quote date and time are displayed to give the user a wide breadth of data to evaluate. 

You are welcome to scroll up and change your inputs as well as the airports you selected. However, because the website stores the most recent click, you must click the submit button in a section each time you change something in that section. For example, if you select a new origin airport row, make sure to click "Submit Origin Airport" right after before clicking the final, third submit button. If you change the initial conditions, you should walk though the process of selecting new airports as well.

## Languages and Frameworks

- React JS / JavaScript
- HTML
- CSS
- Skyscanner API
- GitHub Pages

## Challenges I Ran Into

- I had some trouble initially with figuring out the format in which to store the API key, but eventually figured it out.
- I didn't realize that to comment out lines in JS, I should use the braces-slash-star combination instead of the normal double slashes. This led to quite a confusing display, as the lines I had commented out were acting unexpectedly.
- The API call to display the quotes took in airport codes such as LAXA-sky rather than states such as California. However, in order to give customers the best experience possible, I rewrote a significant amount of code to display the clickable tables for users to select an airport after simply entering in a state. This way, they don't need to dig up an airport code to input and can more easily navigate the website.
- In order to make the two airport tables clickable, I learned how to design a React table. I spent many hours trying various ways to get the data of which rows were clicked in Places.js back to Airport.js. In the end, the only way that seemed to work well was using local storage of the user's browser. However, with this design, I needed to partition the airports into two tables so that each click would log an airport into the local storage that Airport.js would take in before it changed with the next click.
- While trying to figure out React DOM (Document Object Model) in my JS files, I encountered an error where I thought I needed to download react-DOM. This somehow rewrote my node-modules package and destroyed the react-table and styled-components folders I had originally, so I needed to create a new React project and move over the fresh node-modules, then redownload the react-table package.
- The API call returned a large set of data, and the quote information including the carrier IDs was separate from the carrier names. I spent a few hours trying to get props in Quotes.js to take in the entire set of data, but that did not work for some reason that I am still trying to figure out. Instead, I learned to give props two internal parameters and wrote a function in Quotes.js to combine these two groups of data.

## What I Learned
I dove really deep into the ReactJS framework for two weeks, learning a great deal from tutorials I found online, StackOverflow, and the Capital One SES office hours. I really enjoyed taking real-world data from the Skyscanner API, as my website can now actually be applied to help people plan our real events and vacations in their lives. It is likely that it'll come in useful for me as well! I really enjoyed self-learning and exploring ReactJS, building off the basic knowledge I had acquired on this framework from my first hackathon previously this academic year. I also thought it was cool to deploy my first GitHub page, and I have gained a more intuitive grasp of all the Git commands from all the file manipulation I had to do. I look forward to continually improving upon this website! 

## To Dos
- Allow users to resort the table from highest-priced to lowest-priced and vice versa
- Add more comments to make code more readable
- Be able to catch errors without displaying horrendous error pages
- Allow input fields to be optional
- Create drop downs calendars for the dates and currency
- Improve the UI/UX of the website
