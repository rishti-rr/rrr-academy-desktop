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

const BookItem = ({ book, onClick, onAddToCart }) => {
  return (
    <Card
      sx={{ maxWidth: 220, m: 'auto', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="130"
        image={book.image}
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', my: 1 }}>
          {book.description.slice(0, 40)}...
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Rating value={book.rating} precision={0.1} readOnly size="small" />
          <Typography variant="caption">{book.rating.toFixed(1)}</Typography>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(book);
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
