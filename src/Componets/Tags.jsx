
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import PropTypes from 'prop-types'; 

function Pill({colorin, genero}){
  Pill.propTypes = {
    colorin: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired, 
  };
   

    return (
        <div className='pill'>
         <Stack direction="horizontal" gap={2}>
          <Badge pill bg={colorin}>
            {genero}
          </Badge>
          </Stack>
        </div>
      
  );

}
export default Pill;