/* eslint-disable jsx-a11y/anchor-is-valid */
import DefaultFooter from "../../components/DefaultFooter/DefaultFooter";
import ContactArea from "../../components/Sections/ContactArea/ContactArea";
import ProjectArea from "../../components/Sections/ProjectArea/ProjectArea";

function Projects() {
  return (
    <>
      <section class="generic-banner relative">
        <header class="default-header">
          <nav class="navbar navbar-expand-lg  navbar-light">
            <div class="container">
              <a class="navbar-brand" href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="text-white lnr lnr-menu"></span>
              </button>

              <div
                class="collapse navbar-collapse justify-content-end align-items-center"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/projects#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </section>
      <div class="main-wrapper">
        <ProjectArea />
        <ContactArea />
        <DefaultFooter />
      </div>
    </>
  );
}

export default Projects;
