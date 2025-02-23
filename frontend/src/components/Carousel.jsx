// components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography, Button } from '@mui/material';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  const carouselData = [
    {
      id: 1,
      title: 'Welcome to the Tech Blog',
      description: 'Explore the latest in technology and programming.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '#', // Add a link for each slide
    },
    {
      id: 2,
      title: 'Learn React with Us',
      description: 'Master React and build modern web applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '#',
    },
    {
      id: 3,
      title: 'Discover Material-UI',
      description: 'Create beautiful UIs with Material-UI components.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '#',
    },
  ];

  return (
    <Box sx={{ marginBottom: '32px' }}>
      <Slider {...settings}>
        {carouselData.map((slide) => (
          <Box key={slide.id} sx={{ position: 'relative', textAlign: 'center' }}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                width: '80%',
                maxWidth: '800px',
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', mb: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{ mb: 3, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
              >
                {slide.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={slide.link}
                sx={{
                  fontSize: '1.1rem',
                  backgroundColor:"black",
                  padding: '10px 30px',
                  borderRadius: '25px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;