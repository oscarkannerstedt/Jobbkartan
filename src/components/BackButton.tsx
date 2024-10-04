import { DigiButton, DigiIconArrowLeft } from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <DigiButton
        afSize="medium"
        afVariation="primary"
        onClick={handleGoBack}
        afId="back-button"
      >
        <DigiIconArrowLeft slot="icon" />
        Tillbaka
      </DigiButton>
    </>
  );
};

export default BackButton;
