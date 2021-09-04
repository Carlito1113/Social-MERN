import React from 'react';

export default function Landing() {
  return (
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Local Link</h1>
          <p class="lead">Create a profile and connect with other creators</p>
          <div class="buttons">
            <a href="signup.html" class="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" class="btn">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
