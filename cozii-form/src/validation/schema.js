import * as yup from 'yup';
 
export const personalInfoSchema = yup.object({

  fullName: yup.string().required("Required"),

  dateOfBirth: yup.date().required("Required"),

  nationality: yup.string().required("Required"),

  email: yup.string().email().required("Valid email required"),

  phone: yup.string().matches(/^\d{10}$/, "Phone must be 10 digits").required(),

});
 
export const travelSchema = yup.object({

  departureDate: yup

    .date()

    .typeError("Departure date is required")

    .required("Departure date is required"),
 
  returnDate: yup

    .date()

    .typeError("Return date is required")

    .min(yup.ref('departureDate'), "Return must be after departure")

    .required("Return date is required"),
 
  accommodation: yup.string().required("Accommodation is required"),
 
  specialRequests: yup.string(),

});
 
 
export const healthSchema = yup.object({

  healthDeclaration: yup.boolean().required("Please confirm health declaration"),

  emergencyContact: yup.string().required("Required"),

  medicalConditions: yup.string(),

});
 