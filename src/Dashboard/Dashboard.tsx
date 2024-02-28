import React from 'react';

type DashboardProps = {
  startGame: boolean;
  handleButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Dashboard({ startGame, handleButtonClick }: DashboardProps) {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <p className="honk-unique" style={{ 
            fontSize: '10vw', 
            borderBottom: '10px dotted grey',
            margin: '5vw',
        }}>
            HANGMAN
        </p>

      <div style={{ textAlign: "center" }}>
        <button onClick={() => handleButtonClick(!startGame)} className="honk-unique" style={{ 
            fontSize: '3vw',
            padding: '1vh',
            background: 'none',
            boxShadow: '1vh 1vh black'
         }}>
          Start
        </button>
      </div>
    </div>
  );
}
