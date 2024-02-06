import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { puppyList } from './data.js';
import './path-to-css.css'; // Import CSS file

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);

    function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find(pup => puppy.id === featPuppyId);

  console.log(featuredPup);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p key={puppy.id}>{puppy.name}</p>;
           })
       }
    
    
     <div>
      <h1>List of Puppies</h1>
     <div>
        {puppies.map(puppy => (
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
            {puppy.name}
          </p>
        ))}
      </div>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Is cute: {featuredPup.isCute ? 'Yes' : 'No'}</li>
            <li>Owner ID: {featuredPup.ownerId}</li>
            <li>Tricks:</li>
            <ul>
              {featuredPup.tricks.map(trick => (
                <li key={trick.id}>{trick.title}</li>
              ))}
            </ul>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
}


export default App

// // In this updated version:

// // We added a handleClick function to set the featPupId state variable to the ID of the clicked puppy.
// // We use Array.find() to find the puppy in the puppies array whose ID matches featPupId.
// // We conditionally render the detailed information of the selected puppy only if featPupId is not null. If it's null, no puppy is selected, and therefore, no detailed information is displayed.
// // The detailed information includes the puppy's name, age, email, cuteness status, owner ID, and tricks.