import { useState, useEffect } from "react";
import CardContentTextListen from "../../components/CardContentListen/CardContentTextListen";
import CardContentWrite from "../../components/CardContentWrite/CardContentWrite";
import Navbar from "../../components/navbar/Navbar";

function TrainYourListening() {
  const [obfuscatedText, setObfuscatedText] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");
  const originalText: any = localStorage.getItem("textListen");
  const textTrainListening: string = "escute seu texto";

  function obfuscateText(text: string): string {
    return text.replace(/\S/g, "_"); // Replace each non-space character with an underscore
  }

  function revealText(originalText: string, typedText: string): string {
    let revealedText = "";
    for (let i = 0; i < originalText.length; i++) {
      if (typedText[i] === originalText[i]) {
        revealedText += originalText[i];
      } else {
        revealedText += "_"; // or use any other character to hide the text
      }
    }
    return revealedText;
  }

  useEffect(() => {
    setObfuscatedText(obfuscateText(originalText));
  }, [originalText]);

  const handleTyping = (input: string) => {
    setTypedText(input);
    const revealedText = revealText(originalText, input);
    setObfuscatedText(revealedText);
  };

  return (
    <>
      <Navbar />
      <CardContentTextListen
        tituloText={textTrainListening}
        textAreaValue={obfuscatedText}
      />
      <CardContentWrite
        tituloText="digite oque você ouve"
        textAreaValue={typedText}
        onTextChange={handleTyping}
      />
    </>
  );
}

export default TrainYourListening;
