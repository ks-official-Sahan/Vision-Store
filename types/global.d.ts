declare global {
  interface Window {
    payhere: any;
  }
}

declare const payhere: {
  startPayment: (paymentData: any) => void;
  onCompleted: (orderId: string) => void;
  onDismissed: () => void;
  onError: (error: any) => void;
};