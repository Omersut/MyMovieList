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
import { fetchLogin } from "../../../api/Api";
import validationSchema from "./validations";
import { useNavigate as UseNavigate } from "react-router-dom";
//context
import { useAuth } from "../../../context/AuthContext";

function SingIn() {
  const { login, loggedIn } = useAuth();
  let navigate = UseNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({
          email: values.email,
          password: values.password,
        });
        login(loginResponse);

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
            <Heading> Sing In</Heading>
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

              <Button color="black" mt={4} width="full" type="submit">
                Sing In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default SingIn;
