import { useState } from "react";
import cn from "classnames";
import InputMask from "react-input-mask";

import {
  validateName,
  validateEmail,
  validatePhone,
  checkEmpty,
} from "../../utilts/validateForm";
import "./Footer.scss";

export const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleInput = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;

    switch (targetId) {
      case "name":
        setName(targetValue);
        if (validateName(targetValue)) setNameError(true);
        else setNameError(false);
        break;
      case "email":
        setEmail(targetValue);
        if (!validateEmail(targetValue)) setEmailError(true);
        else setEmailError(false);
        break;
      case "phone":
        setPhone(targetValue);
        if (validatePhone(targetValue)) setPhoneError(true);
        else setPhoneError(false);
        break;
      case "comment":
        setComment(targetValue);
        break;
      default:
        return;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      checkEmpty(name, email, phone, setNameError, setEmailError, setPhoneError)
    )
      return;

    if (emailError || nameError || phoneError) return;

    alert(`
        Name: ${name}
        Email: ${email}
        Phone number: ${phone}
        ${comment !== "" ? `Comment: ${comment}` : ""}
      `);

    setName("");
    setEmail("");
    setPhone("");
    setComment("");
  };

  return (
    <footer className="footer">
      <h2 className="footer__title">Leave a request</h2>
      <div className="footer-wrapper">
        <form className="footer-form" onSubmit={submitForm}>
          <div className="footer-form__elem">
            <label htmlFor="name" className="footer-form__label">
              Your name
            </label>
            <input
              type="text"
              className={
                nameError
                  ? cn("footer-form__input", "footer-form__input--invalid")
                  : "footer-form__input"
              }
              id="name"
              value={name}
              onChange={handleInput}
              placeholder="Please introduce yourself"
            />
          </div>
          <div className="footer-form__elem">
            <label htmlFor="email" className="footer-form__label">
              Email
            </label>
            <input
              type="email"
              className={
                emailError
                  ? cn("footer-form__input", "footer-form__input--invalid")
                  : "footer-form__input"
              }
              id="email"
              value={email}
              onChange={handleInput}
              placeholder="ivanov@mail.ru"
            />
          </div>
          <div className="footer-form__elem">
            <label htmlFor="phone" className="footer-form__label">
              Phone number
            </label>
            <InputMask
              type="tel"
              mask="+7(999)999-99-99"
              maskChar="X"
              className={
                phoneError
                  ? cn("footer-form__input", "footer-form__input--invalid")
                  : "footer-form__input"
              }
              id="phone"
              value={phone}
              onChange={handleInput}
              placeholder="+7 (999) 123-45-78"
            />
          </div>
          <div className="footer-form__elem">
            <label htmlFor="comment" className="footer-form__label">
              Comment
            </label>
            <input
              type="text"
              className="footer-form__input"
              id="comment"
              value={comment}
              onChange={handleInput}
              placeholder="Message text"
            />
          </div>
          <button className="footer-form__button" type="submit">
            Send
          </button>

          <div className="footer-form__accept">
            By clicking "Send" you confirm your consent to the&ensp;
            <span className="footer-form__link">
              processing of personal data
            </span>
          </div>
        </form>
        <div className="footer-contact">
          <span className="footer-contact__text">
            We will advise you and help you start
            <br /> a new project
          </span>
          <div className="footer-contact__links">
            <a href="tel:+7 499 391-66-69" className="footer-contact__phone">
              +7 499 391-66-69
            </a>
            <a
              href="mailto:mail@greensight.ru"
              className="footer-contact__email"
            >
              mail@greensight.ru
            </a>
          </div>
          <div className="footer-contact__address">
            <span>
              Moscow, Zelenograd, Central Ave., <br /> bldg. 305, 3rd floor
            </span>
            <span className="footer-contact__way">How to get there?</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
