import { useState } from "react";
import cn from "classnames";
import "./MainItem.scss";

export const MainItem = ({
  name,
  logoUrl,
  form,
  companyName,
  web,
  address,
  requirement,
  responsibility,
}) => {
  const [textBtn, setTextBtn] = useState("more details");
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (textBtn === "more details") setTextBtn("close");
    else setTextBtn("more details");

    setOpen(!open);
  };

  return (
    <div className={open ? cn("vacancy", "vacancy--open") : "vacancy"}>
      <div className="vacancy-info">
        {logoUrl && (
          <div className="vacancy-info__image">
            <img src={logoUrl} alt="logo" className="vacancy-info__logo" />
          </div>
        )}
        <ul className="vacancy-info__list">
          <li className="vacancy-info__item">
            <span className="vacancy-info__specification">Form: </span>
            <span>{form}</span>
          </li>
          <li className="vacancy-info__item">
            <span className="vacancy-info__specification">Company: </span>
            <span>{companyName}</span>
          </li>
          <li className="vacancy-info__item">
            <span className="vacancy-info__specification">Web: </span>
            <a
              href={web}
              target="_blank"
              className="vacancy-info__link"
              rel="noreferrer"
            >
              {web}
            </a>
          </li>

          <li className="vacancy-info__item">
            <span className="vacancy-info__specification">Address: </span>
            <span>{address}</span>
          </li>
        </ul>
      </div>
      <div className="vacancy-description">
        <h3 className="vacancy-description__name">{name}</h3>
        {responsibility && (
          <p className="vacancy-description__text">{responsibility}</p>
        )}
        {requirement && (
          <p className="vacancy-description__text">{requirement}</p>
        )}
        <p className="vacancy-description__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at
          mollitia, possimus deserunt quas adipisci aperiam, natus optio sunt
          explicabo magnam facilis reiciendis, repellendus quasi molestias et!
          Deserunt consectetur accusantium sed voluptatem illum sint magni ea
          dicta sit fugit dolore enim neque odit fugiat dignissimos, voluptate,
          veniam labore ducimus natus recusandae earum animi. Tempora delectus
          expedita odio provident laborum libero eius at recusandae quos
          mollitia fugiat inventore fuga consequatur perspiciatis nostrum
          commodi veniam ut, nemo sapiente sequi ducimus, voluptatem ad a cum.
          Ducimus, repudiandae aspernatur natus eos ullam quas sint quam
          corrupti cupiditate deleniti neque impedit architecto, soluta, quod
          eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          soluta asperiores tempore magnam repellat necessitatibus totam
          officiis, nulla doloribus consequuntur? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maxime vero autem nemo dignissimos est
          quod iusto, natus vel odio illo itaque praesentium dolor aspernatur
          nisi cum quam culpa ut consequuntur sequi sit iure blanditiis. Optio,
          doloremque voluptas eveniet voluptatibus voluptatem, voluptates earum
          cupiditate animi, nisi modi eius rem officiis ea?
        </p>
        <div className="vacancy-description__shadow"></div>
        <div className="vacancy-description__button">
          <button className="vacancy-description__btn" onClick={handleClick}>
            {textBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
