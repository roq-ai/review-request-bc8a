import { FeedbackInterface } from 'interfaces/feedback';
import { OrderInterface } from 'interfaces/order';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price?: number;
  quantity?: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  order?: OrderInterface[];
  company?: CompanyInterface;
  _count?: {
    feedback?: number;
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
