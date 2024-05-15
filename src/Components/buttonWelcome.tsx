import React from 'react';


interface ButtonProps {
  text: string; 
  type?: "button" | "submit" | "reset" | undefined;
  welcomeButton?: boolean; // Propriedade welcomeButton opcional

}


const welcomeButton: React.FC<ButtonProps> = ({ text, type = "button" }) => {
  return (
    <button 
      type={type} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
}

export default welcomeButton;