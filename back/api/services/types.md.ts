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
  id?: string;
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
  id?: string;
  name: string;
  address: string;
  description: string;
  city: string;
  expenses_price: number;
  images?: Array<string>;
  is_for_rent: boolean;
  is_for_sale: boolean;
  owner_id: string;
  sale_price: number;
  rent_price: number;
  currency: string;
  category: string;
  rooms: number;
};

export interface User {
  firstname: string;
  lastname: string;
  type?: string;
  password: string;
  email: string;
  id: string;
  idToken: string;
}
