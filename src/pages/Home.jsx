import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero />
      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle mb-4">
            Join thousands of users who manage their book collections with our
            platform
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/books" className="btn btn-primary">
              View Book Inventory
            </Link>
            <Link to="/features" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
