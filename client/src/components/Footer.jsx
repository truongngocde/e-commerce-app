import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from '@mui/icons-material';
import {
    Container,
    Left,
    Right,
    Center,
    Logo,
    Title,
    Desc,
    SocialContainer,
    SocialIcon,
    List,
    ListItem,
    ContactItem,
    Payment,
} from './stylesFooter';

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>TECHMOD</Logo>
                <Desc>
                    Welcome to TECHMOD - your go-to destination for cutting-edge
                    smartwatches! Explore top-tier designs and features from
                    renowned brands. We are committed to enhancing your
                    lifestyle with style and functionality. Discover today and
                    elevate your everyday with us. Thank you for choosing
                    TECHMOD!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} /> Ho Chi Minh City
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: '10px' }} />{' '}
                    detruong2002@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
