import { styled } from "@mui/material/styles";
import TabList from "@mui/lab/TabList";


const StyledTabs = styled(TabList)({
       ".css-1aquho2-MuiTabs-indicator": {
        display: "none",
      },
      ".css-1wnjcla-MuiTabs-root .MuiTabs-indicator": {
        display: "none",
      },
      ".css-1e63gl1-MuiButtonBase-root-MuiTab-root.Mui-selected": {
        color: "white",
      }
});
    
export default StyledTabs;