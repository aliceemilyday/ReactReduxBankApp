/*Create an app that manipulates a cash balance on an account. The app should have 4 buttons - withdraw, deposit, add interest and charges. It
must include 1 input box for the user to input the amount they would like to withdraw/deposit. The add interest button should add 5% to the balance
and the charges button should subtract 15%.*/



//Importing useSelector and useDispatch from react-reduct to select the required slices of state
import { useSelector, useDispatch } from 'react-redux';
//Importing the action creators implemented in counter reducer
import { interest, charges, withdraw, deposit } from './store/counter';
//Importing useState hook from react to get the state from the user input
import { useState } from 'react';
//Importing external styling sheet
import './App.css';

//Below is the App function component which contains the functionality and elements that will be rendered and displayed
function App() {
  //Assigning the useSelector function to 'count' variable to find the required slices of state. This variable will display the final calculated output
  const count = useSelector((state) => state.counter.value);
  //Initiating the dispatch variable with useDispatch which will dispatch all the required actions to the reducer to enable us to modify state 
  const dispatch = useDispatch();
  //Creating userInput and setUserInput variables to assign the user's input value with useState
  let [userInput, setUserInput] = useState(0);

  //Below I have created the handleDeposit function that is triggered when the deposit button is clicked. 
  const handleDeposit = (e) => {
    /*The function takes the event as a parameter to use the preventDefault method. This is so the page does not refresh which would reset the
    count to 0 */
    e.preventDefault();
    //I've used data validation to ensure the user enters a valid number
    if (isNaN(userInput) === true){
      alert("Please enter a valid number");
    }
    else {
      /*If the user DOES enter a valid number, the deposit action is called with the userInput variable (which is converted to a number). Calling
      the action creator and dispatch allows us to manipulate the slice of state in the way specified in the action (in the counter.js file)*/
      dispatch(deposit(Number(userInput)));
      //I've then reset the userInput to 0
      setUserInput(0)
    }
  };

  //I've then used the exact same function as above, however this function is called when the withdraw button is clicked and calls the withdraw action creator
  const handleWithdraw = (e) => {
    e.preventDefault();
    if (isNaN(userInput) === true){
      alert("Please enter a valid number");
    }
    else {
      dispatch(withdraw(Number(userInput)));
      setUserInput(0)
    }
  };

  /*Next i have created the function that's triggered when the add interest button is clicked. This function is similar to the above functions,
  however I have not added data validation as there is no user input required */
  const handleInterest = (e) => {
    e.preventDefault();
    dispatch(interest());
  };

  //And finally I have created the function that's triggered when the charges button is clicked and calls the charges action creator
  const handleCharges = (e) => {
    e.preventDefault();
    dispatch(charges());
  };

  return (
    <div>
      <div className="App">
        <h2>Cash Balance:</h2>
        <h1>£{count.toFixed(2)}</h1> {/*Displaying the count variable which was initiated using the useSelector function. This variable outputs
                                      the final calculated value after the action creators have been called. I have used toFixed(2) to set the
                                      decimal place to 2 so it's easier for the user to read*/}
      </div>
      <form className='Form'>
        <label>Deposit/Withdrawal Amount: <br/> £
          {/*Below is the input element which contains a function which is triggered when the input value is changed. The function takes the event
          as a parameter and uses the target.value attribute to get the user's input. The userInput is then assigned to the value*/}
          <input type="text" name="value" onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
        </label>
        <div className='inputButtons'> {/*Below are the buttons that trigger the handleDeposit or handleWithdraw functions when clicked. These buttons
                                        are linked to the input field above as they add/subtract the user's input from the account balance (count) */}
          <button type="submit" onClick={handleDeposit}>Deposit</button>
          <button type="submit" onClick={handleWithdraw}>Withdraw</button>
        </div>
        <div className='Buttons'> {/*Below are the buttons that when clicked, will trigger either the handleInterest or handleCharges functions*/}
          <button onClick={handleInterest}>Add Interest</button>
          <button onClick={handleCharges}>Charges</button>
        </div>
      </form>
    </div>
  );
}

//Exporting App component
export default App;
