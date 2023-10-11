import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  rating: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
