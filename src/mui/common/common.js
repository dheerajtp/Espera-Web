import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  Toolbar,
  styled,
} from "@mui/material";
import { useBottomNav } from "../../utils/hooks/useBottomNav";
import {
  Home,
  Favorite,
  CreditCard,
  ShoppingCart,
  Person,
} from "@mui/icons-material/";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";

export const MUIBottomNavigationComponent = () => {
  const [value, setValue] = useBottomNav(0);
  return (
    <Box
      sx={{
        display: { sm: "block", md: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<Home />} />
        </Link>
        <Link to="/wish-list">
          <BottomNavigationAction label="Wishlist" icon={<Favorite />} />
        </Link>
        <Link to="/coupons">
          <BottomNavigationAction label="Coupon" icon={<CreditCard />} />
        </Link>
        <Link to="/cart">
          <BottomNavigationAction label="My Cart" icon={<ShoppingCart />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
};

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const LogoAndTitle = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  flex: "1",
  "& img": {
    maxWidth: { xs: "30%", sm: "20%", md: "4%" },
  },
  "& a": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  justifyContent: "space-between",
  "& > div:first-of-type": {
    marginLeft: "auto",
  },
  "@media (max-width: 959px)": {
    gap: "1rem",
  },
  "@media (max-width: 599px)": {
    gap: "0.5rem",
  },
});

export const MUIHeaderComponent = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        padding: { xs: "12px", md: "24px" },
        bgcolor: "black",
      }}
    >
      <StyledToolbar>
        <LogoAndTitle>
          <Link to="/">
            <Box
              component="img"
              alt="logo"
              src={images.logoLight}
              sx={{
                height: "auto",
                maxWidth: { xs: "20%", sm: "20%", md: "4%" },
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            ></Box>
          </Link>
          <Link to="/">
            <Box
              component="img"
              alt="logo"
              src={images.nameLight}
              sx={{
                height: "auto",
                maxWidth: { xs: "40%", md: "50%" },
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            ></Box>
          </Link>
        </LogoAndTitle>
        <Icons>
          <Link to="/profile">
            <Person
              sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            />
          </Link>
          <Link to="/wish-list">
            <Favorite
              sx={{
                display: { xs: "none", sm: "block", md: "block" },
                color: "white",
              }}
            />
          </Link>
          <Link to="/coupons">
            <CreditCard
              sx={{
                display: { xs: "none", sm: "block", md: "block" },
                color: "white",
              }}
            />
          </Link>
          <Link to="/cart">
            <ShoppingCart
              sx={{
                display: { xs: "none", sm: "block", md: "block" },
                color: "white",
              }}
            />
          </Link>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
