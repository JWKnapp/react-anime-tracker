import Show from "../show";

const ShowList = ({ shows, onDelete }) => {
  return (
    <>
      {shows.map((show) => (
        <Show key={show.id} show={show} onDelete={onDelete} />
      ))}
    </>
  );
};

export default ShowList;
