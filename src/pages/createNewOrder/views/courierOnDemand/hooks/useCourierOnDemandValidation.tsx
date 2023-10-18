import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { initialValuesType } from "../types/CourierOnDemandFormType";
import { useTranslation } from "react-i18next";

const useCourierOnDemandValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    id: "",
    fullName: "",
    phone: "",
    sourceLocation: "",
    destinationLocation: "",
    sendToActiveOrders: false,
  };

  const validationSchema = Yup.object({
    id: Yup.string().required(t("required")),
    fullName: Yup.string().required(t("required")),
    phone: Yup.string().required(t("required")),
    sourceLocation: Yup.string()
      .email("Invalid Email Format")
      .required(t("required")),
    destinationLocation: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return { initialValues, onSubmit, validationSchema };
};

export default useCourierOnDemandValidation;
