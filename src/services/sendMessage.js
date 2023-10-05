//import axios from 'axios';
const sendMessage = (name,surname,website, email, message ) => {
    // Send the message using an appropriate backend or API
    // You can use libraries like axios or fetch to make the HTTP request
    const data = { 
      'name':name,
      'surname':surname,
      'website':website,
      'email':email,
      'message':message
    };
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      body: JSON.stringify(data)
    };
   
  fetch('http://api.pty-export.com/sendMessage', requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert('Message sent successfully');
    // Optionally, show a success message to the user
  })
  .catch(error => {
    alert('Error sending message:', error);
    // Optionally, show an error message to the user
  });
    // Example using axios:
    /*axios.post('/api/send-message', { name,surname,website, email, message })
      .then(response => {
        console.log('Message sent successfully');
        // Optionally, show a success message to the user
      })
      .catch(error => {
        console.error('Error sending message:', error);
        // Optionally, show an error message to the user
      });*/
  };
  export default sendMessage;