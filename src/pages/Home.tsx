import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/annonser"); // Ersätt "/annonser" med den faktiska vägen till PrintAllJobs om den är annan
  };

  return (
    <div className="home-container">
      <h1>Välkommen till Jobbkartan!</h1>
      <p>Klicka på knappen nedan för att se alla jobbannonser.</p>
      <button onClick={handleNavigate}>Visa Jobbannonser</button>
    </div>
  );
};

export default Home;
