import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Rating
} from '@mui/material';

const CourseItem = ({ course, onClick, onAddToCart }) => {
  return (
    <Card
      sx={{ maxWidth: 220, m: 'auto', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="130"
        image={course.image}
        alt={course.title}
      />
      <CardContent>
        <Typography variant="h6">{course.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {course.instructor}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.75rem', my: 1 }}>
        {course.description.slice(0, 40)}...
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Rating value={course.rating} precision={0.1} readOnly size="small" />
          <Typography variant="caption">{course.rating.toFixed(1)}</Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(course);
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseItem;
