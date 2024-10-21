import { useState, useEffect } from "react";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { createProductFields, categories } from "../../constant";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axiosPrivate from "../../api";
import { useParams } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { DeleteIcon, AspectRatioIcon } from "../../constant/icons";

const CreateProduct = () => {
  const [initialValues, setInitialValues] = useState();
  const [mainCategory, setMainCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const params = useParams();
  useEffect(() => {
    if (params.productId) {
      axiosPrivate.get(`/product/${params.productId}`).then((response) => {
        setInitialValues((prev) => ({
          ...prev,
          name: response.data.name,
          priceSale: response.data.priceSale,
          priceRent: response.data.priceRent,
          stock: response.data.stock,
          imageCover: response.data.image,
          category: response.data.category,
          description: response.data.description,
          image1: response.data.imageDetail[0],
          image2: response.data.imageDetail[1],
          image3: response.data.imageDetail[2],
          image4: response.data.imageDetail[3],
        }));
        setMainCategory(
          categories.findIndex(
            (category) => category.title === response.data.category
          )
        );
      });
    } else {
      setInitialValues({
        name: "",
        priceSale: "",
        priceRent: "",
        stock: "",
        imageCover: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        category: "",
        description: "",
      });
    }
  }, [params.productId]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rerender, setRerender] = useState(false);

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required").max(200),
    category: yup.string().required("required"),
    priceSale: yup.number().required("required"),
    priceRent: yup.number().required("required"),
    stock: yup.number().required("required"),
    description: yup.string().required("required").max(4000),
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    if (params.productId) {
      axiosPrivate
        .post(`/product/update-product/${params.productId}`, values)
        .then(() => {});
    } else {
      axiosPrivate.post("/product/add-product", values);
    }
  };

  const handleChangeFile = (e, values, name) => {
    const path = e.target.value.split("\\");
    values[name] = "../assets/images/" + path[path.length - 1];

    setRerender(!rerender);
  };

  return (
    <Box m="20px">
      <Header
        title="SẢN PHẨM"
        subtitle={params.productId ? "Chỉnh sửa sản phẩm" : "Tạo sản phẩm mới"}
      />

      {initialValues && (
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                {createProductFields.map((field) =>
                  field.type === "text" ? (
                    <TextField
                      InputProps={{ style: { fontSize: "18px" } }}
                      key={field.name}
                      fullWidth
                      variant="filled"
                      multiline
                      type={field.type}
                      label={field.label}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values[field.name]}
                      name={field.name}
                      error={touched[field.name] && Boolean(errors[field.name])}
                      helperText={touched[field.name] && errors[field.name]}
                      sx={{
                        gridColumn: field.gridColumn,

                        fontSize: "100px",
                      }}
                    />
                  ) : //SELECT CATEGORY
                  field.type === "select" ? (
                    <Box
                      key={field.name}
                      className="col-span-4 p-[20px]"
                      sx={{ backgroundColor: colors.blueAccent[700] }}
                    >
                      <Typography
                        variant="h4"
                        className="flex flex-row items-center"
                        sx={{ color: colors.grey[100], marginBottom: "20px" }}
                      >
                        CHỌN DANH MỤC SẢN PHẨM:
                        {mainCategory != null && (
                          <div className="flex flex-row justify-center items-center">
                            <Typography
                              variant="h4"
                              sx={{
                                marginX: "6px",

                                fontWeight: 700,
                                color: colors.greenAccent[300],
                              }}
                            >
                              {categories[mainCategory].title}
                            </Typography>
                            <ArrowForwardIosIcon
                              sx={{
                                color: colors.greenAccent[300],
                              }}
                            />
                          </div>
                        )}
                        {subCategory != null && (
                          <div className="flex flex-row justify-center items-center">
                            <Typography
                              variant="h4"
                              sx={{
                                marginX: "6px",
                                fontWeight: 700,
                                color: colors.greenAccent[300],
                              }}
                            >
                              {
                                categories[mainCategory].children[subCategory]
                                  .title
                              }
                            </Typography>
                            {/* <ArrowForwardIosIcon  sx={{
                           
                           fontSize: "16px",
                           color: colors.greenAccent[300],
                         }} /> */}
                          </div>
                        )}
                      </Typography>

                      <Grid container sx={{ direction: "row" }}>
                        <Grid
                          item
                          xs={6}
                          sx={{
                            maxHeight: "200px",
                            overflowY: "scroll",
                            direction: "column",
                          }}
                        >
                          {categories.map((category, index) => (
                            <Box
                              onClick={() => {
                                setMainCategory(index);
                                setSubCategory(null);
                              }}
                              key={category.title}
                              className={`flex flex-row justify-between w-full
                         items-center my-[4px] p-[4px] rounded-lg hover:cursor-pointer hover:bg-[white]
                         ${index === mainCategory && "bg-[white]"}`}
                            >
                              <Typography
                                key={category.title}
                                sx={{
                                  color: colors.greenAccent[500],
                                  fontSize: "18px",
                                }}
                              >
                                {category.title}
                              </Typography>
                              {category.children && (
                                <ArrowForwardIosIcon
                                  sx={{ color: colors.greenAccent[500] }}
                                />
                              )}
                            </Box>
                          ))}
                        </Grid>

                        <Grid
                          item
                          xs={6}
                          sx={{
                            maxHeight: "200px",
                            overflowY: "scroll",
                            paddingX: "20px",
                            direction: "column",
                          }}
                        >
                          {mainCategory != null &&
                            categories[mainCategory].children &&
                            categories[mainCategory].children.map(
                              (category, index) => (
                                <Box
                                  onClick={() => setSubCategory(index)}
                                  key={category.title}
                                  className={`flex flex-row justify-between
                       items-center p-[4px] rounded-lg hover:cursor-pointer hover:bg-[white] *:
                       ${subCategory === index && "bg-[white]"}
                       `}
                                >
                                  <Typography
                                    key={category.title}
                                    sx={{
                                      color: colors.greenAccent[500],
                                      fontSize: "18px",
                                    }}
                                  >
                                    {category.title}
                                  </Typography>
                                  {
                                    <ArrowForwardIosIcon
                                      sx={{ color: colors.greenAccent[500] }}
                                    />
                                  }
                                </Box>
                              )
                            )}
                        </Grid>
                      </Grid>
                    </Box>
                  ) : (
                    // SELECT IMAGE
                    <Box
                      key={field.name}
                      className={`flex relative flex-col 
                     justify-center items-center ${
                       field.children ? "col-span-4" : "col-span-1"
                     } `}
                    >
                      <div className="flex flex-row gap-[20px] px-[60px]">
                        <div className="flex flex-col gap-3 justify-center items-center ">
                          <div className="w-[100px] custom-file-input hover:cursor-pointer">
                            {values[field.name] && (
                              <div className="absolute top-[75px] h-[25px] w-[100px] opacity-0 z-40">
                                <div className="flex flex-row justify-evenly bg-[rgba(41,41,55,0.5)] items-center w-full h-full">
                                  <AspectRatioIcon fontSize="medium" />
                                  <div onClick={()=>{

                                    values[field.name] = ""
                                    setRerender(!rerender)
                                  }}>
                                    <DeleteIcon fontSize="medium" />
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="absolute top-0">
                              {values[field.name] ? (
                                <div className="">
                                  <img
                                    src={values[field.name]}
                                    alt={field.label}
                                    className="w-[100px] h-[100px] object-cover"
                                  />
                                </div>
                              ) : (
                                <input
                                  className=" w-[100px]  h-[100px] opacity-0 hover:cursor-pointer"
                                  type={"file"}
                                  onChange={(e) => {
                                    handleChangeFile(e, values, field.name);
                                  }}
                                  name={field.name}
                                />
                              )}
                            </div>
                          </div>

                          <label className="custom-file-label font-bold">
                            {field.label}
                          </label>
                        </div>

                        {field.children && (
                          <div className="flex flex-col ">
                            {field.children.map((subtitle) => (
                              <Typography
                                key={subtitle}
                                variant="h6"
                                sx={{
                                  color: colors.grey[100],
                                  marginY: "10px",
                                }}
                              >
                                <CircleIcon fontSize="string" />
                                {subtitle}
                              </Typography>
                            ))}
                          </div>
                        )}
                      </div>
                    </Box>
                  )
                )}
              </Box>

              <Box display="flex" justifyContent={"end"} mt="20px">
                <div className="flex w-full justify-end">
                  <Button
                    onClick={() => {
                      handleFormSubmit({
                        ...values,
                        category: categories[mainCategory].title,
                      });
                    }}
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    {params.productId ? "CẬP NHẬT" : "TẠO MỚI"}
                  </Button>
                </div>
              </Box>
            </form>
          )}
        </Formik>
      )}
    </Box>
  );
};

export default CreateProduct;
