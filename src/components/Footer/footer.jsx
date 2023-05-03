import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer class="bg-light text-center">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          {/* workintech@somosf5.org */}

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39;" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac;" }}
            href="#!"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/victor-wdfs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaLinkedin className="contact-icon p-2" />
          </a>
          <a
            href="https://github.com/oliverio89"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaGithub className="contact-icon p-2" />
          </a>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a class="text-white" href="https://www.linkedin.com/in/victor-wdfs/">
          Víctor Moreno García
        </a>
      </div>
    </footer>
  );
}

export default Footer;
