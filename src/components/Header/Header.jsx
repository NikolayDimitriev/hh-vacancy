import { SortForm } from "../SortForm/SortForm";

export const Header = () => {
  return <header className="header">
    <h1 className="title">List of vacancies</h1>
    <SortForm />
  </header>;
};
