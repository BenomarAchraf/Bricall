import React, { useRef, useState } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';
import Logo from "../Assets/Images/image.png"
function Contact() {
  const form = useRef();
  const [notification, setNotification] = useState(null);
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hwfkj17', 'template_pzgoago', form.current, 'ideoCSUE6XG0jHeCJ')
      .then((result) => {
        console.log(result.text);
        //send notification to technician
        fetch('http://localhost:8090/push-notifications', {
                    method: 'POST',
                    body: JSON.stringify({
                      content: 'New message received',
                      receiver_id: '123', //get user id

                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
        }).then((response) => {
                    if (response.ok) {
                        setNotification('Notification sent successfully!');
                    } else {
                        setNotification('Error sending notification');
                    }
                });
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact">
            <div className="intro"><h1>Contactez-moi</h1>
            <h3>Si vous avez besoin d'une prestation</h3></div>
      <div
        className="rightSide"
            >
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="user_name" placeholder="Enter full name..." type="text" />
          <label htmlFor="date">Date</label>
          <input name="date" placeholder="Enter date..." type="date" />
          <label htmlFor="adresse">Adresse</label>
          <input name="adresse" placeholder="Enter adresse..." type="adresse" />
          <label htmlFor="file">Joindre une image</label>
          <input name="file" placeholder="Join an image..." type="file" />
          <label htmlFor="message">Description du besoin</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit" value="Send"> Send Message</button>
          </form>
          {notification && <div>{notification}</div>}
      </div>
            <div className="leftSide">
                <img src={Logo}
                />
      </div>
    </div>
  );
}
export default Contact;