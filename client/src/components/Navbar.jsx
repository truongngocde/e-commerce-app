import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

import {
    Container,
    Wrapper,
    Left,
    Right,
    Center,
    List,
    ListItem,
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
                    <List>
                        <ListItem>
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/shop">Shop</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/about">About</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/contact">Contact</Link>
                        </ListItem>
                    </List>            
                    <SearchContainer>
                        <Input /> 
                        <Search style={{ color: 'gray', fontSize: 28, cursor: 'pointer' }} />
                    </SearchContainer>
                    <Language>EN</Language>
                </Center>
                <Right>
                    <MenuItem>
                        <Link to="/login">LOG IN</Link>                       
                    </MenuItem>
                    <MenuItem>
                        <Link to="/signup">SIGN UP</Link>
                    </MenuItem>
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
