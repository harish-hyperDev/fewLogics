// Used in ReactJS

// setErrUsers is a "array of objects" state
// const [errUsers, setErrUsers] = useState([])


/* sturcture of errUsers is as follows:
 *
 * [
 * 	{ name: false, email: false, password: false },
 * 	{ name: false, email: false, password: false },
 * 	{ name: false, email: false, password: false },
 * 	{ name: false, email: false, password: false }
 * ]
*/

// We have 3 input fields namely name, email, password whose values are stored in array of objects state as well, namely "users" state.

// The below logic works in a way if name, email or password input fields are empty, then the fields in errUsers are set to true boolean value.

setErrUsers(errData => {
      errData.map((errArray, index) => {
        Object.keys(errArray).map((keyName) => {

	// If the input field is empty (actually checking the state here, as state changes along with input field, obviously!).
          if (users[index][keyName].trim() === "") {
	  // Then set the specified errUsers field to true, meaning that error = true
            errArray[keyName] = true
          }
          return ({
            ...errArray, [errArray[keyName]]: true
          })

        })
        return errArray;
      })
      return errData
    })
  }
