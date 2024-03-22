export interface ITransaction {
  _id: string;
  plan_id: string;
  client_id: {
    full_name: string;
  };
  payment_status: string;
  order_id: number;
  amount: number;
  subscriptionMonths: number;
}
