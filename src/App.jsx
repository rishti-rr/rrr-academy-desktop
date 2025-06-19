import React, { useEffect, useState } from 'react';
import { Typography, Container, Divider } from '@mui/material';
import CourseItem from './components/CourseItem';
import BookItem from './components/BookItem';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!window.api?.getData) return;

    window.api.getData()
      .then(data => {
        setCourses(data.courses);
        setBooks(data.books);
      })
      .catch(console.error);
  }, []);

  const handleAddToCart = (item) => {
    console.log("Add to cart", item);
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom fontWeight="bold">
        RRR ACADEMY
      </Typography>

      <Typography variant="h5" gutterBottom>
        Courses
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ paddingBottom: '40px' }}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 4 },
        }}
      >
        {courses.map(course => (
          <SwiperSlide key={course._id}>
            <CourseItem
              course={course}
              onClick={() => console.log("View course", course._id)}
              onAddToCart={handleAddToCart}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Divider sx={{ my: 5 }} />

      <Typography variant="h5" gutterBottom>
        Books
      </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ paddingBottom: '40px' }}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 4 },
        }}
      >
        {books.map(book => (
          <SwiperSlide key={book._id}>
            <BookItem
              book={book}
              onClick={() => console.log("View book", book._id)}
              onAddToCart={handleAddToCart}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ToastContainer position="bottom-right" />
    </Container>
  );
};

export default App;
