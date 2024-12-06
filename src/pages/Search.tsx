import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Typography, TextField, Box } from '@mui/material';
import { myAPIkey } from '../myAPI';

const Search: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(query);

    const fetchSearchResults = async () => {
        if (!searchTerm) return;
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie`,
            {
                params: {
                    api_key: myAPIkey,
                    query: searchTerm,
                    language: 'ko-KR',
                },
            }
        );
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchSearchResults();
    }, [searchTerm]);

    return (
        <div style={{ marginLeft: '200px', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>영화 검색</Typography>
            <TextField
                fullWidth
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            {/* Box를 사용한 레이아웃 구성 */}
            <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={3}>
                {movies.map((movie: any) => (
                    <Box key={movie.id} padding={1}>
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                            <Typography variant="subtitle1">{movie.title}</Typography>
                        </div>
                    </Box>
                ))}
            </Box>
        </div>
    );
};

export default Search;
