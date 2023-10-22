import Button from "./components/Button/Button";
import CLSXButton from "./components/Button/CLSXButton";
import CVAButton from "./components/Button/CVAButton";

function App() {
  return (
    <>
      <div className="container">
        <h4>Dynamic Classnames</h4>
        <div className="box">
          <Button variant="solid" size="lg" radius="sm" type="danger">
            Vanilla
          </Button>
          <CLSXButton variant="solid" radius="md" size="lg" type="primary">
            CLSX
          </CLSXButton>
          <CVAButton variant="text" type="primary" size="lg">
            CVA
          </CVAButton>
        </div>
      </div>
    </>
  );
}

export default App;
