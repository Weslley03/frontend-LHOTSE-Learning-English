import axios from "axios";
import {
  Container,
  DivTituloContent,
  TituloContent,
  TextAreaContent,
} from "../CardContent/CardContentStyled";
import React, { useRef, useEffect } from "react";
import { ButtonTrain } from "../buttonTrain/ButtonTrainStyled";

type CardContentProps = {
  tituloText: string;
  textAreaValue: string;
};

const CardContentTextListen: React.FC<CardContentProps> = ({
  tituloText,
  textAreaValue,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textListen: any = localStorage.getItem("textListen");
  var audio: any;

  useEffect(() => {
    textToSpeach();
    const textarea: any = textareaRef.current;
    if (!textarea) return;
    const handleInput = () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    };

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  function pauseAudio() {
    const storedAudioUrl = localStorage.getItem("audioUrl");
    if (storedAudioUrl) {
      const audio = new Audio(storedAudioUrl);
      audio.pause(); // Play the audio
    }
  }

  function playAudio() {
    const storedAudioUrl = localStorage.getItem("audioUrl");
    if (storedAudioUrl) {
      const audio = new Audio(storedAudioUrl);
      audio.play(); // Play the audio
    }
  }

  async function textToSpeach() {
    try {
      const response = await axios.get(
        `http://localhost:3000/text-to-speech/${textListen}`,
        {
          responseType: "arraybuffer",
        }
      );
      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      localStorage.setItem("audioUrl", audioUrl);

      audio = new Audio(audioUrl);
      audio.play();
    } catch (err) {
      console.log("deu erro", err);
    }
  }
  return (
    <Container>
      <DivTituloContent>
        <TituloContent style={{ cursor: "pointer" }} onClick={textToSpeach}>
          {tituloText}
        </TituloContent>
      </DivTituloContent>
      <TextAreaContent
        readOnly
        ref={textareaRef}
        defaultValue={textAreaValue}
      />
      <ButtonTrain onClick={pauseAudio}>pause</ButtonTrain>
      <ButtonTrain onClick={playAudio}>play</ButtonTrain>
    </Container>
  );
};

export default CardContentTextListen;
