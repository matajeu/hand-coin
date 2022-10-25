import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { themeModeAtom } from "../atoms";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

const BackButton = styled(Wrapper)`
  width: 3rem;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.accentColor};
  border: none;
  border-radius: 50%;
`;

const ToggleBtn = styled(Wrapper)``;

const ToggleInput = styled.input`
  display: none;
  &:checked + label {
    background-color: ${(props) => props.theme.accentColor};
  }
  &:checked + label:after {
    left: 50%;
  }
`;

const ToggleLabel = styled.label`
  display: inline-block;
  width: 4em;
  height: 2em;
  background-color: ${(props) => props.theme.accentColor};
  border-radius: 2em;
  padding: 0.1em;
  transition: all 0.4s ease;
  cursor: pointer;
  &:after {
    display: block;
    position: relative;
    content: "";
    width: 50%;
    height: 100%;
    left: 0%;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgColor};
    transition: all 0.2s ease;
  }
  &:before {
    display: none;
  }
`;

const Controller = () => {
  const [darkAtom, setDarkAtom] = useRecoilState(themeModeAtom);
  const location = useLocation();
  const toggleSwitch = () => setDarkAtom((prev: boolean) => !prev);
  return (
    <Container>
      {location.pathname === "/" ? (
        <Wrapper />
      ) : (
        <Link to="/">
          <BackButton>
            <FaArrowLeft />
          </BackButton>
        </Link>
      )}
      <ToggleBtn>
        <ToggleInput
          type="checkbox"
          id="toggle"
          checked={darkAtom}
          onChange={toggleSwitch}
        />
        <ToggleLabel htmlFor="toggle" />
      </ToggleBtn>
    </Container>
  );
};

export default Controller;
