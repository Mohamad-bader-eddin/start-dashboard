import LoginUI from "../components/LoginUI";
import * as Yup from "yup";
import { initialValuesType } from "../types/LoginType";
import { FormikHelpers } from "formik";
import { useAuth } from "../../../context/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const redirectPath = location.state?.path || "/";
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required(t("required")),
    password: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    setUser({ email: values.email, roles: ["admin"] });
    formikHelpers.resetForm();
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <LoginUI
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      />
    </>
  );
};

export default Login;
