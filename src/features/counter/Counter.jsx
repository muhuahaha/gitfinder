import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-center text-stone-50">
        <button
          className="bg-red-700 p-4 "
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          type="button"
        >
          > Increment
        </button>
        <span className="btn btn-ghost btn-sm rounded-btn m-3 w-9">{count}</span>
        <button
          className="bg-red-700 p-4 text-cyan-300"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          type="button"
        >
          > Decrement
        </button>
      </div>
    </div>
  );
}
