import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const { title, info } = props;
  const [isShowInfo, setIsShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setIsShowInfo(!isShowInfo);
          }}
        >
          {isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isShowInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
