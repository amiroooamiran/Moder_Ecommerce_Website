import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    {/* section one */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p3">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="images/main-banner/main-banner-5.jpg"
                        className="img-fluid rounded-3"
                        alt="..."
                      />
                      <div className="main-banner-content position-absolute">
                        <h4>SUPERCHARGED FOR PRS.</h4>
                        <h5>Blou Youth Jaket .</h5>
                        <p>From $231.99 or $41.62/mo</p>
                        <Link className="button">BUY NOW</Link>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="images/main-banner/main-banner-6.jpg"
                        className="img-fluid rounded-3"
                        alt="..."
                      />
                      <div className="main-banner-content position-absolute">
                        <h4>SUPERCHARGED FOR PRS.</h4>
                        <h5>iPad S13+ Pro.</h5>
                        <p>From $999.00 or $41.62/mo</p>
                        <Link className="button">BUY NOW</Link>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="images/main-banner/main-banner-4.jpg"
                        className="img-fluid rounded-3"
                        alt="..."
                      />
                      <div className="main-banner-content position-absolute">
                        <h4>SUPERCHARGED FOR PRS.</h4>
                        <h5>Sport Sout.</h5>
                        <p>Just $159.00</p>
                        <Link className="button">BUY NOW</Link>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">

              <div className="small-banner position-relative">
                  <img
                    src="images/small-banner/small-banner-1.png"
                    className="img-fluid rounded-1"
                    alt="small baner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Tablets</h4>
                    <h5>Thea Best Ipad</h5>
                    <p>from $660 to $999.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="images/small-banner/small-banner-2.png"
                    className="img-fluid rounded-1"
                    alt="small baner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Headphons</h4>
                    <h5>Logitect headphon</h5>
                    <p>Usally peapol liked this <br /> headphon.</p>
                  </div>
                </div>


                <div className="small-banner position-relative">
                  <img
                    src="images/small-banner/small-banner-3.png"
                    className="img-fluid rounded-1"
                    alt="small baner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Laptops</h4>
                    <h5>Mack Book m2 </h5>
                    <p>this message its test for <br/> container.</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="images/small-banner/small-banner-4.png"
                    className="img-fluid rounded-1"
                    alt="small baner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Whatchs</h4>
                    <h5>test h5 from me</h5>
                    <p>this message <br/> its test for container</p>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* section two */}
      <section className="home-wrapper-2 py-5">
        <div className="cotainer-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
