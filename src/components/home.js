
import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Our Company</h1>
      </header>
      <main>
        <section className="features">
          <h2>Our Features</h2>
          <p>We offer a wide range of products and services to meet your needs.</p>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>Learn more about our company and what we stand for.</p>
        </section>
      </main>
      <footer>
        <p>Contact us at contact@ourcompany.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
