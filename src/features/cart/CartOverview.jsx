import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQty } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQty = useSelector(getTotalCartQty);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQty) return null;

  return (
    <div
      className="md:text-bas  flex items-center justify-between 
    bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6"
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQty} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
