import { ThreeDots } from 'react-loader-spinner';
import { Btn } from './Button.styles';

const Button = ({ color, text, onClick, loading = false }) => {
  return (
    <Btn color={color} onClick={!loading ? onClick : undefined}>
      {!loading ? (
        text
      ) : (
        <ThreeDots
          height="14"
          color="#5534a3"
          wrapperStyle={{ padding: '2px' }}
        />
      )}
    </Btn>
  );
};

export default Button;
