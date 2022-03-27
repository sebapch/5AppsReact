import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import Twitter from '../../assets/icons/Twitter.svg'
import Big4 from '../../assets/Big4.png'
import BSC from '../../assets/BSC.png'
import Estable from '../../assets/Estable.png'
import './Carrousel.css'



  
  const Carrousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      
    };
    console.log(index)
    return (
      <>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className='carrousel' variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Estable}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Big4}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BSC}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
   
      </>
    );
  };

    export default Carrousel