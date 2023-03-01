# <p align=center>Bank Balance Application with React Redux</p>

## Contents

**1. Project Description** <br/>
**2. Installation Guide** <br/>
**3. Usage Guide** <br/>
**4. Credits**


### Project Description / Game Rules

The aim of this project was to create a simple bank balance application, utilising the skills we have developed in **React Redux**. <br/>
I have created this application using Create React App. The application allows the user to withdraw/deposit a specified amount, add 5% interest or deduct 15% charges.***

### Installation Guide

To install my project localling, download all files in the repository. Once downloaded, open your terminal or command prompt and enter **'cd [file-location-here]'** to locate the project. 
Next enter **'npm install'** to download node_modules and enter **'npm start'** once complete. This will open the application in your browser.

### Usage Guide

<p align=center><img width="959" alt="image" src="https://user-images.githubusercontent.com/108631501/222155150-4cd27f02-c142-4396-9e4c-d14cc9fb652a.png"></p>

Once you have opened the application in your browser, you will see the above UI. From here, you can hover over the information icon in the top right corner to see more information on how the app works. <br/>
To withdraw/deposit money into the balance, add a number into the input box and press the relevant button. I've created this functionality by using an onChange event function on the 
input box and storing the user input as the value. I've then used onClick functions to store the value in state and call the corresponding withdraw/deposit reducers to edit the slice of state. <br/>
To add 5% interest or deduct 15% charges, click the corresponding button and the amount will be automatically added/withdrawn. 

### Credits
**Author:** *Alice Day* </p>
