import apiInstance from "@services/axiosInstance";


export class PaymentModule {
  private baseUrl: string;

  constructor(baseUrl: string = '/payments') {
    this.baseUrl = baseUrl; // Default to '/payments', but can be overridden
  }

  /**
   * Fetch payment status for a specific project.
   * @param params - Object containing projectId.
   * @returns The payment status.
   */
  async fetchPaymentStatus(params: { projectId: number }) {
    try {
      const response = await apiInstance.get(`${this.baseUrl}/project/${params.projectId}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch payment status: ${error}`);
    //   throw new Error(`Failed to fetch payment status: ${error.message}`);
    }
  }

  /**
   * Update the status of a specific payment.
   * @param paymentId - ID of the payment to update.
   * @param status - New status to update.
   * @returns The updated payment status.
   */
  async updatePaymentStatus(paymentId: number, status: string) {
    try {
      const response = await apiInstance.put(`${this.baseUrl}/${paymentId}`, { status });
      return response.data;
    } catch (error) {
      console.error(`Failed to update payment status: ${error}`);
    //   throw new Error(`Failed to update payment status: ${error.message}`);
    }
  }
}
