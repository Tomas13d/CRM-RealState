export type Acquisition = {
  description: string;
  agent_id: string;
  owner_id: string;
  buyer_id: string;
  tenant_id: string;
  estate_id: string;
  transaction_type: string;
  transaction_price: number;
  transaction_currency: string;
  transaction_date: string;
};

export type Client = {
  email: string;
  first_name: string;
  last_name: string;
  is_owner: boolean;
  is_buyer: boolean;
  is_tenant: boolean;
  assigned_agent_name?: string;
  assigned_agent_id?: string;
};

export type Estate = {
  name: string;
  address: string;
  description: string;
  city: string;
  expensesPice: number;
  images?: Array<string>;
  isForRent: boolean;
  isForSale: boolean;
  owner_id: string;
  salePrice: number;
  saleRent: number;
  currency: string;
  category: string;
  rooms: string;
};

export interface User {
  firstname: string;
  lastname: string;
  type?: string;
  password: string;
  email: string;
  id: string;
}
