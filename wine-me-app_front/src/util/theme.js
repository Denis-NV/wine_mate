export default {
  overrides: {
    // Style sheet name
    MuiBottomNavigationAction: {
      // Name of the rule
      root: {
        color: "#FFF",
        "&$selected": {
          color: "#afb42b"
        }
      }
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: "#455a64"
      }
    }
  },
  palette: {
    primary: {
      main: "#455a64"
    },
    secondary: {
      main: "#afb42b"
    }
  },
  customValues: {
    overlayColorSolid: "rgba(188, 170, 164, 1)",
    overlayColorOpacity: "rgba(188, 170, 164, 0.7)"
  },
  customStyles: {}
};
