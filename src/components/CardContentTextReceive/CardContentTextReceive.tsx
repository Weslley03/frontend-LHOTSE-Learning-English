import {
  Container,
  DivTituloContent,
  TituloContent,
  TextAreaContent,
} from "../CardContent/CardContentStyled";
import React, { useRef, useEffect } from "react";

type CardContentProps = {
  tituloText: string;
  textAreaValue: string;
  onTextChange: (value: string) => void;
};

const CardContentTextReceive: React.FC<CardContentProps> = ({
  tituloText,
  textAreaValue,
  onTextChange,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea: any = textareaRef.current;
    if (!textarea) return;

    const handleInput = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
  };

  return (
    <Container>
      <DivTituloContent>
        <TituloContent> {tituloText} </TituloContent>
      </DivTituloContent>
      <TextAreaContent
        ref={textareaRef}
        value={textAreaValue}
        onChange={handleChange}
      />
    </Container>
  );
};

export default CardContentTextReceive;
