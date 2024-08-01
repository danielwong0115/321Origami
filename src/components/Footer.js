import React from 'react';

const Footer = () => (
    <footer class="navbar navbar-expand-sm bg-warning navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">321Origami</a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/"><img class="img-fluid mx-auto d-block" src={require("../assets/images/facebook2.jpg")} alt="Facebook Logo" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/"><img class="img-fluid mx-auto d-block" src={require("../assets/images/instagram3.jpg")} alt="Instagram Logo" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://x.com/"><img class="img-fluid mx-auto d-block" src={require("../assets/images/twitter1.png")} alt="Twitter Logo" /></a>
          </li>
        </ul>
      </div>

    </footer>
  );
  
  export default Footer;