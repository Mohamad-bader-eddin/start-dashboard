import { FormikHelpers } from "formik";
import * as Yup from "yup";

export type initialValuesType = {
    joinData: Date | null;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: Date | null;
    isVerified?: boolean
}

export type validationSchemaType = Yup.ObjectSchema<{
    joinData: Date | null;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: Date | null;
}, Yup.AnyObject, {
    joinData: undefined;
    firstName: undefined;
    lastName: undefined;
    email: undefined;
    phone: undefined;
    birthDate: undefined;
}, "">

// eslint-disable-next-line no-unused-vars
export type onSubmitType = (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => void


export type ClientInfoInputsProps = {
    initialValues: initialValuesType;
    validationSchema: validationSchemaType;
    onSubmit: onSubmitType
}