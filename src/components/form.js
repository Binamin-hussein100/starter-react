import React, {useState} from "react";

// form
    // set states
    // form values
    // handle change <=> state conjuction
    // Handle submission
// conditional rendering
const ContactForm = () => {
    // const [variable, setFn] = usestate(0)
    const [formData, setFormData] = useState({
            name: "",
            email:"",
            phone:"",
            website:"",
            message:""
    })
    const [isSubmitted, SetIsSubmitted] = useState(false)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(init =>({
            ...init,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        console.log(formData)
        SetIsSubmitted(true)
    }

    if(isSubmitted){
        return <div>Thank you for contacting us!</div>
    }
    return(
        <>
            <div className="container">  
                <form id="contact" action="" method="post" onSubmit={handleSubmit}>
                    <h3>ZEN Contact Form</h3>
                    <h4>Contact us for custom quote</h4>
                    <fieldset>
                        <input 
                            placeholder="Your name"
                            type="text"
                            tabIndex="1"
                            required
                            autoFocus
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                             />
                    </fieldset>
                    <fieldset>
                        <input 
                            placeholder="Your Email Address" 
                            type="email" 
                            tabIndex="2" 
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}

                            />
                    </fieldset>
                    <fieldset>
                        <input 
                            placeholder="Your Phone Number (optional)" 
                            type="tel" 
                            tabIndex="3"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}

                            />
                    </fieldset>
                    <fieldset>
                        <input 
                            placeholder="Your Web Site (optional)" 
                            type="url" 
                            tabIndex="4" 
                            name="website"
                            value={formData.website}
                            onChange={handleChange}

                             />
                    </fieldset>
                    <fieldset>
                        <textarea 
                            placeholder="Type your message here...." 
                            tabIndex="5" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}

                            ></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default ContactForm;