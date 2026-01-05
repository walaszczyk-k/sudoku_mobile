import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__p">
        made<span className="footer__span"> by </span>
        <a
          href="https://github.com/walaszczyk-k"
          target="_blank"
          rel="noreferrer"
          className="footer__span reset_link"
        >
          mrsw444
        </a>
      </p>
    </footer>
  );
};

export default React.memo(Footer);
