import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <i class="uil uil-newspaper"></i>
                <h2 className="mb-0 text-white">Sing up for Newsletter</h2>
              </div>
            </div>

            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="your Email Address"
                  aria-label="your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-1.5" id="basic-addon2">
                  Subescribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hon : 277 Near vill Abadan, <br /> Khoramshar, Shahed <br />
                  PinCode: 131103
                </address>
                <a href="tel:+98 9100817315" className="mt-2 d-block mb-1 text-white">
                  +98_9100817315
                </a>
                <a href="mailto:amiran.amirhossain@gmail.com" className="mt-3 d-block mb-0 text-white">
                  amiran.amirhossain@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-15 mt-4">

                  <i class="uil uil-instagram  text-white fs-4"></i>
                  <i class="uil uil-youtube  text-white fs-4"></i>
                  <i class="uil uil-facebook  text-white fs-4"></i>
                  <i class="uil uil-telegram  text-white fs-4"></i>

                </div>

              </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privecy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
              </div>
            </div>

            <div className="col-2">
              <h4 className="text-white mb-4">Quicl Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Hedphons</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center md-0 text-white">
                &copy; {new Date().getFullYear()}; Power by Amiran's Corners
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
