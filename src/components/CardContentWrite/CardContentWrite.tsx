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

const CardContentWrite: React.FC<CardContentProps> = ({
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
      textarea.style.height = textarea.scrollHeight + "px";
      onTextChange(textarea.value);
    };

    textarea.addEventListener("input", handleInput);

    return () => {
      textarea.removeEventListener("input", handleInput);
    };
  }, [onTextChange]);

  return (
    <Container>
      <DivTituloContent>
        <TituloContent> {tituloText} </TituloContent>
      </DivTituloContent>
      <TextAreaContent
        ref={textareaRef}
        defaultValue={textAreaValue}
      />
    </Container>
  );
};

export default CardContentWrite;
