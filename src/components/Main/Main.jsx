import { useDispatch, useSelector } from "react-redux";
import { MainItem } from "../MainItem/MainItem";
import { showMoreVacancies } from "../../redux/actions";
import "./Main.scss";

export const Main = () => {
  const vacancies = useSelector((state) => state.vacancies);
  const isSorting = useSelector((state) => state.isSorting);

  const dispatch = useDispatch();

  const handleBtnClick = (e) => {
    e.preventDefault();

    dispatch(showMoreVacancies());
  };

  return (
    <main className="main">
      {vacancies.map((item) => (
        <MainItem
          key={item.id}
          name={item.name}
          logoUrl={item.employer.logo_urls && item.employer.logo_urls.original}
          form={item.schedule.name}
          companyName={item.employer.name}
          web={item.employer.alternate_url}
          address={
            item.address
              ? item.address.raw
                ? item.address.raw
                : "Россия"
              : "Россия"
          }
          requirement={item.snippet.requirement}
          responsibility={item.snippet.responsibility}
        />
      ))}
      {vacancies.length < 20 && !isSorting && (
        <div className="main-button">
          <button className="main-button__btn" onClick={handleBtnClick}>
            Show more
          </button>
        </div>
      )}
    </main>
  );
};
