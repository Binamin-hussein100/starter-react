import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the submission e.g., sending data to a server
        console.log(formData); // Log the form data to the console (or handle as needed)
        setIsSubmitted(true); // Set the submission flag
    };

    if (isSubmitted) {
        return <div>Thank you for contacting us!</div>;
    }

    return (
        <div className="container">  
            <form id="contact" action="" method="post" onSubmit={handleSubmit}>
                <h3>Colorlib Contact Form</h3>
                <h4>Contact us for custom quote</h4>
                <fieldset>
                    <input 
                        name="name"
                        placeholder="Your name" 
                        type="text" 
                        tabIndex="1" 
                        required 
                        autoFocus 
                        value={formData.name}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input 
                        name="email"
                        placeholder="Your Email Address" 
                        type="email" 
                        tabIndex="2" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input 
                        name="phone"
                        placeholder="Your Phone Number (optional)" 
                        type="tel" 
                        tabIndex="3" 
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <input 
                        name="website"
                        placeholder="Your Web Site (optional)" 
                        type="url" 
                        tabIndex="4" 
                        value={formData.website}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <textarea 
                        name="message"
                        placeholder="Type your message here...." 
                        tabIndex="5" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </fieldset>
                <fieldset>
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default ContactForm;