import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store/store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-red-400">
        <button className="red-300" onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
      <div>{count}</div>
      <div className="bg-red-400">
        <button className="red-300" onClick={() => dispatch(decrement())}>
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
