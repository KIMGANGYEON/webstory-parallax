import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonBox = styled.div`
  .Box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    button {
      padding: 30px;
      font-size: 30px;
    }
  }
`;

function Home() {
  return (
    <>
      <ButtonBox>
        <div className="Box">
          <Link to={"/Project01"}>
            <button>Porject1</button>
          </Link>
          <Link to={"/Project01"}>
            <button>Porject2</button>
          </Link>{" "}
          <Link to={"/Project01"}>
            <button>Porject3</button>
          </Link>
        </div>
      </ButtonBox>
    </>
  );
}

export default Home;
