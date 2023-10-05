require('dotenv').config();


// *********** Send email
export const SendEmail = async ({
  name,
  email,
  website,
  surname,
  message,
  setSend,
}) => {
   
   fetch('**********api url*****', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    method: 'POST',
    body: JSON.stringify({name,
            surname, 
            email,
            message,
            website})
        })
   .then((response) => {
    if (!response.ok) {
      throw new Error(response.error);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success:', data);
    setSend(true);
  }).catch((error) => {
    console.error('Error:', error.message);
  });
   
};