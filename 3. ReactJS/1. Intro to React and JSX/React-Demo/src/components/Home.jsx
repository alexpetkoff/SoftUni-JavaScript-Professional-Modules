export default function Home() {
   return (
      <>
         <div className="hero_area">

            <div className="hero_bg_box">
               <div className="bg_img_box">
                  <img src="images/hero-bg.png" alt="" />
               </div>
            </div>

            <header className="header_section">
               <div className="container-fluid">
                  <nav className="navbar navbar-expand-lg custom_nav-container ">
                     <a className="navbar-brand" href="index.html">
                        <span>
                           Finexo
                        </span>
                     </a>

                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                     </button>

                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                           <li className="nav-item active">
                              <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="about.html"> About</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="service.html">Services</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="why.html">Why Us</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="team.html">Team</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a>
                           </li>
                           <form className="form-inline">
                              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                 <i className="fa fa-search" aria-hidden="true"></i>
                              </button>
                           </form>
                        </ul>
                     </div>
                  </nav>
               </div>
            </header>

            <section className="slider_section ">
               <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container ">
                           <div className="row">
                              <div className="col-md-6 ">
                                 <div className="detail-box">
                                    <h1>
                                       Crypto <br />
                                       Currency
                                    </h1>
                                    <p>
                                       Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                    </p>
                                    <div className="btn-box">
                                       <a href="" className="btn1">
                                          Read More
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="img-box">
                                    <img src="images/slider-img.png" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item ">
                        <div className="container ">
                           <div className="row">
                              <div className="col-md-6 ">
                                 <div className="detail-box">
                                    <h1>
                                       Crypto <br />
                                       Currency
                                    </h1>
                                    <p>
                                       Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                    </p>
                                    <div className="btn-box">
                                       <a href="" className="btn1">
                                          Read More
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="img-box">
                                    <img src="images/slider-img.png" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container ">
                           <div className="row">
                              <div className="col-md-6 ">
                                 <div className="detail-box">
                                    <h1>
                                       Crypto <br />
                                       Currency
                                    </h1>
                                    <p>
                                       Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                    </p>
                                    <div className="btn-box">
                                       <a href="" className="btn1">
                                          Read More
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="img-box">
                                    <img src="images/slider-img.png" alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <ol className="carousel-indicators">
                     <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                     <li data-target="#customCarousel1" data-slide-to="1"></li>
                     <li data-target="#customCarousel1" data-slide-to="2"></li>
                  </ol>
               </div>

            </section>
         </div>



         <section className="service_section layout_padding">
            <div className="service_container">
               <div className="container ">
                  <div className="heading_container heading_center">
                     <h2>
                        Our <span>Services</span>
                     </h2>
                     <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                     </p>
                  </div>
                  <div className="row">
                     <div className="col-md-4 ">
                        <div className="box ">
                           <div className="img-box">
                              <img src="images/s1.png" alt="" />
                              /                        </div>
                           <div className="detail-box">
                              <h5>
                                 Currency Wallet
                              </h5>
                              <p>
                                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 The
                                 point of using
                              </p>
                              <a href="">
                                 Read More
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-4 ">
                        <div className="box ">
                           <div className="img-box">
                              <img src="images/s2.png" alt="" />
                              /                        </div>
                           <div className="detail-box">
                              <h5>
                                 Security Storage
                              </h5>
                              <p>
                                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 The
                                 point of using
                              </p>
                              <a href="">
                                 Read More
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-4 ">
                        <div className="box ">
                           <div className="img-box">
                              <img src="images/s3.png" alt="" />
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Expert Support
                              </h5>
                              <p>
                                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                 The
                                 point of using
                              </p>
                              <a href="">
                                 Read More
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="btn-box">
                     <a href="">
                        View All
                     </a>
                  </div>
               </div>
            </div>
         </section>




         <section className="about_section layout_padding">
            <div className="container  ">
               <div className="heading_container heading_center">
                  <h2>
                     About <span>Us</span>
                  </h2>
                  <p>
                     Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
                  </p>
               </div>
               <div className="row">
                  <div className="col-md-6 ">
                     <div className="img-box">
                        <img src="images/about-img.png" alt="" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="detail-box">
                        <h3>
                           We Are Finexo
                        </h3>
                        <p>
                           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                           in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                           are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                           the middle of text. All
                        </p>
                        <p>
                           Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                        </p>
                        <a href="">
                           Read More
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>



         <section className="why_section layout_padding">
            <div className="container">
               <div className="heading_container heading_center">
                  <h2>
                     Why Choose <span>Us</span>
                  </h2>
               </div>
               <div className="why_container">
                  <div className="box">
                     <div className="img-box">
                        <img src="images/w1.png" alt="" />
                        /                  </div>
                     <div className="detail-box">
                        <h5>
                           Expert Management
                        </h5>
                        <p>
                           Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                           Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                     </div>
                  </div>
                  <div className="box">
                     <div className="img-box">
                        <img src="images/w2.png" alt="" />
                        /                  </div>
                     <div className="detail-box">
                        <h5>
                           Secure Investment
                        </h5>
                        <p>
                           Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                           Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                     </div>
                  </div>
                  <div className="box">
                     <div className="img-box">
                        <img src="images/w3.png" alt="" />
                        /                  </div>
                     <div className="detail-box">
                        <h5>
                           Instant Trading
                        </h5>
                        <p>
                           Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                           Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                     </div>
                  </div>
                  <div className="box">
                     <div className="img-box">
                        <img src="images/w4.png" alt="" />
                        /                  </div>
                     <div className="detail-box">
                        <h5>
                           Happy Customers
                        </h5>
                        <p>
                           Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                           Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                        </p>
                     </div>
                  </div>
               </div>
               <div className="btn-box">
                  <a href="">
                     Read More
                  </a>
               </div>
            </div>
         </section>


         <section className="team_section layout_padding">
            <div className="container-fluid">
               <div className="heading_container heading_center">
                  <h2 className="">
                     Our <span> Team</span>
                  </h2>
               </div>

               <div className="team_container">
                  <div className="row">
                     <div className="col-lg-3 col-sm-6">
                        <div className="box ">
                           <div className="img-box">
                              <img src="images/team-1.jpg" className="img1" alt="" />
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Joseph Brown
                              </h5>
                              <p>
                                 Marketing Head
                              </p>
                           </div>
                           <div className="social_box">
                              <a href="#">
                                 <i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-linkedin" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-youtube-play" aria-hidden="true"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="box ">
                           <div className="img-box">
                              <img src="images/team-2.jpg" className="img1" alt="" />
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Nancy White
                              </h5>
                              <p>
                                 Marketing Head
                              </p>
                           </div>
                           <div className="social_box">
                              <a href="#">
                                 <i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-linkedin" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-youtube-play" aria-hidden="true"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="box ">
                           <div className="img-box">
                              <img src="images/team-3.jpg" className="img1" alt="" />
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Earl Martinez
                              </h5>
                              <p>
                                 Marketing Head
                              </p>
                           </div>
                           <div className="social_box">
                              <a href="#">
                                 <i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-linkedin" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-youtube-play" aria-hidden="true"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="box ">
                           <div className="img-box">
                              <img src="images/team-4.jpg" className="img1" alt="" />
                           </div>
                           <div className="detail-box">
                              <h5>
                                 Josephine Allard
                              </h5>
                              <p>
                                 Marketing Head
                              </p>
                           </div>
                           <div className="social_box">
                              <a href="#">
                                 <i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-linkedin" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                              <a href="#">
                                 <i className="fa fa-youtube-play" aria-hidden="true"></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>



         <section className="client_section layout_padding">
            <div className="container">
               <div className="heading_container heading_center psudo_white_primary mb_45">
                  <h2>
                     What says our <span>Customers</span>
                  </h2>
               </div>
               <div className="carousel-wrap ">
                  <div className="owl-carousel client_owl-carousel">
                     <div className="item">
                        <div className="box">
                           <div className="img-box">
                              <img src="images/client1.jpg" alt="" className="box-img" />
                           </div>
                           <div className="detail-box">
                              <div className="client_id">
                                 <div className="client_info">
                                    <h6>
                                       LusDen
                                    </h6>
                                    <p>
                                       magna aliqua. Ut
                                    </p>
                                 </div>
                                 <i className="fa fa-quote-left" aria-hidden="true"></i>
                              </div>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="box">
                           <div className="img-box">
                              <img src="images/client2.jpg" alt="" className="box-img" />
                           </div>
                           <div className="detail-box">
                              <div className="client_id">
                                 <div className="client_info">
                                    <h6>
                                       Zen Court
                                    </h6>
                                    <p>
                                       magna aliqua. Ut
                                    </p>
                                 </div>
                                 <i className="fa fa-quote-left" aria-hidden="true"></i>
                              </div>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="box">
                           <div className="img-box">
                              <img src="images/client1.jpg" alt="" className="box-img" />
                           </div>
                           <div className="detail-box">
                              <div className="client_id">
                                 <div className="client_info">
                                    <h6>
                                       LusDen
                                    </h6>
                                    <p>
                                       magna aliqua. Ut
                                    </p>
                                 </div>
                                 <i className="fa fa-quote-left" aria-hidden="true"></i>
                              </div>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="box">
                           <div className="img-box">
                              <img src="images/client2.jpg" alt="" className="box-img" />
                           </div>
                           <div className="detail-box">
                              <div className="client_id">
                                 <div className="client_info">
                                    <h6>
                                       Zen Court
                                    </h6>
                                    <p>
                                       magna aliqua. Ut
                                    </p>
                                 </div>
                                 <i className="fa fa-quote-left" aria-hidden="true"></i>
                              </div>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>




         <section className="info_section layout_padding2">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 col-lg-3 info_col">
                     <div className="info_contact">
                        <h4>
                           Address
                        </h4>
                        <div className="contact_link_box">
                           <a href="">
                              <i className="fa fa-map-marker" aria-hidden="true"></i>
                              <span>
                                 Location
                              </span>
                           </a>
                           <a href="">
                              <i className="fa fa-phone" aria-hidden="true"></i>
                              <span>
                                 Call +01 1234567890
                              </span>
                           </a>
                           <a href="">
                              <i className="fa fa-envelope" aria-hidden="true"></i>
                              <span>
                                 demo@gmail.com
                              </span>
                           </a>
                        </div>
                     </div>
                     <div className="info_social">
                        <a href="">
                           <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                           <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                           <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="">
                           <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3 info_col">
                     <div className="info_detail">
                        <h4>
                           Info
                        </h4>
                        <p>
                           necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                        </p>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-2 mx-auto info_col">
                     <div className="info_link_box">
                        <h4>
                           Links
                        </h4>
                        <div className="info_links">
                           <a className="active" href="index.html">
                              Home
                           </a>
                           <a className="" href="about.html">
                              About
                           </a>
                           <a className="" href="service.html">
                              Services
                           </a>
                           <a className="" href="why.html">
                              Why Us
                           </a>
                           <a className="" href="team.html">
                              Team
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3 info_col ">
                     <h4>
                        Subscribe
                     </h4>
                     <form action="#">
                        <input type="text" placeholder="Enter email" />
                        <button type="submit">
                           Subscribe
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </section>


         <section className="footer_section">
            <div className="container">
               <p>
                  &copy; <span id="displayYear"></span> All Rights Reserved By
                  <a href="https://html.design/">Free Html Templates</a>
               </p>
            </div>
         </section>

         <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
         <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
         </script>
         <script type="text/javascript" src="js/bootstrap.js"></script>
         <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
         </script>
         <script type="text/javascript" src="js/custom.js"></script>
         <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap">
         </script>

      </>
   )
}