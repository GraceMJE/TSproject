import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Search, Movie } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 170,
                    position: 'fixed', // 고정 위치로 설정
                    top: '70px', // 화면 상단과 맞닿도록 설정
                    height: '100%', // 화면 전체 높이로 설정
                    borderRight: '1px solid #ddd', // 경계선 추가
                },
            }}
        >
            <List>
                {/* 검색 버튼 */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/search')}>
                        <ListItemIcon sx={{ minWidth: '30px' }}> {/* 간격 좁힘 */}
                            <Search />
                        </ListItemIcon>
                        <ListItemText primary="검색" />
                    </ListItemButton>
                </ListItem>

                {/* 영화 버튼 */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/movies')}>
                        <ListItemIcon sx={{ minWidth: '30px' }}> {/* 간격 좁힘 */}
                            <Movie />
                        </ListItemIcon>
                        <ListItemText primary="영화" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
