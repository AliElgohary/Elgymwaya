export interface ITransaction {
  plan_id: string;
  client_id: string;
  order_id: number;
  amount: number;
  subscriptionMonths: number;
}