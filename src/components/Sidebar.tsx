import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
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
                    width: 170, // 사이드바 너비
                    position: 'relative',
                    top: '32px', // 네비게이션 바 아래로 내려오도록 설정
                    height: 'calc(100% - 64px)', // 사이드바 높이
                    paddingTop: '0px'
                },
            }}
        >
            <List>
                {/* 검색 버튼 */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/search')}>
                        <ListItemText primary="검색" />
                    </ListItemButton>
                </ListItem>

                {/* 영화 버튼 */}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/movies')}>
                        <ListItemText primary="영화" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
