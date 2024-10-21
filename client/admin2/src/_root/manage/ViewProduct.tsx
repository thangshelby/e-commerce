import { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axiosPrivate from "../../api/index";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    axiosPrivate.get("/product").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const productColums: GridColDef[] = [
    {
      headerClassName: "name-column--cell",
      field: "id",
      width: 50,
      headerName: "ID",
    },
    {
      headerClassName: "name-column--cell",
      field: "name",
      headerName: "Tên",
      width: 300,
    },
    {
      headerClassName: "name-column--cell",
      field: "category",
      headerName: "Danh mục",
      width: 200,
      renderCell: (({ row: { category } }: { row: { category: string } } )=>(
        <div>
         {category.split(' ').slice(1,).join(' ')}
        </div>
      )) 
    },
    {
      headerClassName: "name-column--cell",
      field: "priceSale",
      headerName: "Giá bán",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      headerClassName: "name-column--cell",
      field: "priceRent",
      headerName: "Giá thuê",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      headerClassName: "name-column--cell",
      field: "stock",
      headerName: "Tồn kho",
      width: 60,
    },
    {
      headerClassName: "name-column--cell",
      field: "operation",
      headerName: "Thao tác",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { id } }: { row: { id: string } }) => {
        return (
          <div
            className={`flex flex-row justify-between gap-4 font-semibold px-[10px]` }
          >
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                navigate(`/manage-product-detail/${id}`);
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
    <Box sx={{ padding: "20px" }}>
      <Header title="Manage Product" subtitle={"Manage All the Products"} />

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
        <DataGrid checkboxSelection rows={products} columns={productColums} />
      </Box>
    </Box>
  );
};

export default ViewProduct;
