
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pill from '../Componets/Tags'
import PropTypes from 'prop-types';



function MyCard ({id,image,name,gender,description, color}) {
 
    MyCard.propTypes = {
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      };
      
      
return(
   
       <Card className='cards__card' style={{ width: '18rem' }} id={id}>
       
            <Pill colorin={color} genero={gender}/>
        <Card.Img className='card-img' variant='top' src={image} thumbnail  />
          <Card.Body className='card__body'>
            <Card.Title> {name} </Card.Title>
          
            <Card.Text>
              {description} 
            </Card.Text>
            <Button variant="warning" className="button-warning">Ver Cachorrito</Button>
          </Card.Body>
        </Card>
      );
    }
    





export default MyCard;
