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
  return (
    <div className="vacancy">
      <div className="vacancy-info">
        {logoUrl && (
          <img src={logoUrl} alt="logo" className="vacancy-info__logo" />
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
        <div className="vacancy-description__responsibility">
          {responsibility}
        </div>
        <div className="vacancy-description__requirement">{requirement}</div>
        <div className="vacancy-description__shadow"></div>
      </div>
    </div>
  );
};
