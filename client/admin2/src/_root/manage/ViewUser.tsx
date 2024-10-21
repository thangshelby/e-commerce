import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import {
  AdminPanelSettingsOutlinedIcon,
  LockOpenOutlinedIcon,
  SecurityOutlinedIcon,
} from "../../constant/icons";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [dataTeam, setDataTeam] = useState([]);

  useEffect(() => {
    axiosPrivate.get("/user/users").then((res) => {
      setDataTeam(res.data);
    });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "Tên",
      flex: 1,
      headerClassName: "name-column--cell",
    },
    {
      field: "email",
      headerClassName: "name-column--cell",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "age",
      headerClassName: "name-column--cell",
      headerName: "Tuổi",
      type: "number",
      headerAlign: "left",
      align: "left",
      renderCell: ({ row: { age } }: { row: { age: number } }) => {
        return age;
      },
    },
    {
      field: "phone",
      headerClassName: "name-column--cell",
      headerName: "SĐT",
      flex: 1,
    },

    {
      field: "accessLevel",
      headerClassName: "name-column--cell",
      headerName: "Quyền",
      flex: 1,
      renderCell: ({ row: { access } }: { row: { access: string } }) => {
        return (
          <Box
            component="div"
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700],
              borderRadius: "4px",
            }}
          >
            {access === "ADMIN" && <AdminPanelSettingsOutlinedIcon />}
            {access === "MANAGER" && <SecurityOutlinedIcon />}
            {access === "USER" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "operation",
      headerClassName: "name-column--cell",
      headerName: "Thao tác",
      flex: 1,

      renderCell: ({ row: { id } }: { row: { id: number } }) => {
        return (
          <div
            className={`flex flex-row justify-between gap-4 font-semibold`}
          >
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                navigate(`/manage-user-detail/${id}`);
              }}
            >
              Update
            </div>
            <div className="hover:cursor-pointer">Ban</div>
          </div>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {dataTeam.length === 0 && <Typography>Loading...</Typography>}
        <DataGrid checkboxSelection rows={dataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
