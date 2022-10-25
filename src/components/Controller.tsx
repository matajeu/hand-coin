import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { themeModeAtom } from "../atoms";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: yellowgreen;
`;

const Controller = () => {
  const setDarkAtom = useSetRecoilState(themeModeAtom);
  const toggleSwitch = () => setDarkAtom((prev: boolean) => !prev);
  return (
    <Container>
      <button>
        <Link to="/">Main</Link>
      </button>
      <button onClick={toggleSwitch}>Toggle Mode</button>
    </Container>
  );
};

export default Controller;
