type SupportedCurrencies = "ARS" | "USD";

export type Acquisition = {
  description: string;
  agent_id?: string;
  buyer_id?: string;
  tenant_id?: string;
  estate_id: string;
  transaction_type: string;
  transaction_price: number;
  transaction_currency: string;
  transaction_date: string;
};
export type AcquisitionFrond = {
  id: string;
  description: string;
  agent?: User;
  buyer?: Client;
  tenant?: Client;
  owner?: Client;
  estate: Estate;
  transaction_type: string;
  transaction_price: number;
  transaction_currency: string;
  transaction_date: string;
};

export type Rents = {
  agent_id: string;
  owner_id: string;
  tenant_id: string;
  current_price: number;
  currency: string;
  estate_id: string;
  rent_payments: string;
  transaction_price: number;
  transaction_currency: string;
};

export type Client = {
  id?: string;

  email: string;
  first_name: string;
  last_name: string;
  is_owner: boolean | string;
  is_buyer: boolean | string;
  is_tenant: boolean | string;
  assigned_agent_name?: string;
  assigned_agent_id?: string;
  type?: string;
};

export type Estate = {
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
  sale_currency: SupportedCurrencies | "";
  rent_currency?: SupportedCurrencies | "";
  category: "house" | "garage" | "complex" | "flat" | "shop" | "office" | "";
  rooms: number;
  operation_type: "rent" | "sale" | "rent_sale" | "";
  is_for_sale: boolean;
  is_for_rent: boolean;
  owner: Client;
};

export interface User {
  firstname: string;
  lastname: string;
  type?: string;
  password: string;
  email: string;
  id: string;
}

export type RawNewAcquisition = {
  description: string;
  estateID: string;
  buyerOrTenantID: string;
  transactionType: string;
  transactionCurrency: string;
  transactionPrice: string;
  ownerID: string;
  agentID: string;
};
