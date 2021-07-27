import ShowList from "../showList/ShowList";

const home = ({ shows, onDelete }) => {
  return (
    <div>
      <ShowList shows={shows} onDelete={onDelete} />
    </div>
  );
};

export default home;
