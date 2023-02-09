import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { HomeIcon, SettingsIcon } from "@mui/icons-material";

const getIcon = (icon) => {
    switch (icon) {
        case "HOME":
            return <HomeIcon />;
        case "TASK":
            return <HomeIcon />;
        case "SETTING":
            return <SettingsIcon />;
        default:
            return <HomeIcon />;
    }
};

const MenuListItems = ({ list }) => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <List>
            {list.map(({ text, path, icon }, index) => (
                <ListItem key={index} button onClick={() => handleNavigate(path)}>
                    <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    );
};

export default MenuListItems;
