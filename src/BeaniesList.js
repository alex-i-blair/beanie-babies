import { Link } from 'react-router-dom';
import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className="beanies">
      {beanieBabies.map((baby, i) => (
        <BeanieBaby key={baby + i} baby={baby} />
      ))}
      {/* render out the beanie babies as a list */}
    </div>
  );
}
