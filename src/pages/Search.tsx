import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { Typography, TextField, Box, CircularProgress } from '@mui/material';
import { myAPIkey } from '../myAPI';

const Search: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(query);
    const [loading, setLoading] = useState(false); // 로딩 상태 추가

    const fetchSearchResults = async () => {
        if (!searchTerm) return;

        setLoading(true); // 로딩 시작
        try {
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
        } catch (error) {
            console.error('Failed to fetch search results:', error);
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    useEffect(() => {
        fetchSearchResults();
    }, [searchTerm]);

    return (
        <div style={{ marginLeft: '180px', marginTop: '75px', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>🔎 영화 검색</Typography>
            <TextField
                fullWidth
                placeholder="Search for movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            {/* 검색 결과 표시 영역 */}
            <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={3}>
                {loading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        // 로딩 상태일 때 자리 고정을 위한 로딩 스켈레톤
                        <Box
                            key={`loading-${index}`}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="300px"
                            bgcolor="#f5f5f5"
                            borderRadius="8px"
                        >
                            <CircularProgress />
                        </Box>
                    ))
                    : movies.map((movie: any) => (
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
