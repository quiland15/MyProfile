import React from "react";

const Slides = () => {
    return (
    <div className="slides">
     <div className="slide" id="1">
         <div className="content first-content">
           <div className="container-fluid">
               <div className="col-md-3">
                   <div className="author-image"><img src="img/299332889_3209029129411135_7537361851767170704_n.jpg" alt="Author Image"/></div>
               </div>
               <div className="col-md-9">
                   <h2>Quiland Mark Nico Wenas</h2>
                   <p> Saya Seorang Full Stack Developer berpengalaman, ahli dalam mengembangkan aplikasi web dan mobile efisien dan berkinerja tinggi. Terbuka untuk freelance dan side hustle, komitmen pada hasil terbaik.</p>
                   <div class="main-btn"><a href="#2">Read More</a></div>
                   <div class="fb-btn"><a rel="nofollow" href="https://www.linkedin.com/in/quiland-wenas-5102a8222/">My LinkedIn</a></div>
               </div>
           </div>
         </div>
     </div>
     <div className="slide" id="2">
         <div className="content second-content">
             <div className="container-fluid">
                 <div className="col-md-6">
                     <div className="left-content">
                         <h2>About Me</h2>
                         <p>
                           Saya adalah Full Stack Developer berpengalaman yang telah sukses mengembangkan aplikasi web dan mobile yang efisien dan inovatif. Keahlian saya di bidang front-end mencakup penggunaan ReactJS, Vue.js, dan Angular untuk menciptakan antarmuka pengguna yang responsif dan menarik. Di sisi back-end, saya memiliki pengalaman dalam Node.js, Python, dan Java, dengan fokus pada desain arsitektur backend yang skalabel dan performa tinggi. Saya dikenal sebagai seseorang yang tekun dalam menghadapi tantangan teknis yang kompleks, dengan kemampuan unggul dalam debugging dan pengoptimalan performa aplikasi.
                         </p>
                         <div class="main-btn"><a href="#3">Read More</a></div>
                   </div>
                 </div>
                 <div className="col-md-6">
                     <div className="right-image">
                       <img src="/img/about_image.jpg" alt=""/>
                   </div>
                 </div>
             </div>
         </div>
     </div>
     <div className="slide" id="3">
        <div className="content third-content">
            <div className="container-fluid">
                <div className="col-md-12">
                    <div className="row">
                        <div className="first-section">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="left-content">
                                            <h2>
                                                Front-end
                                            </h2>
                                            <p>Kami berhasil mengembangkan proyek front-end yang mengintegrasikan ReactJS dan Angular untuk menciptakan antarmuka pengguna yang modern dan responsif. Proyek ini tidak hanya memenuhi kebutuhan fungsional klien, tetapi juga meningkatkan pengalaman pengguna dengan desain UI/UX yang intuitif dan estetis.</p>
                                            {/* <div class="main-btn"><a href="#4">Continue Reading</a></div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="right-image">
                                            <img src="img/38de1406d3304de296b3b08dd4af51c7f2db59e2.jpg" alt="first service"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-section">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="left-image">
                                            <img src="/img/second_service.jpg" alt="second service"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="right-content">
                                            <h2>Back-end</h2>
                                            <p>Kami berhasil mengimplementasikan proyek back-end untuk pemerintah yang menggunakan Node.js dan Python. Proyek ini dirancang untuk mengelola data sensitif dengan aman dan efisien, memastikan kepatuhan terhadap regulasi yang ketat serta ketersediaan layanan yang tinggi untuk melayani kebutuhan masyarakat secara optimal.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     {/* <div className="slide" id="4">
        <div className="content fourth-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/first_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number One</h2>
                                        <p>Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/first_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/second_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number Two</h2>
                                        <p>Donec eget dictum tellus. Curabitur a interdum diam. Nulla vestibulum porttitor porta.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/second_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/third_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number Three</h2>
                                        <p>Cras varius dolor et augue fringilla, eu commodo sapien iaculis.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/third_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/fourth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number Four</h2>
                                        <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/fourth_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/fifth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Fifth Item</h2>
                                        <p>Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/fifth_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/sixth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Sixth Item</h2>
                                        <p>Maecenas dapibus neque sed nisl consectetur, id semper nisi egestas.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/sixth_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/seventh_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number Seven</h2>
                                        <p>Etiam aliquet, est id varius fringilla, eros libero pellentesque lectus.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/seventh_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/eight_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number Eight</h2>
                                        <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/eight_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/ninth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number Nine</h2>
                                        <p>Orci varius natoque penatibus et magnis dis parturient montes.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/ninth_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/fifth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Number Ten</h2>
                                        <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/fifth_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/first_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Eleventh Item</h2>
                                        <p>Cras varius dolor et augue fringilla, eu commodo sapien iaculis.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/first_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="img/second_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                    <div className="hover-content">
                                        <h2>Twelvth Item</h2>
                                        <p>Etiam tincidunt magna ex, sit amet lobortis felis bibendum id.</p>
                                    </div>
                                </div></a>
                                <div className="image">
                                    <img src="/img/second_item.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div> */}
      <div className="slide" id="5">
        <div className="content fifth-content">
            <div className="container-fluid">
                <div className="col-md-6">
                    <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d997.1451883596454!2d125.10447326947961!3d1.4271073405992383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjUnMzcuNiJOIDEyNcKwMDYnMTguNCJF!5e0!3m2!1sid!2sid!4v1719799226931!5m2!1sid!2sid" width="400" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-md-6">
                    <form id="contact" action="" method="post">
                        <div className="row">
                            <div className="col-md-12">
                              <fieldset>
                                <input className="name" type="text" class="form-control" id="name" placeholder="Your name..." required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <input className="email" type="email" class="form-control" id="email" placeholder="Your email..." required=""/>
                              </fieldset>
                            </div>
                             <div className="col-md-12">
                              <fieldset>
                                <input className="subject" type="text" class="form-control" id="subject" placeholder="Subject..." required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <textarea className="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="btn">Send Now</button>
                              </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Slides