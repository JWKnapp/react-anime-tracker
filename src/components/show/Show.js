import { FaTimes } from "react-icons/fa";

const Show = ({ show, onDelete }) => {
  return (
    <div className={`show ${show.id}`}>
      <h3>
        {show.name}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(show.id)}
        />
      </h3>
      <p>{show.description}</p>
    </div>
  );
};

export default Show;
