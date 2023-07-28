type SupportedCurrencies = "ARS" | "USD";

export type AcquisitionData = {
  description: string;
  agent_id: string;
  owner_id: string;
  buyer_id?: string;
  tenant_id?: string;
  estate_id: string;
  transaction_type: string;
  transaction_price: number;
  transaction_currency: string;
  transaction_date: string;
};

export type Acquisition = {
  description: string;
  agent: User;
  owner: Client;
  buyer?: Client;
  tenant?: Client;
  estate: Estate;
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

export type estateData = {
  id?: string;
  name: string;
  address: string;
  description: string;
  city: string;
  expenses_price?: number;
  images?: Array<string>;
  owner_id: string;
  sale_price?: number;
  rent_price?: number;
  rent_currency?: SupportedCurrencies;
  sale_currency?: SupportedCurrencies;
  category: "house" | "garage" | "complex" | "flat" | "shop" | "office";
  rooms: number;
  operation_type: "rent" | "sale" | "rent_sale";
};

export type Estate = {
  id?: string;
  name: string;
  address: string;
  description: string;
  city: string;
  expenses_price?: number;
  images?: Array<string>;
  owner: Client;
  sale_price?: number;
  rent_price?: number;
  rent_currency?: SupportedCurrencies;
  sale_currency?: SupportedCurrencies;
  category: "house" | "garage" | "complex" | "flat" | "shop" | "office";
  rooms: number;
  operation_type: "rent" | "sale" | "rent_sale";
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
