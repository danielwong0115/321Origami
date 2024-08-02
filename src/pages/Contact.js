import React from 'react';
import { showCaption, hideCaption } from '../assets/scripts/main.js';

const Contact = () => (
    <main class="min-vh-100">
        <section>
            <div class="container-lg my-5">
                <div class="row">
                <div class="col-md-6">
                    <div class="p-5">
                    <h1>Questions?</h1>
                    <br class="m-5" />
                    <h2>Phone: (847) 491-3741</h2>
                    <h2>Email: <a class = "text-dark" href="mailto:origami-maker@domain.com?subject=General%20Origami%20Inquiry">origami-maker@domain.com</a></h2>
                    <h2>Hours: M-F: 10am - 3pm</h2>
                    </div>
                </div>
                <div class="col-md-6">
                    <figure class="p-4" onMouseOver={showCaption} onMouseOut={hideCaption}>
                    <img class="img-fluid mx-auto d-block rounded" src={`${process.env.PUBLIC_URL}/images/people_folding_origami_together.jpg`} alt="People folding origami together" />
                    <figcaption class="text-center invisible">Join the origami network!</figcaption>
                    </figure>
                </div>
                </div>
            </div>
        </section>
    </main>
  );
  
  export default Contact;
