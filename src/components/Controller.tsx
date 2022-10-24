import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { themeModeAtom } from "../atoms";

const Controller = () => {
  const setDarkAtom = useSetRecoilState(themeModeAtom);
  const toggleSwitch = () => setDarkAtom((prev: boolean) => !prev);
  return (
    <>
      <button>
        <Link to="/">Main</Link>
      </button>
      <button onClick={toggleSwitch}>Toggle Mode</button>
    </>
  );
};

export default Controller;
