import React from 'react';
import { showCaption, hideCaption } from '../assets/scripts/main.js';

const Designs = () => (
    <main class="min-vh-100">
        <section>
            <div class="container-lg my-5">
                <div class="row">
                <div class="col-lg-6">
                    <figure class="p-5" onMouseOver={showCaption} onMouseOut={hideCaption}>
                    <img class="img-fluid mx-auto d-block rounded" src="../assets/images/pheonix2.jpg" alt="Pic of origami pheonix" />
                    <figcaption class="text-center invisible">Origami Pheonix by Satoshi Kamiya</figcaption>
                    </figure>
                </div>
                <div class="col-lg-6">
                    <div class="p-5">
                    <h1>Origami Design 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla. Ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Non blandit massa enim nec dui nunc mattis enim. Velit dignissim sodales ut eu sem. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Nunc consequat interdum varius sit amet mattis. Hac habitasse platea dictumst vestibulum rhoncus.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-lg my-5">
                <div class="row">
                <div class="col-lg-6">
                    <div class="p-5">
                    <h1>Origami Design 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla. Ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Non blandit massa enim nec dui nunc mattis enim. Velit dignissim sodales ut eu sem. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Nunc consequat interdum varius sit amet mattis. Hac habitasse platea dictumst vestibulum rhoncus.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <figure class="p-5" onMouseOver={showCaption} onMouseOut={hideCaption}>
                    <img class="img-fluid mx-auto d-block rounded" src="../assets/images/rose2.jpg" alt="Pic of origami rose" />
                    <figcaption class="text-center invisible">Origami Rose by Toshikazu Kawasaki</figcaption>
                    </figure>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-lg my-5">
                <div class="row">
                <div class="col-lg-6">
                    <figure class="p-5" onMouseOver={showCaption} onMouseOut={hideCaption}>
                    <img class="img-fluid mx-auto d-block rounded" src="../assets/images/frog2.jpg" alt="Pic of origami tree frog" />
                    <figcaption class="text-center invisible">Origami Tree Frog by Robert Lang</figcaption>
                    </figure>
                </div>
                <div class="col-lg-6">
                    <div class="p-5">
                    <h1>Origami Design 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla. Ut porttitor leo a diam sollicitudin tempor. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Non blandit massa enim nec dui nunc mattis enim. Velit dignissim sodales ut eu sem. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Nunc consequat interdum varius sit amet mattis. Hac habitasse platea dictumst vestibulum rhoncus.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </main>
  );
  
  export default Designs;
