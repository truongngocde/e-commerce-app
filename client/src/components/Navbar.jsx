import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

import {
    Container,
    Wrapper,
    Left,
    Right,
    Center,
    Language,
    SearchContainer,
    Input,
    Logo,
    MenuItem,
} from './stylesNavbar';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo style={{ fontSize: 24 }}>TECHMOD</Logo>
                </Left>
                <Center>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input /> 
                        <Search style={{ color: 'gray', fontSize: 28, cursor: 'pointer' }} />
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>LOG IN</MenuItem>
                    <MenuItem>SIGN UP</MenuItem>
                    <MenuItem style={{marginRight: 24}}>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
