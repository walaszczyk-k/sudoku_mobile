import React from "react";

const ContentBox = ({ header, content }) => (
  <>
    <h3 className="main__content_container__box__header">{header}</h3>
    {content.map((paragraph, idx) => (
      <p className="main__content_container__box__content" key={idx}>
        {paragraph}
      </p>
    ))}
  </>
);

export default React.memo(ContentBox);
