import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import { myAPIkey } from '../myAPI';

const categories = [
    { name: '현재 상영작', type: 'now_playing' },
    { name: '수상작', type: 'top_rated' },
    { name: '인기작', type: 'popular' },
    { name: '개봉예정작', type: 'upcoming' },
];

const Movies: React.FC = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('now_playing');
    const navigate = useNavigate();

    const fetchMovies = async () => {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${category}`,
            {
                params: { api_key: myAPIkey, language: 'ko-KR' },
            }
        );
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, [category]);

    return (
        <div style={{ marginLeft: '180px', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>영화 테마</Typography>
            <div>
                {categories.map((cat) => (
                    <Button
                        key={cat.type}
                        onClick={() => setCategory(cat.type)}
                        variant={cat.type === category ? 'contained' : 'outlined'}
                        style={{ marginRight: '10px' }}
                    >
                        {cat.name}
                    </Button>
                ))}
            </div>
            {/* Box 컴포넌트 사용, flexbox로 영화 항목 배치 */}
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                marginTop="20px"
            >
                {movies.map((movie: any) => (
                    <Box
                        key={movie.id}
                        width="24%"
                        marginBottom="20px"
                        onClick={() => navigate(`/movie/${movie.id}`)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <Typography variant="subtitle1">{movie.title}</Typography>
                    </Box>
                ))}
            </Box>
        </div>
    );
};

export default Movies;
