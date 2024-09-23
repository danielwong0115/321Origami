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
                <p class="lead">Discover the art of origami, where simple sheets of paper transform into intricate creations. From classic folds to modern designs, explore endless possibilities and unlock your creativity through paper folding.</p>
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
                <p>Origami is more than just an art form; it's a mindful practice that engages creativity, patience, and problem-solving. The simple act of folding paper can improve focus, relieve stress, and even boost hand-eye coordination. Origami encourages innovative thinking, as each fold brings new possibilities to life. Whether you’re a beginner or an experienced folder, origami offers a rewarding experience, turning a plain piece of paper into something extraordinary. It’s a calming hobby that connects people across cultures and generations, making it an enriching pursuit for all ages.</p>
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
                <p>My journey with origami began as a simple curiosity, but it quickly became a lifelong passion. What started with folding basic shapes gradually evolved into mastering intricate designs. Along the way, I’ve discovered that origami isn’t just about creating beautiful objects—it’s about patience, perseverance, and the joy of seeing something take shape in your hands. Each fold tells a story of trial, error, and achievement. Over time, I’ve honed my skills and found joy in sharing this art form with others, inspiring creativity and mindfulness through paper folding.</p>
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
