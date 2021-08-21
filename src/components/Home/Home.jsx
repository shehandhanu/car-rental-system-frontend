import React from "react";

const Home = () => {
  return (
    <div>
      <header className="masthead" id="hero">
        <div className="container">
          <div className="masthead-subheading">
            Welcome Black Code Car Rental
          </div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section bg-light" id="team">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={require("../../assets/img/team/1.jpg").default}
                  alt="..."
                />
                <h4>Shehan Dhanuddara</h4>
                <p class="text-muted">Lead Designer</p>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={require("../../assets/img/team/2.jpg").default}
                  alt="..."
                />
                <h4>Hashini Chamindi</h4>
                <p class="text-muted">Lead Marketer</p>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={require("../../assets/img/team/3.jpg").default}
                  alt="..."
                />
                <h4>Danuka Dilshan</h4>
                <p class="text-muted">Lead Developer</p>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="team-member">
                <img
                  class="mx-auto rounded-circle"
                  src={require("../../assets/img/team/4.jpg").default}
                  alt="..."
                />
                <h4>Janitha Tharaka</h4>
                <p class="text-muted">Lead Developer</p>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-dark btn-social mx-2" href="#!">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
