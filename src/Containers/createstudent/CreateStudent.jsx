import React from 'react'
import './CreateStudent.scss';

const CreateStudent = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    /// 3 send it

    const requestBody = {
      "firstName": e.target[0].value,
      "lastName": e.target[1].value,
      "age": e.target[2].value,
      "location": e.target[3].value,
      "interests": []
  };

    // 3. Send it!!
    const options = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    };
      fetch('http://localhost:8080/student', options).then((response) => {
        return response.json();
    }).then((data) => {
        // 4. Show some indication that it's been sent/successful
        alert("Created a new user, yay!!")
    });
  }



  return (
    <>
      <form onSubmit={handleSubmit} className='studentform'>
        <p>Create a new Student</p>
        <label>First Name:</label>
        <input type="text" name="name" />
        <label>Last Name:</label>
        <input type="text" name="name" />
        <label>Age:</label>
        <input type="text" name="name" />
        <label> Location:</label>
        <input type="text" name="name" />
        <label> Interests:</label>
        <input type="text" name="name" />
        <button className='submitbutton' type="submit" value="Submit">Create</button>
      </form>
    </>
  )
}

export default CreateStudent
