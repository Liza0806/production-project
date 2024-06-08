import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.incremented());
    };
    const decrement = () => {
        dispatch(counterActions.decremented());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <button data-testid="increment-btn" onClick={increment}>inc</button>
            <button data-testid="decrement-btn" onClick={decrement}>dec</button>
        </div>
    );
};
