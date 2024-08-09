import { ButtonTrain } from "../../components/buttonTrain/ButtonTrainStyled";
import CardContentTextReceive from "../../components/CardContentTextReceive/CardContentTextReceive";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

function LearnPage() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const textLearnPage: string = "insira aqui o texto";
  const TrainYourListeningPage: string = "/train-your-listening";

  const handleTextChange = (value: string) => {
    setTextAreaValue(value);
    localStorage.setItem("textListen", value);
  };

  return (
    <>
      <Navbar />
      <CardContentTextReceive
        tituloText={textLearnPage}
        textAreaValue={textAreaValue}
        onTextChange={handleTextChange}
      />
      <Link style={{ textDecoration: "none" }} to={TrainYourListeningPage}>
        <ButtonTrain> train your listening </ButtonTrain>
      </Link>
    </>
  );
}

export default LearnPage;
