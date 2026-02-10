import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React from "react";
import ProductForm from "./ProductForm";
import ProductionList from "./ProductionList";
import ProductMaterialForm from "./ProductMaterialForm";
import RawMaterialForm from "./RawMaterialForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", flexGrow: 1 }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Entity Tabs">
          <Tab label="Produtos" {...a11yProps(0)} />
          <Tab label="Materia Prima" {...a11yProps(1)} />
          <Tab label="Materiais do Produto" {...a11yProps(2)} />
          <Tab label="Ordens de Produção" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <ProductForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RawMaterialForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductMaterialForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProductionList />
      </TabPanel>
    </Box>
  );
}
