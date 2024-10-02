import { DigiButton } from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <DigiButton afSize="medium" afVariation="primary" onClick={handleGoBack}>
        Tillbaka
      </DigiButton>
    </>
  );
};

export default BackButton;
