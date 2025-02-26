import { useState } from 'react';
import Code from '../components/Code';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
        ...person,
        firstName:e.target.value
    })
  }

  function handleLastNameChange(e) {
    setPerson({
        ...person,
        lastName:e.target.value
    })
  }

  function handleEmailChange(e) {
    setPerson({
        ...person,
        email:e.target.value
    })
  }

  return (
    <>
    <h1>Form Using Spread Operater</h1>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label><br /><br />
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label><br /><br />
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label><br /><br />
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
      <Code
        content={"Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once."}
      />
    </>
  );
}
