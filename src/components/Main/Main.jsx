import { useSelector } from "react-redux";
import { MainItem } from "../MainItem/MainItem";

export const Main = () => {
  const vacancies = useSelector((state) => state.vacancies);

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
    </main>
  );
};
