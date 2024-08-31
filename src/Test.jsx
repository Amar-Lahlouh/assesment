import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import articles from "./data";

function Test() {
  const [inputValue, setInputValue] = useState("");

  function HandleSubmit(e) {
    setInputValue(e.target.value.toLowerCase());
  }

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    console.log("parts", parts);
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ backgroundColor: "yellow" }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const items = articles.filter(
    (k) =>
      k.description.toLowerCase().includes(inputValue) ||
      k.title.toLowerCase().includes(inputValue)
  );

  return (
    <div className="main">
      <div className="f1">
        <div>
          <h3 className="search">Search</h3>
          <div className="form">
            <input
              type="text"
              placeholder="Search..."
              className="in"
              onChange={HandleSubmit}
              value={inputValue}
            />
            {inputValue ? (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setInputValue("")}
              />
            ) : (
              <FontAwesomeIcon icon={faSearch} />
            )}
          </div>
          <p>
            <span className="num">{items.length} posts</span> were found.
          </p>
        </div>
        <div className="p">
          <p>
            <span>bitsofcode.</span> Articles on Frontend development. All
            articles are written by Ire Aderinokun, Frontend Developer and user
            Interface Designer.
          </p>
          <div>
            <button className="btn-1">
              <FontAwesomeIcon icon={faTwitter} />
              Follow @ireaderinokum
            </button>
            <button>19.1K followers</button>
          </div>
        </div>
      </div>

      <div>
        {items.map((k) => (
          <div key={k.title} className="comp">
            <h2>{getHighlightedText(k.title, inputValue)}</h2>
            <span>{k.date}</span>
            <p>{getHighlightedText(k.description, inputValue)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
