# Communication Contract #
1.	What is the current status of the microservice you implemented for your partner to use? Hopefully, it’s done!
```The microservice is of creating the JSON to array of strings converter is done. I am open to any feedback to make updates to the code.```

2.	If the microservice isn’t done, which parts aren’t done and when will they be done?
```It is done, just awaiting comments, feedback, and concern.```

3.	Where can your partner find instructions for using your microservice? You should have created these instructions as part of a previous assignment
```The instructions are on the GitHub repo: ``` https://github.com/rayjsales/CS361-MicroServices/tree/main/category (private)
https://github.com/velazqje/361a_microservice_public (public)

4.	How is your partner going to access your microservice? Should they get your code from GitHub? Should they run your code locally? Is your microservice hosted somewhere? Etc.
```The code is available from the GitHub repo above. It should be run locally. The default port I selected was 7777.```

5.	Have you confirmed that you can successfully call YOUR PARTNER’S microservice? If not, do so. By when will you do that?
```I created an uploaded to the GitHub repo a demo App that calls the microservice from a front end with sample data using a .json file. It calls successfully. It has since been updated to read JSON data from the request body which can be tested using Postman.```

6.	If your partner cannot access/call YOUR microservice, what should they do? Can you be available to help them? What’s your availability?
```If you cannot access/call the microservice, please reference the README first for the instructions, then review the dummy App I used to call the microservice.
I am available to assist with the implementation of the microservice any time after normal work hours 9AM-5PM EST and/or anytime on the weekend otherwise.
```

7.	If your partner cannot access/call your microservice, by when do they need to tell you?
```Please tell me at least 48 hours before the assignment is due if you are having issues calling the microservice. ```

8.	Is there anything else your partner needs to know? Anything you’re worried about? Any assumptions you’re making? Any other mitigations / backup plans you want to mention or want to discuss with your partner?
```Please let me know if this doesn’t meet your requirements.```



# Cuisine Microservice #
Microservice for CS361 - Software Engineering I. Microservice provides the Cuisine Category when reviewing recipes in the get request.

This microservice runs locally. By default it is set to PORT = 7777. 
```
http://localhost:7777/distinct-values
```

## Running the Application ##
1. Install express package
```
npm install express
```
2. Install CORS package
```
npm install cors --save
```
3. Start backend server
```
node category_converter.js
```

## UML Sequence Diagram ##
![sequence_diagram](https://user-images.githubusercontent.com/102427274/236632656-47022131-9b89-4928-b109-8a5de646cf81.png)


## Getting Data ##
Using React in the frontend, import the useState, useEffect hooks.
```
import React, { useState, useEffect } from 'react';
```
Create a function to be exported to the main App.
```
function CategorySelect() {
```

Declare your state variables and use the useState hook for use in the drop down menu. The first variable is the initial state, the second is the function to update the first. Because you are returning an array, use the brackets in the useState function.
```
const [distinctValues, setDistinctValues] = useState([]);
```

The effect hook will let you perform side effects directly in this component
```
useEffect(() => {
```
You can use the fetch() method to send a GET request to the '/distinct-values' server.
```
    fetch('http://localhost:7777/distinct-values')
      .then(response => response.json())
      .then(data => setDistinctValues(data))
      .catch(error => console.error(error));
  }, []);
  
```

You can console.log the values that show up when you inspect element but this is not required.
```
  console.log(distinctValues);
```

One way to view these results is by using a dropdown menu with the elements using the map() method.

```
  return (
    <select>
      <option value="">Select a category</option>
      {distinctValues.map(value => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
  );
```
Don't forget to export to your main App.js
```
export default CategorySelect;
```
Start your front end
```
npm start
```



## Returned Data ##
The returned data will be an array of strings. For the sample JSON data,

```[ { "category": "Fast Food, Sandwich, American" }, { "category": "Chinese, Asian, Asian Fusion" }, { "category": "American, Fast Food, wings" }, { "category": "American, burger, Fast Food" }, { "category": "BBQ, American, Burgers" }, { "category": "Mexican, Latin American, New Mexican" }, { "category": "American, Fast Food, wings" } ]```

the result in the terminal and at the server address above will be: 

```
[
"American", "Asian Fusion", "Asian", "BBQ", "Burger", "Burgers", "Chinese", "Fast Food", "Latin American", "Mexican", "New Mexican", "Sandwich", "Wings"
]
```
On the frontend:

<img width="139" alt="image" src="https://user-images.githubusercontent.com/102427274/235356697-9e34ad2d-58bc-4a92-9bd7-63d652bfd385.png">



