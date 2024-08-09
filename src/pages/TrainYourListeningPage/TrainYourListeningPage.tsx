import CardContentTextListen from "../../components/CardContentListen/CardContentTextListen";
import CardContentWrite from "../../components/CardContentWrite/CardContentWrite";
import Navbar from "../../components/navbar/Navbar";

function TrainYourListening() {
  const textListen: any = localStorage.getItem("textListen");
  const textTrainListening: string = "escute seu texto";
  return (
    <>
      <Navbar />
      <CardContentTextListen
        tituloText={textTrainListening}
        textAreaValue={textListen}
      />
      <CardContentWrite tituloText="digite oque você ouve" textAreaValue="" />
    </>
  );
}

export default TrainYourListening;
