import { ProductInterface } from 'interfaces/product';
import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  product?: ProductInterface[];
  review?: ReviewInterface[];
  user?: UserInterface;
  _count?: {
    product?: number;
    review?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  website?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
