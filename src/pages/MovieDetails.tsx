import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, CircularProgress, Container, Box, Button } from '@mui/material';
import { myAPIkey } from '../myAPI';

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchMovieDetails = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}`,
                {
                    params: {
                        api_key: myAPIkey,
                        language: 'ko-KR',
                    },
                }
            );
            setMovie(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <Container style={{ marginLeft: '200px', marginTop: '100px', padding: 0 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                }}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{
                        width: '300px',
                        height: '450px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }}
                />
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        {movie.title}
                    </Typography>
                    <Typography variant="h6"
                                color="textSecondary"
                                marginBottom={'12px'}>
                        {movie.tagline}
                    </Typography>
                    <Typography variant="body1"
                                marginRight={'350px'}
                                marginBottom={'50px'}>
                        {movie.overview}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        📆 개봉일: {movie.release_date}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        ⭐ 평점: {movie.vote_average} / 10
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open(`https://www.themoviedb.org/movie/${movie.id}`, '_blank')}
                        style={{ marginTop: '20px' }}
                    >
                        영화 페이지로 가기
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default MovieDetails;
