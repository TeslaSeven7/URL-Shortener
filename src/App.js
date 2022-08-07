
import { useState, useEffect } from "react";


const url = "https://api.shrtco.de/v2/shorten?url=";
var longUrl;
var regex= /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
export default function App() {

  const [message, setMessage] = useState('');
  const handleChange = event => {
    if(regex.test(event.target.value)){
      longUrl = url + event.target.value
      
    }
    else{
      console.log("NOPE")
    }
    setMessage(event.target.value);
  };


  const [isSending, setIsSending] = useState(false);
  let [data, setData] = useState([]);

  useEffect(() => {
    isSending &&
      fetch(longUrl)
        .then((response) => response.json())
        .then((data) => setData(data.result.full_short_link))
        .then(() => setIsSending(false));
  }, [isSending]);

  return (
    <>
     <div>
        <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        />
        
        <h2>Message: {message}</h2>
        
        </div>
    <button onClick={() => setIsSending(true)}>Generate URL</button>
      <h2><a href={data} target="_blank">{data}</a></h2>
      
    </>
  );
}
