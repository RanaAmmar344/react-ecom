import { useDispatch, useSelector } from "react-redux";
import buyCake from "../../redux/cakes/cakeActions";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => {
    console.log("SELECTOR STATE: ", state);
    return state;
  });

  const buyCakeClickHandler = () => {
    dispatch(buyCake());
  };

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={buyCakeClickHandler}>Buy Cake</button>
      <h2>Num of cakes bought: {selectorState.totalNumOfCakesBought}</h2>
    </>
  );
};

export default Home;
