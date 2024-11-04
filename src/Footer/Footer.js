import React from "react";

// import Header from "../Header/Header";

const Footer = ({ not_main }) => {
  let footerClass = not_main ? "home__box__footer home__box__footer--not_main" : "home__box__footer";
  return (
    <>
      <div className={footerClass}>
        <a href="/" className="reset_link">
          <p className="home__box__footer__p">
            made<span className="home__box__footer__span"> by </span>
            <span className="home__box__footer__span">
              <a href="https://github.com/walaszczyk-k" target="_blank" rel="noreferrer">
                mrsw444
              </a>
            </span>
          </p>
        </a>
      </div>
    </>
  );
};

Footer.defaultProps = {
  not_main: false,
};

export default Footer;
