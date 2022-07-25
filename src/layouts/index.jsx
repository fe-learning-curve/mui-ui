import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import {
  Outlet,
  Link,
  useResolvedPath,
  useMatch,
  useLocation,
} from "react-router-dom";
import { CalendarViewDay, EmojiPeople } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const routes = [
  { label: "Home", path: "/", isShow: true, icon: <CalendarViewDay /> },
  { label: "About", path: "/about", isShow: true, icon: <EmojiPeople /> },
];

function ActiveLink({ to, icon, label, open, ...props }) {
  const theme = useTheme();
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Tooltip disableHoverListener={open} title={label} placement="right">
      <Link style={{ textDecoration: "none" }} to={to} {...props}>
        <ListItem
          sx={{
            padding: `8px 12px 8px 16px`,
            background: match ? `#F7F8FA` : ``,
            height: "48px",
            borderRadius: "8px",
            "& .MuiSvgIcon-root": {
              width: 22,
              height: 22,
              marginRight: open ? `16px` : 0,
              fill: match
                ? theme.palette.primary.main
                : theme.palette.common.black,
            },
            "&:hover": {
              background: `#F7F8FA`,
              "& .MuiSvgIcon-root": {
                fill: theme.palette.primary.main,
              },
              "& p": {
                color: theme.palette.primary.main,
              },
            },
          }}
        >
          {icon}{" "}
          <Typography
            sx={{
              color: match
                ? theme.palette.primary.main
                : theme.palette.common.black,
            }}
            variant={match ? "body1" : "body2"}
          >
            {open && label}
          </Typography>
        </ListItem>
      </Link>
    </Tooltip>
  );
}

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes?.map((route) => {
            const { isShow, icon, label, path } = route;
            if (!isShow) return null;
            return (
              <ActiveLink
                open={open}
                icon={icon}
                label={label}
                to={path}
                key={path}
              ></ActiveLink>
            );
          })}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
