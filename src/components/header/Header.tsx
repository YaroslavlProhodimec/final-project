import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Badge, Link} from '@mui/material';
import {SearchParam} from "./miniHeaderComponent/search/SearchParam";


type PropsHeaderType = {
    openBasket: () => void
    order: number
    setSearchParams:()=>void
    searchParams:any
    postQwery:string
}

export function Header({openBasket, order,setSearchParams,searchParams,postQwery}: PropsHeaderType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {

        setAnchorEl(event.currentTarget);

    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();

    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {

        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem  onClick={handleMenuClose}><Link href="/login" underline="none">Sign-in</Link></MenuItem>
            <MenuItem onClick={handleMenuClose}><Link href="/" underline="none">Log-out</Link></MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >


            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton

                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p >Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static"
                    sx={{background: 'linear-gradient(96.2deg, rgb(255, 230, 112) 10.4%, rgb(255, 100, 100) 43.8%, rgb(0, 93, 219) 105.8%)'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h3"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}

                    >
                        БАРХАТНЫЕ ТЯГИ
                    </Typography>
                    <SearchParam postQwery={postQwery} searchParams={searchParams} setSearchParams={setSearchParams} menuId={menuId}  handleProfileMenuOpen={handleProfileMenuOpen}/>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>

                    </Box>

                    <IconButton onClick={openBasket} sx={{marginLeft: '7px'}}>
                        <Badge color={'secondary'} badgeContent={order}>

                            <ShoppingBasketIcon/>
                        </Badge>


                    </IconButton>
                </Toolbar>

            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}