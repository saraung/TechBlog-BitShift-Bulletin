import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Container,
  Button,
  Divider,
  Box,
  styled
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const BlogCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[6],
  },
}));

const Blogs = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: '9127817kadfhs8',
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring upcoming trends in web development including AI integration, WebAssembly, and new framework paradigms that are shaping the digital landscape.',
      image: 'https://picsum.photos/400/300?random=1',
      date: 'March 15, 2024'
    },
    {
      id: 'a98sd7f9a8s7df',
      title: 'Quantum Computing Breakthroughs',
      excerpt: 'Revolutionizing data processing through quantum mechanics and its implications for modern encryption systems and cybersecurity infrastructure.',
      image: 'https://picsum.photos/400/300?random=2',
      date: 'March 14, 2024'
    },
    {
      id: 'b587sdf6a5s4d3',
      title: 'AI in Modern Healthcare Solutions',
      excerpt: 'Transforming patient care through advanced machine learning algorithms and predictive analytics in medical diagnosis and treatment plans.',
      image: 'https://picsum.photos/400/300?random=3',
      date: 'March 13, 2024'
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Latest Tech Insights
        </Typography>
        <Divider sx={{ 
          width: 60, 
          height: 4, 
          bgcolor: 'primary.main', 
          mx: 'auto',
          borderRadius: 2
        }} />
      </Box>
      

      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} lg={4}>
            <BlogCard>
              <CardActionArea onClick={() => navigate(`/blog/${blog.id}`)}>
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{ 
                    height: 200,
                    objectPosition: 'top' 
                  }}
                />
                <CardContent>
                  <Typography 
                    variant="caption" 
                    color="text.secondary" 
                    sx={{ display: 'block', mb: 1 }}
                  >
                    {blog.date}
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      mb: 2
                    }}
                  >
                    {blog.excerpt}
                  </Typography>
                  <Button 
                    color="primary"
                    endIcon={<ArrowForwardIos fontSize="small" />}
                    sx={{ 
                      textTransform: 'none', 
                      fontWeight: 600,
                      pl: 0
                    }}
                  >
                    Read Article
                  </Button>
                </CardContent>
              </CardActionArea>
            </BlogCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;