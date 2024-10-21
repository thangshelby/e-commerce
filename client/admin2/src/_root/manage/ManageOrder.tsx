import { DataGrid, GridColDef} from "@mui/x-data-grid";
import { Header } from "../../components";
import { useState, useEffect } from "react";
import axiosPrivate from "../../api";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const ManageOrder = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axiosPrivate.get("/order").then((res) => {
      console.log(res.data);  
      setOrders(res.data);
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width:50,
      headerClassName:'name-column--cell',
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
      headerClassName:'name-column--cell',

    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      headerClassName:'name-column--cell',

      renderCell: () => {
        return <div>0902603499</div>;
      }
    },
    {
      field: "orderDate",
      headerName: "Ngày đặt hàng",
      headerClassName:'name-column--cell',

      renderCell:(({row:{orderDate} }:{row:{orderDate:string}}) =>(
          <Box>{orderDate.slice(0,10)}</Box>
      ))
    },
    {
      field: "status",
      headerName: "Trạng thái",
      headerClassName:'name-column--cell',

      width:120,
      renderCell:(({row:{status} }:{row:{status:string}}) =>(
        <div>
          {status==='PENDING'?'Đang chờ xử lý':'Đã xác nhận'}
        </div>
      ))
    },
    {
      field: "paymentMethodName",
      headerClassName:'name-column--cell',
      headerName: "Phương thức ",
      width:150,
    },
    {
      field:'shipper',
      headerName:'Nhân viên giao hàng',
      width:150,
      headerClassName:'name-column--cell',

      renderCell:()=>{
        return <div>Chưa có người nhận</div>
      }
    },
    {
      field: "operation",
      headerName: "Thao tác",
      headerClassName:'name-column--cell',
      flex: 1,

      renderCell: ({row:{id}} ) => {
        return (
          <div
            className={`flex flex-row justify-between gap-4  text-[#94e2cd] font-semibold`}
          >
            <div className="hover:cursor-pointer"
            onClick={()=>{
              navigate(`/order-detail/${id}`)
            }}
            >Xem chi tiết</div>
        
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-[16px]">
      <Header title="Đơn hàng" subtitle="Quản lí đơn hàng" />

      <Box
        maxHeight="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            // border: "1px solid #ccc",
          },
          ".header":{
            color:'black'
            // backgroundColor: colors.blueAccent[700],
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .name-row--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: 'black',
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
        <DataGrid checkboxSelection columns={columns} rows={orders} />
      </Box>
    </div>
  );
};

export default ManageOrder;
