import React from "react";
import styles from "./Features.module.css";

function Features() {
  const features = [
    {
      icon: "➕",
      title: "Add Books",
      description:
        "Easily add new books to your inventory with detailed information including title, author, genre, and more.",
    },
    {
      icon: "👁️",
      title: "View Details",
      description:
        "Access comprehensive information about each book in your collection with a simple click.",
    },
    {
      icon: "✏️",
      title: "Update Information",
      description:
        "Keep your inventory accurate by updating book details whenever needed.",
    },
    {
      icon: "🗑️",
      title: "Remove Books",
      description:
        "Easily remove books that are no longer in your collection with a simple delete function.",
    },
    {
      icon: "🔍",
      title: "Advanced Search",
      description:
        "Find books quickly with powerful search and filtering capabilities across your entire inventory.",
    },
    // {
    //   icon: "📊",
    //   title: "Inventory Analytics",
    //   description:
    //     "Gain insights into your collection with visual analytics and reporting features.",
    // },
    {
      icon: "🔄",
      title: "Real-time Updates",
      description:
        "Experience seamless synchronization with real-time updates across all devices.",
    },
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title text-center">Features</h1>
        <p className="section-subtitle text-center">
          Our system provides everything you need to manage your book collection
          efficiently
        </p>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Join thousands of users who manage their book collections with our
            platform
          </p>
          <button className="btn btn-primary">Sign Up Now</button>
        </div> */}
      </div>
    </div>
  );
}

export default Features;
