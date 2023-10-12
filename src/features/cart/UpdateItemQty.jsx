import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQty, increaseItemQty } from './cartSlice';

function UpdateItemQty({ pizzaId, currentQty }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQty}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQty;
