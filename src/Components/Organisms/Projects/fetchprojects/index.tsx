import React, { useState, useEffect } from 'react';
import apiInstance from '@services/axiosInstance'; // Import your Axios instance
import { Table, Button, Spin, Alert } from 'antd';

// Define the columns for the Ant Design Table
const columns = [
  {
    title: 'Project ID',
    dataIndex: 'projectId',
    key: 'projectId',
  },
  {
    title: 'Contact ID',
    dataIndex: 'contactId',
    key: 'contactId',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Estimate',
    dataIndex: 'estimate',
    key: 'estimate',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Expense Amount Invoiced',
    dataIndex: 'expenseAmountInvoiced',
    key: 'expenseAmountInvoiced',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Expense Amount To Be Invoiced',
    dataIndex: 'expenseAmountToBeInvoiced',
    key: 'expenseAmountToBeInvoiced',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Minutes Logged',
    dataIndex: 'minutesLogged',
    key: 'minutesLogged',
  },
  {
    title: 'Minutes To Be Invoiced',
    dataIndex: 'minutesToBeInvoiced',
    key: 'minutesToBeInvoiced',
  },
  {
    title: 'Project Amount Invoiced',
    dataIndex: 'projectAmountInvoiced',
    key: 'projectAmountInvoiced',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Task Amount Invoiced',
    dataIndex: 'taskAmountInvoiced',
    key: 'taskAmountInvoiced',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Task Amount To Be Invoiced',
    dataIndex: 'taskAmountToBeInvoiced',
    key: 'taskAmountToBeInvoiced',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Total Expense Amount',
    dataIndex: 'totalExpenseAmount',
    key: 'totalExpenseAmount',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Total Invoiced',
    dataIndex: 'totalInvoiced',
    key: 'totalInvoiced',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Total Task Amount',
    dataIndex: 'totalTaskAmount',
    key: 'totalTaskAmount',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
  {
    title: 'Total To Be Invoiced',
    dataIndex: 'totalToBeInvoiced',
    key: 'totalToBeInvoiced',
    render: (text: { value: number; currency: string }) => (
      <span>{text.value} {text.currency}</span>
    ),
  },
];

const FetchProjects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await apiInstance.get('/xero/getProjects');
        setProjects(response.data.data || []); // Adjust based on your API response structure
      } catch (err) {
        // setError(err.message || 'Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Button 
        type="primary" 
        onClick={() => window.location.reload()} 
        style={{ marginBottom: '16px' }}
      >
        Refresh Projects
      </Button>

      {loading && <Spin size="large" />}
      
      {error && <Alert message="Error" description={error} type="error" />}

      <Table
        dataSource={projects}
        columns={columns}
        rowKey="projectId" // Adjust based on your data structure
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default FetchProjects;
