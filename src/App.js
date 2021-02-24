import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import database from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {

 const [input, setInput] = useState('');
 const [message, setMessage] = useState([
  ]);
 const [username, setUsername] = useState('');


useEffect(() => {
  database.collection('message').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setMessage(snapshot.docs.map(doc => ({ id : doc.id , message : doc.data()})))
  })

}, [])


useEffect(() => {
 setUsername(prompt('Enter UserName: '));
}, [])

 const sendMessage = (event) => {


   event.preventDefault();

   database.collection('message').add({
     text: input,
     user : username,
     timestamp : firebase.firestore.FieldValue.serverTimestamp()
   })
   // send message logic
  //  setMessage([...message, {user:username, text:input}]);
   setInput('');
 }

  return (
    <div className="App">
     
      <form className='form'>
      <h2>Welcome {username}</h2>
      <FormControl>
  <InputLabel >Enter a message</InputLabel>
  <Input  value={input} onChange={event => {setInput(event.target.value)}} type='text' />
</FormControl>
    <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
    </form>

<FlipMove>
    {/* messages showing*/

    message.map( ({id, message}) => (
      <Message key={id} username={username} message={message} />
      
    ))
    }
    </FlipMove>
    </div>
  );
}

export default App;
