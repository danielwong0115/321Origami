import React from 'react';
import { showCaption, hideCaption } from '../assets/scripts/main.js';

const History = () => (
    <main class="min-vh-100">
        <nav class= "mx-3">
            <p>Jump To A Section:
                <div class="btn-group-sm">
                <a href="#figures" class="text-decoration-none text-light"><button type="button" class="btn btn-dark btn-sm">Important Figures</button></a>
                </div>
            </p>
        </nav>
        <section>
            <div class="container-lg my-5">
                <div class="row">
                <div class="col">
                    <div class="p-3">
                    <h1>Time Period 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Sed elementum tempus egestas sed. Accumsan tortor posuere ac ut consequat. Ullamcorper a lacus vestibulum sed. Semper quis lectus nulla at volutpat diam. Sed libero enim sed faucibus turpis in. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Id donec ultrices tincidunt arcu non. Elementum sagittis vitae et leo duis ut diam quam. Ut venenatis tellus in metus vulputate. Auctor augue mauris augue neque gravida in. Tempus iaculis urna id volutpat. Congue quisque egestas diam in arcu. Nulla at volutpat diam ut. Lacus viverra vitae congue eu consequat ac felis donec et. A diam sollicitudin tempor id. Massa enim nec dui nunc mattis enim ut. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Ut sem viverra aliquet eget sit. Varius duis at consectetur lorem donec massa sapien faucibus et. Semper feugiat nibh sed pulvinar proin. Mattis rhoncus urna neque viverra justo nec ultrices. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Morbi non arcu risus quis varius quam. In nulla posuere sollicitudin aliquam ultrices sagittis orci a.</p>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col">
                    <div class="p-3">
                    <h1>Time Period 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Sed elementum tempus egestas sed. Accumsan tortor posuere ac ut consequat. Ullamcorper a lacus vestibulum sed. Semper quis lectus nulla at volutpat diam. Sed libero enim sed faucibus turpis in. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Id donec ultrices tincidunt arcu non. Elementum sagittis vitae et leo duis ut diam quam. Ut venenatis tellus in metus vulputate. Auctor augue mauris augue neque gravida in. Tempus iaculis urna id volutpat. Congue quisque egestas diam in arcu. Nulla at volutpat diam ut. Lacus viverra vitae congue eu consequat ac felis donec et. A diam sollicitudin tempor id. Massa enim nec dui nunc mattis enim ut. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Ut sem viverra aliquet eget sit. Varius duis at consectetur lorem donec massa sapien faucibus et. Semper feugiat nibh sed pulvinar proin. Mattis rhoncus urna neque viverra justo nec ultrices. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Morbi non arcu risus quis varius quam. In nulla posuere sollicitudin aliquam ultrices sagittis orci a.</p>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col">
                    <div class="p-3">
                    <h1>Time Period 3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Sed elementum tempus egestas sed. Accumsan tortor posuere ac ut consequat. Ullamcorper a lacus vestibulum sed. Semper quis lectus nulla at volutpat diam. Sed libero enim sed faucibus turpis in. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Id donec ultrices tincidunt arcu non. Elementum sagittis vitae et leo duis ut diam quam. Ut venenatis tellus in metus vulputate. Auctor augue mauris augue neque gravida in. Tempus iaculis urna id volutpat. Congue quisque egestas diam in arcu. Nulla at volutpat diam ut. Lacus viverra vitae congue eu consequat ac felis donec et. A diam sollicitudin tempor id. Massa enim nec dui nunc mattis enim ut. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Ut sem viverra aliquet eget sit. Varius duis at consectetur lorem donec massa sapien faucibus et. Semper feugiat nibh sed pulvinar proin. Mattis rhoncus urna neque viverra justo nec ultrices. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Morbi non arcu risus quis varius quam. In nulla posuere sollicitudin aliquam ultrices sagittis orci a.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section id="figures">
        <div class="container-lg my-5">
            <div class="row">
            <h1>Important Figures</h1>
            <div class= "col-lg-4">
                <div class="p-3 text-center">
                <h2>Akira Yoshizawa</h2>
                <figure class="p-1" onMouseOver={showCaption} onMouseOut={hideCaption}>
                    <img class="img-fluid mx-auto d-block rounded" src="../assets/images/person11.jpg" alt="Pic of Akira Yoshizawa" />
                    <figcaption class="text-center invisible">Grandfather of Origami: Akira Yoshizawa</figcaption>
                </figure>
                <p class= "p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Vestibulum lectus mauris ultrices eros in. Diam donec adipiscing tristique risus nec feugiat in fermentum. Elit eget gravida cum sociis natoque.</p>
                </div>
            </div>
            <div class= "col-lg-4">
                <div class="p-3 text-center">
                <h2>Satoshi Kamiya</h2>
                <figure class="p-1" onMouseOver={showCaption} onMouseOut={hideCaption}>
                    <img class="img-fluid mx-auto d-block rounded" src="../assets/images/person2_1.jpg" alt="Pic of Satoshi Kamiya" />
                    <figcaption class="text-center invisible">Origami Artist Satoshi Kamiya</figcaption>
                </figure>
                <p class= "p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Vestibulum lectus mauris ultrices eros in. Diam donec adipiscing tristique risus nec feugiat in fermentum. Elit eget gravida cum sociis natoque.</p>
                </div>
            </div>
            <div class= "col-lg-4">
                <div class="p-3 text-center">
                <h2>Robert Lang</h2>
                <figure class="p-1" onMouseOver={showCaption} onMouseOut={hideCaption}>
                    <img class="img-fluid mx-auto d-block rounded" src="../assets/images/person32.jpg" alt="Pic of Robert Lang" />
                    <figcaption class="text-center invisible">Origami Artist and Physicist Robert Lang</figcaption>
                </figure>
                <p class= "p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Vestibulum lectus mauris ultrices eros in. Diam donec adipiscing tristique risus nec feugiat in fermentum. Elit eget gravida cum sociis natoque.</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    </main>
  );
  
  export default History;
