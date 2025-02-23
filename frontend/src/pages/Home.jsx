// pages/Home.jsx
import React from 'react';
import Carousel from '../components/Carousel';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '16px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', // Add a hover effect
  },
});

const Home = () => {
  const dummyData = [
    {
      id: 1,
      title: 'React Basics',
      description: 'Learn the basics of React and how to build modern web applications.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', // React image
    },
    {
      id: 2,
      title: 'Material-UI Guide',
      description: 'A comprehensive guide to using Material-UI in your projects.',
      image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', // Material-UI image
    },
    {
      id: 3,
      title: 'Advanced JavaScript',
      description: 'Deep dive into advanced JavaScript concepts and techniques.',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', // JavaScript image
    },
  ];

  return (
    <Box>
      <Carousel />
      <Container sx={{ marginTop: '32px', padding: '16px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
          Latest Posts
        </Typography>
        <Grid container spacing={3}>
          {dummyData.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;