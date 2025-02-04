import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="about-header">
        <h1 className="display-4 about-title">About My Journal</h1>
        <p className="lead">Your Personal Space to Write, Reflect, and Grow 🌱</p>
      </header>

      {/* Main Content */}
      <div className="container about-container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="section-title">Welcome to My Journal!</h2>
            <p className="lead">
              My Journal is your very own <strong>digital diary</strong> where you can jot down your thoughts, track your progress, and stay organized—all in one place.
            </p>

            <h3 className="sub-section-title">How It Works</h3>
            <p>Using My Journal is as easy as <strong>1-2-3</strong>:</p>
            <ol>
              <li><strong>Sign Up</strong>: Create your account in just a few clicks. 🎉</li>
              <li><strong>Write Away</strong>: Start writing your journal entries. 🔒</li>
              <li><strong>Stay Organized</strong>: Categorize your entries and revisit your memories. ⏳</li>
            </ol>

            <h3 className="sub-section-title">Why You'll Love It</h3>
            <p>My Journal isn't just another app—it's your <strong>personal sanctuary</strong>. Here's why you'll love it:</p>
            <ul>
              <li><strong>Simple & Beautiful</strong>: Clean design and easy navigation. 🎨</li>
              <li><strong>Private & Secure</strong>: Your entries are yours alone. 🤐</li>
              <li><strong>Always With You</strong>: Access your journal anytime, anywhere. 📱💻</li>
            </ul>

            <h3 className="sub-section-title">Ready to Get Started?</h3>
            <p>Join the My Journal family today and start your journey of self-discovery and growth. 🌟</p>
            <a href="/signup" className="btn btn-primary btn-lg">Sign Up Now</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="mb-0">&copy; 2025 My Journal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
