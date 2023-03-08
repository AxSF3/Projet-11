import React, { useState } from "react";
import "./Carrousel.css";
import fleche from "../../assets/img/Fleche.png";

function Carrousel({ images }) {
    /* Hook pour gérer le carrousel */

    let [imgAfficher, changerImg] = useState(0);
    let [toggle, setToggle] = useState(0);
    let nombreImg = images.length;

    const imgPrecedente = () => {
        if (imgAfficher === 0) {
            changerImg(nombreImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return changerImg;
    };

    const imgSuivante = () => {
        if (imgAfficher === nombreImg - 1) {
            changerImg((nombreImg = 0));
        } else {
            changerImg(imgAfficher + 1);
        }
        return changerImg;
    };

    return (
    <>

    {
        nombreImg === 1 ? (

        <div className="carrousel">
        
        {images.map((image, index) => {
            return (
                <img
                    key={index}
                    className={
                        index === imgAfficher ? "carrousel-img actif" : "carrousel-img"
                    }
                    src={image}
                    alt="Logement"
                />
            );
        })}

        
        
        </div>
        
        ) :
        
        <div className="carrousel">
             
            <img
                id="test"
                className="fleche fleche-gauche"
                src={fleche}
                alt="Contenu précedént"
                onClick={imgPrecedente}
            />

            
            
            {images.map((image, index) => {
                return (
                    <img
                        key={index}
                        className={
                            index === imgAfficher ? "carrousel-img actif" : "carrousel-img"
                        }
                        src={image}
                        alt="Logement"
                    />
                );
            })}

            <div className="imgNumber"> {imgAfficher + 1} / {nombreImg} </div>
            
            <img
                className="fleche fleche-droite"
                src={fleche}
                alt="Contenu suivant"
                onClick={imgSuivante}
            />
            
        </div>
        
    }
    </>
    );
    
}

export default Carrousel;
