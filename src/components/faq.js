
const FAQ = [
    {
      "question": "How much does your service cost?",
      "answer": "Our pricing varies depending on the specific service and project requirements. We offer competitive rates and can provide a customized quote based on your needs."
    },
    {
      "question": "What types of projects do you specialize in?",
      "answer": "We specialize in a wide range of projects including residential, commercial, and industrial construction, renovation, and maintenance services."
    },
    {
      "question": "Do you offer free estimates?",
      "answer": "Yes, we offer free estimates for all potential projects. Contact us to schedule an appointment and discuss your needs."
    },
    {
      "question": "How long have you been in business?",
      "answer": "We have been in business for [X] years, serving [location]. Our experienced team has successfully completed numerous projects and earned the trust of our clients."
    },
    {
      "question": "Are you licensed and insured?",
      "answer": "Yes, we are fully licensed and insured to provide our services. Our team members are highly trained professionals committed to delivering quality workmanship and customer satisfaction."
    },
    {
      "question": "What sets you apart from your competitors?",
      "answer": "We take pride in our commitment to excellence, attention to detail, and dedication to customer satisfaction. Our team works closely with clients to understand their needs and deliver tailored solutions that exceed expectations."
    },
    {
      "question": "Do you offer warranties on your work?",
      "answer": "Yes, we stand behind the quality of our workmanship and offer warranties on our services. Contact us for more information about our warranty policies."
    },
    {
      "question": "How soon can you start a project?",
      "answer": "Our availability varies depending on our current workload and project schedule. Contact us to discuss your project timeline and availability."
    },
    {
      "question": "Do you provide references or testimonials?",
      "answer": "Yes, we can provide references or testimonials from satisfied clients upon request. We have a track record of delivering exceptional results and building long-lasting relationships with our clients."
    },
    {
      "question": "What payment methods do you accept?",
      "answer": "We accept various payment methods including cash, check, credit card, and online payments. Our team will work with you to arrange a convenient payment option for your project."
    }
  ]
  
  
  const FAQComponent = () =>{
  
    return (
      <>
        {FAQ.map((e, qIndex) => (
          <div id="faq-wrapper" >
            <p>
              
              <span id='question-wrapper'>{e.question}</span>
            </p>
           
              <>
                <hr />
                <p>{e.answer}</p>
              </>
         
          </div>
        ))}
      </>
    );
  };

  export default FAQComponent