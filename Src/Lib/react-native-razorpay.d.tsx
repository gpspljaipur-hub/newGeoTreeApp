declare module 'react-native-razorpay' {
  interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description?: string;
    order_id?: string;
    prefill?: {
      email?: string;
      contact?: string;
      name?: string;
    };
  }

  const RazorpayCheckout: {
    open(options: RazorpayOptions): Promise<any>;
  };

  export default RazorpayCheckout;
}