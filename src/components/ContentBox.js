const ContentBox = (props) => {
  return (
    <>
      <h3 className="main__content_container__box__header">{props.header}</h3>
      {props.content.map((c, idx) => {
        return <p className="main__content_container__box__content" key={idx}>{c}</p>
      })}
    </>
  );
};

export default ContentBox;
