import React from "react";
import { Link } from "react-router-dom";

// Section of Importing Difrents Libraris
import Marquee from "react-fast-marquee";
import BlogCards from "../components/BlogCards";
import { blogData } from "../data/BlogData";

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
                    <p>
                      Usally peapol liked this <br /> headphon.
                    </p>
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
                    <p>
                      this message its test for <br /> container.
                    </p>
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
                    <p>
                      this message <br /> its test for container
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section two */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <i class="uil uil-truck"></i>
                  <div>
                    <h6>Free Shaping</h6>
                    <p className="mb-0">From all ordered over $100</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <i class="uil uil-forwaded-call"></i>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <i class="uil uil-trophy"></i>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% Off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <i class="uil uil-transaction"></i>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <i class="uil uil-percentage"></i>
                  <div>
                    <h6>Affordable Pries</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section three */}
      <section className="home-erapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/categories/camera.png" alt="categories" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>20 Items</p>
                  </div>
                  <img src="/images/categories/smart-tv.png" alt="categories" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart watch</h6>
                    <p>18 Items</p>
                  </div>
                  <img
                    src="/images/categories/smart-watch.png"
                    alt="categories"
                  />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Game</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="/images/categories/ps-controller.png"
                    alt="categories"
                  />
                </div>

                {/* section two */}

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Arabian Dress</h6>
                    <p>50 Items</p>
                  </div>
                  <img src="/images/categories/arab.png" alt="categories" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>home design</h6>
                    <p>8 Items</p>
                  </div>
                  <img src="/images/categories/dressing-table.png" alt="categories" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>kitchen</h6>
                    <p>18 Items</p>
                  </div>
                  <img
                    src="/images/categories/kitchen-room.png"
                    alt="categories"
                  />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Jewellery</h6>
                    <p>14 Items</p>
                  </div>
                  <img
                    src="/images/categories/earrings.png"
                    alt="categories"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section fore */}
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brands/brand-01.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brands/brand-02.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brands/brand-03.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brands/brand-04.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brands/brand-05.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brands/brand-06.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section five */}
      <section className="blog-erapper py-5 home-erapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            {
              blogData.map((blogs) =>{
                return(
                  <BlogCards blogs={blogs} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
