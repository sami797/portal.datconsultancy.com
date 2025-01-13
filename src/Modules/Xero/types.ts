export type XeroGetQuotesType = {
    ifModifiedSince: string,
    dateFrom: string,
    dateTo: string,
    expiryDateFrom: string,
    expiryDateTo: string,
    contactID: string,
    status: string,
    page: number,
    order: string,
    quoteNumber: string,
    tenantId: string,

};

    export interface XeroGetInvoicesType {
        startDate?: string;
        endDate?: string;
        status?: string; // e.g., 'PAID', 'DRAFT', 'AUTHORISED'
      }
      export interface InvoiceTypes {
        invoiceId: string;
        invoiceNumber: string;
        date: string;
        dueDate: string;
        status: string;
        total: number;
        // Add other fields as per your requirements
      }
