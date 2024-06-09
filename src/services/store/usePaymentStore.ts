import {create} from 'zustand';
enum PaymentMethod {
  CREDITO = 'CREDITO',
  DEBITO = 'DEBITO',
  DINHEIRO = 'DINHEIRO',
}

type TypeId = 'credit_card' | 'debit_card';

type PaymentType = {
  method?: PaymentMethod | null;
  methodId?: string | null;
  typeId?: TypeId | null;
};

type TPaymentStore = {
  payment: PaymentType;
  handlePayment: (updates: Partial<PaymentType>) => void;
  clear: () => void;
};

const initialValues = {
  method: null, // CREDITO, DEBITO, DINHEIRO
  methodId: null, // master, visa, elo
  typeId: null, // credit_card, debit_card
};

const paymentStore = create<TPaymentStore>(set => ({
  payment: initialValues,
  handlePayment: updates =>
    set(state => ({
      payment: {...state.payment, ...updates},
    })),
  clear: () => set({payment: initialValues}),
}));
// Custom Hook for easier access
export function usePaymentStore() {
  const payment = paymentStore(state => state.payment);
  const handlePayment = paymentStore(state => state.handlePayment);
  const clearPayment = paymentStore(state => state.clear);

  return {payment, handlePayment, clearPayment};
}
