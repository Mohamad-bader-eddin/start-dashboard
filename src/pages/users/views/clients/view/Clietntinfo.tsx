import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import ClientInfoInputs from "./components/ClientInfoInputs";
import * as Yup from "yup";
import { initialValuesType } from "./types/ClientInfoInputsType";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";

const Clietntinfo = () => {
  const { t } = useTranslation();
  const initialValues = {
    joinData: new Date(),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: null,
    isVerified: false,
  };

  const validationSchema = Yup.object({
    joinData: Yup.date().required(t("required")).nullable(),
    firstName: Yup.string().required(t("required")),
    lastName: Yup.string().required(t("required")),
    email: Yup.string().email("Invalid Email Format").required(t("required")),
    phone: Yup.string().required(t("required")),
    birthDate: Yup.date().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return (
    <Layout>
      <PaperContainer>
        <ClientInfoInputs
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </PaperContainer>
    </Layout>
  );
};

export default Clietntinfo;
