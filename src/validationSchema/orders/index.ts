import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  total_amount: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  delivery_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
