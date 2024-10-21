import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { createUserFields } from "../../constant";
import { createUser } from "../../api/auth";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../api";
import { useEffect,useState } from "react";
const CreateUser = () => {  
  const params  = useParams()

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    password: yup.string().required("required"),
    repeat_password: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"), 
    birth: yup.date().required("required").max(formattedDate, "Invalid Date"),
    gender:yup.string().required("required")

  });

  const [initialValues,setInitialValues] = useState(null)

  useEffect(()=>{
    if(params.userId){
      axiosPrivate.get(`/user/${params.userId}`).then((res)=>{
        setInitialValues(res.data)
        setInitialValues({...res.data,birth:res.data.birth.split('T')[0]})
      })
    }
    else{
      setInitialValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        repeat_password: "",
        birth:formattedDate
      })
    }

  },[params])

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    createUser(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
{initialValues&& (<Formik
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
            {createUserFields?.map((field) => 
           
              <TextField
              required
                key={field.name}
                fullWidth
                variant="filled"
                type={field.type}
                label={field.label}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values[field.name]}
                name={field.name} 
                error={touched[field.name] && Boolean(errors[field.name]) }
                helperText={touched[field.name] && errors[field.name]}
                sx={{  gridColumn:'span 2'}}
              >
                </TextField>
          )}
          </Box>

          <Box
       
          display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </form>
     
        )}
      </Formik>)}
      
    </Box>
  );
};

export default CreateUser;
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;