import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Book Inventory Management System
            </h1>
            <p className={styles.heroSubtitle}>
              Efficiently manage your book collection with our comprehensive
              CRUD system. Add, view, update, and delete books with ease.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/books" className="btn btn-primary">
                View Inventory
              </Link>
              <Link to="/features" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://via.placeholder.com/500x400"
              alt="Book Management"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
