import React from 'react';
import { showCaption, hideCaption } from '../assets/scripts/main.js';

const Home = () => (
    <main class="min-vh-100">
        <nav class= "mx-3">
            <p>Jump To A Section: 
                <div class="btn-group-sm">
                <a href="#why_origami" class="text-decoration-none text-light"><button type="button" class="btn btn-dark btn-sm mx-1">Why Origami?</button></a>
                <a href="#my_journey" class="text-decoration-none text-light"><button type="button" class="btn btn-dark btn-sm mx-1">My Journey</button></a>
                <a href="#get_folding" class="text-decoration-none text-light"><button type="button" class="btn btn-dark btn-sm mx-1">Get Folding!</button></a>
                </div>
            </p>
        </nav>
        <section>
        <div class="container-lg my-5">
            <div class="row">
            <div class="col-lg-6">
                <div class="p-3 text-center">
                <h1 class="fw-bold display-5">So Much More To Paper</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Congue eu consequat ac felis donec.</p>
                </div>
            </div>
            <div class="col-lg-6">
                <figure class="p-3" onMouseOver={showCaption} onMouseOut={hideCaption}>
                <img class="img-fluid mx-auto d-block rounded" src={`${process.env.PUBLIC_URL}/images/origami_dragon_2.jpg`} alt="Pic of origami dragon" />
                <figcaption class="text-center invisible">Origami Fiery Dragon</figcaption>
                </figure>
            </div>
            </div>
        </div>
        </section>
        <section id="why_origami">
        <div class="container-lg my-5">
            <div class="row">
            <div class="col-lg-6">
                <div class="p-3">
                <h2>Why Origami?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est. Sed libero enim sed faucibus turpis in. Aliquet nibh praesent tristique magna sit amet purus gravida. Quisque egestas diam in arcu cursus euismod quis viverra. Etiam erat velit scelerisque in dictum non consectetur. Id consectetur purus ut faucibus pulvinar. Enim tortor at auctor urna nunc id. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique.</p>
                </div>
            </div>
            <div class="col-lg-6">
                <figure class="p-3" onMouseOver={showCaption} onMouseOut={hideCaption}>
                <img class="img-fluid mx-auto d-block rounded" src={`${process.env.PUBLIC_URL}/images/paper_crane_2.jpg`} alt="Pic of traditional crane" />
                <figcaption class="text-center invisible">Traditional Paper Crane</figcaption>
                </figure>
            </div>
            </div>
        </div>
        </section>
        <section id="my_journey">
        <div class="container-lg my-5">
            <div class="row">
            <div class="col-lg-6">
                <div class="p-3">
                <h2>My Journey</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non. Leo in vitae turpis massa sed. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Urna et pharetra pharetra massa massa ultricies. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Sollicitudin ac orci phasellus egestas tellus rutrum. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Enim lobortis scelerisque fermentum dui faucibus in. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus.</p>
                </div>
            </div>
            <div class="col-lg-6">
                <figure class="p-3" onMouseOver={showCaption} onMouseOut={hideCaption}>
                <img class="img-fluid mx-auto d-block rounded" src={`${process.env.PUBLIC_URL}/images/folding_origami_2.jpg`} alt="Pic of someone paper folding" />
                <figcaption class="text-center invisible">Paper Folding In Action</figcaption>
                </figure>
            </div>
            </div>
        </div>
        </section>
        <section id="get_folding">
        <div class="container-lg my-5">
            <div class="row">
            <div class="col">
                <div class="p-3 text-center">
                <h2>Get Folding!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium aenean. Quis lectus nulla at volutpat diam ut venenatis. Lacus sed viverra tellus in. Egestas sed sed risus pretium quam vulputate dignissim. Sed ullamcorper morbi tincidunt ornare massa. Id ornare arcu odio ut sem nulla. Viverra aliquet eget sit amet tellus cras adipiscing enim.</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    </main>
  );
  
  export default Home;
