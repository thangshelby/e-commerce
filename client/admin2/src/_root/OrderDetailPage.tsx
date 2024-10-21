import { useEffect, useState } from "react";
import { Header } from "../components";
import axiosPrivate from "../api";
import { useParams } from "react-router-dom";
import { productsInOrderType } from "../type";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const OrderDetailPage = () => {
  const colors = tokens(useTheme().palette.mode);
  const params = useParams();

  const [productsInOrder, setProductsInOrder] = useState<productsInOrderType[]>(
    []
  );
  useEffect(() => {
    axiosPrivate.get(`/order/order-detail/${params.orderId}`).then((res) => {
      console.log(res.data);
      setProductsInOrder(res.data);
    });
  }, [params.orderId]);

  const columns: GridColDef[] = [
    {
      field: "product",
      headerName: "Sản phẩm",
      width: 100,
      colSpan: 1,
      headerClassName: "name-column--cell",
      renderCell: ({
        row,
      }: {
        row: { image: string; productName: string };
      }) => (
        <div className="mt-[10px] w-[100px]">
          <img
            src={row.image}
            alt={row.image}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "2px",
            }}
          />
        </div>
      ),
    },
    {
      field: "productName",
      headerName: "",
      width: 300,
    },

    {
      field: "quantity",
      headerClassName: "name-column--cell",
      headerName: "Số lượng",
      width: 100,
      cellClassName: "cell",
      colSpan: 1,
    },
    {
      field: "status",
      headerClassName: "name-column--cell",
      headerName: "Trạng thái",
      width: 100,
    },
    {
      field: "priceSale",
      headerClassName: "name-column--cell",
      headerName: "Giá",
      width: 120,

      renderCell: ({
        row: { status, priceSale, priceRent },
      }: {
        row: { status: string; priceSale: number; priceRent: number };
      }) => <>{status === "sale" ? priceSale : priceRent}</>,
    },
    {
        field: "startDate",
        headerClassName: "name-column--cell",
        headerName: "Ngày bắt đầu",
        width: 150,
        renderCell:(({row:{startDate} }:{row:{startDate:string}}) =>(
            <div>{startDate.slice(0,10)}</div>
        ))
        },
        {
        field: "endDate",
        headerClassName: "name-column--cell",
        headerName: "Ngày kết thúc",
        renderCell:(({row:{endDate} }:{row:{endDate:string}}) =>(
            <div>{endDate.slice(0,10)}</div>
        ))
    },
    {
        field:'total',
        headerClassName: "name-column--cell",
        headerName:'Tổng tiền',
        width:150,
        renderCell:(()=>(
            <div>1000000</div>
        ))
    }
  ];

  return (
    <div className="p-[16px] h-full w-full">
      <Header title="Chi tiết đơn hàng" subtitle="" />

      <div>Thông tin đơn hàng </div>

      <Box
        height="90vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            width: "100%",
            height: "100%",
          },
          
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          ".MuiDataGrid-columnHeader": {
            width: "100%",
            borderBottom: "2px solid #ccc",

          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .name-row--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "black",
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
        <DataGrid
          rowHeight={120}
          rows={productsInOrder}
          columns={columns as GridColDef[]}
        />
      </Box>
    </div>
  );
};

export default OrderDetailPage;
