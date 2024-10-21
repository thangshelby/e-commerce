import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  KeyboardArrowDownIcon,
  KeyboardArrowRightIcon,
  MenuOutlinedIcon,
} from "../../constant/icons";
import { useNavigate } from "react-router-dom";
import { manageDashboard } from "../../constant/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Item = ({
  title,
  to,
  selected,
  setSelected,
}: {
  title: string;
  to: string;
  selected: string;
  setSelected: (title: string) => void;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`ml-5 py-2   hover:cursor-pointer
       ${to == selected ? "opacity-40" : ""}
      `}
      onClick={() => {
        navigate(to);
        setSelected(to);
      }}
    >
      <Typography variant="h6" className="font-bold">
        {title}
      </Typography>
      <Link to={to} />
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(window.location.pathname);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(()=>{
    if (selected !== "/") {
      manageDashboard.map((item) => {
        if (item.children) {
          item.children.map((child) => {
            if (child.path === selected) {
              setSelectedItem(item.title);
            }
          });
        }
      });
    }
  

  },[window.location.pathname])

  return (
    <Box>
      <Sidebar
        className="h-full"
        backgroundColor={colors.primary[400]}
        collapsed={isCollapsed}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  backgroundColor: active
                    ? colors.primary[500]
                    : colors.primary[400],
                };
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3">ADMIN</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <AccountCircleIcon sx={{ fontSize: "100px" }} />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ngo Thang
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {!isCollapsed &&
              manageDashboard.map((item, index) => (
                <div key={index} className="my-[5px]">
                  {item.title && (
                    <div
                      className=" py-[5px] 
                      flex flex-row  justify-between items-center 
                      hover:cursor-pointer "
                    >
                      <Typography
                        className={`flex flex-row  justify-start items-center 
                  gap-4  text-${colors.grey[100]} `}
                        variant="h5"
                        fontWeight="bold"
                        onClick={() => {
                          if (selectedItem == item.title) {
                            setSelected("");
                            setSelectedItem("");
                          } else {
                            setSelectedItem(item.title);
                          }
                          if (item.title == "Trang chủ") {
                            navigate("/");
                          }
                        }}
                      >
                        {item.icon}
                        {item.title}
                      </Typography>

                      {item.children &&
                        (selectedItem === item.title ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          <KeyboardArrowRightIcon />
                        ))}
                    </div>
                  )}
                  <div className="ml-[18px]">
                    {item.children &&
                      selectedItem === item.title &&
                      item.children.map((child, index) => (
                        <Item
                          key={index}
                          title={child.title}
                          to={child.path}
                          selected={selected}
                          setSelected={setSelected}
                        />
                      ))}
                  </div>
                </div>
              ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Navbar;
