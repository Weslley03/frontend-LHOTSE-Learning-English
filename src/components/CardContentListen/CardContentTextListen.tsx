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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const textListen: any = localStorage.getItem("textListen");

  useEffect(() => {
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
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }

  function playAudio() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  function resetAudio() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
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

      audioRef.current = new Audio(audioUrl);
      audioRef.current.play();
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
      <div className="botoes">
        <ButtonTrain onClick={pauseAudio}>pause</ButtonTrain>
        <ButtonTrain onClick={playAudio}>tocar novamente</ButtonTrain>
        <ButtonTrain onClick={resetAudio}>reset</ButtonTrain>
      </div>
    </Container>
  );
};

export default CardContentTextListen;
