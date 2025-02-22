// pages/Home.jsx
import React from 'react';
import Carousel from '../components/Carousel';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '16px',
});

const Home = () => {
  const dummyData = [
    {
      id: 1,
      title: 'React Basics',
      description: 'Learn the basics of React and how to build modern web applications.',
      image: 'https://via.placeholder.com/345x200',
    },
    {
      id: 2,
      title: 'Material-UI Guide',
      description: 'A comprehensive guide to using Material-UI in your projects.',
      image: 'https://via.placeholder.com/345x200',
    },
    {
      id: 3,
      title: 'Advanced JavaScript',
      description: 'Deep dive into advanced JavaScript concepts and techniques.',
      image: 'https://via.placeholder.com/345x200',
    },
  ];

  return (
    <Box>
      <Carousel />
      <Container sx={{ marginTop: '32px', padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
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
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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