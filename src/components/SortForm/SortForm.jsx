import { useState } from "react";
import "./SortForm.css";
import arrow from "../../assets/arrow.svg";
import clear from "../../assets/clear.svg";
import cn from "classnames";

export const SortForm = () => {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const selectForm = (e) => {
    if (e.target.classList.contains("select-list__item")) {
      setInputText(e.target.textContent);
      setOpen(false);
    }
  };

  const resetSort = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    setInputText("");
    setOpen(false);
  };

  return (
    <form className="header-form">
      <div className="header-form__block">
        <div className="header-form__item">
          <label className="header-form__label">Form</label>
          <div className="header-form__select" onClick={handleClick}>
            <input
              className="header-form__input"
              readOnly
              placeholder="Not selected"
              value={inputText}
            />
            <img
              src={arrow}
              alt="open arrow"
              className={
                open
                  ? cn("header-form__arrow", "header-form__arrow--active")
                  : "header-form__arrow"
              }
            />
          </div>
          {open && (
            <div className="select">
              <ul className="select-list" onClick={selectForm}>
                <li className="select-list__item">Full time</li>
                <li className="select-list__item">Half time</li>
                <li className="select-list__item">Part time</li>
              </ul>
            </div>
          )}
        </div>

        <div className="header-form__item">
          <label className="header-form__label">Position</label>
          <input
            className="header-form__input"
            readOnly
            placeholder="Unspecifed"
          />
        </div>
      </div>
      <button className="header-button" onClick={resetSort}>
        <span className="header-button__text">Clear sorting</span>
        <img src={clear} alt="clear cross" />
      </button>
    </form>
  );
};
