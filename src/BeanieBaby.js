import { Link } from 'react-router-dom';

export default function BeanieBaby({ baby }) {
  return (
    <Link to={`/beanie-babies/${baby.id}`}>
      <div className="beanie-baby">
        {baby.title}
        <img className="beanie-img" src={baby.image} />
      </div>
    </Link>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    // null
  );
}
