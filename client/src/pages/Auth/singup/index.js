import {
  Button,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Alert,
  Link,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { fetchRegister } from "../../../api/Api";
import validationSchema from "./validations";
import { useNavigate as UseNavigate } from "react-router-dom";
//context
import { useAuth } from "../../../context/AuthContext";

function SingUp() {
  const { login, loggedIn } = useAuth();
  let navigate = UseNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await fetchRegister({
          email: values.email,
          password: values.password,
        });
        login(registerResponse);

        const HandleLogin = async () => {
          navigate("/");
        };
        HandleLogin();
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt="10">
          <Box textAlign="center">
            <Heading> Sing Up</Heading>
            <Box my={5}>
              {formik.errors.general && (
                <Alert status="error">{formik.errors.general}</Alert>
              )}
            </Box>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>e-mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt={4}>password</FormLabel>
                <Input
                  name="password"
                  type={"password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt={4}>password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  type={"password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  isInvalid={
                    formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm
                  }
                />
              </FormControl>

              <Button color="black" mt={4} width="full" type="submit">
                Sing Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default SingUp;
