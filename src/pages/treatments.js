import React, { useState, useEffect } from "react";
import { MenuList1 } from "../helpers/MenuList";
import MenuItem from "../components/Subtreatments";
import Health from "../assets/background.jpg";
import spino from "../assets/spino.jpg";
import { useHistory } from "react-router-dom";
import "../styles/Monoplegia.css";
import "../styles/Menu.css";

function Menu() {
  const history = useHistory();
  const [updatedData, setUpdatedData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false); // Define isModalOpen and setModalOpen

  useEffect(() => {
    // Retrieve updated data from the history state
    const data = history.location.state?.updatedData;
    console.log(data);
    if (data) {
      setUpdatedData(data);
    }
  }, [history.location.state]);

  const handleCardClick = (path) => {
    history.push(path);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleRedirect = () => {
    history.push("/Home");
  };

  return (
    <div>
      <div class="banner" style={{ backgroundImage: `url(${Health})` }}></div>
      <div className="menu">
        <h1 className="menuTitle">Modalities</h1>
        <div className="menuList">
          {MenuList1.map((menuItem, index) => {
            const isVisible = updatedData[index] === 1;
            return (
              isVisible && (
                <MenuItem
                  key={index}
                  image={menuItem.image}
                  title={menuItem.title}
                  text={menuItem.text}
                  to={`/treatment/${menuItem.to}`}
                  onClick={() => handleCardClick(`/treatment/${menuItem.to}`)}
                />
              )
            );
          })}
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button onClick={handleRedirect}>Back</button>
        <div>
          <button onClick={openModal}>Animate</button>

          {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content">
      <span className="close-button" onClick={closeModal}>
        &times;
      </span>
      <div className="video-and-image-container">
        <video width="450" height="400" controls autoPlay>
          <source src="/Normal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={spino} alt="Your Image" width="250" height="332"  style={{ verticalAlign: 'baseline', paddingLeft:"10px"}} />
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}

export default Menu;
