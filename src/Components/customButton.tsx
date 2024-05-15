import Button from '@mui/material/Button';

interface CustomButtonProps {
  buttonText: string; 
  type: "button" | "submit" | "reset"; 

}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: '25vh',
        background: 'linear-gradient(45deg, #A594F9 40%, #6247AA 100%)', // Gradiente de dois tons de roxo
        border: 0,
        borderRadius: 2,
        fontWeight: 'bold',
        color: '#171717',

        height: 40,
        padding: '0 30px',
        '&:hover': {
          background: 'linear-gradient(45deg, #A594F9 40%, #6247AA 100%)', // Gradiente de dois tons de roxo
        },
      }}
    >
     {buttonText}
    </Button>
  );
};

export default CustomButton;