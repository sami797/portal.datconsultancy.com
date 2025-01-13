import { useState, FC, useMemo, useEffect } from 'react';
import { Card, Checkbox, Popconfirm, Tooltip, message, Select, Tag } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { ProjectTypes } from '@modules/Project/types';
import { QuotationModule } from '@modules/Quotation';
import Typography from '@atoms/Headings';
import { MilestoneStatus, PaymentTermsStatus } from '@helpers/commonEnums';
import { handleError } from '@helpers/common';
import styles from './styles.module.scss';
import CustomEmpty from '@atoms/CustomEmpty';
import TaskProject from '@organisms/Dashboard/Overview/TaskProject';
import apiInstance from "@services/axiosInstance";
const { Option } = Select;
interface ProjectInfoSectionProps {
  data: ProjectTypes;
  onRefresh: <QueryType = any>(query?: QueryType) => void;
}
interface PaymentTerm {
  id: number;
  term: string;
  status: PaymentTermsStatus;
}

const termIds = [1, 2, 3]; 
const ProjectInfoSection: FC<ProjectInfoSectionProps> = ({ data, onRefresh }) => {
  const quotation = data?.Quotation;
  const [selected, setSelected] = useState<{ open: boolean; ids: number[] }>({ open: false, ids: [] });
  const module = useMemo(() => new QuotationModule(), []);
  const [paymentTerms, setPaymentTerms] = useState<PaymentTerm[]>([]);

// Define this function in the same file or import it if it's in a utility file
const getTagColor = (status: PaymentTermsStatus) => {
  switch (status) {
    case PaymentTermsStatus.NotStarted:
      return 'gray';
    case PaymentTermsStatus.InProgress:
      return 'blue';
    case PaymentTermsStatus.Completed:
      return 'green';
    case PaymentTermsStatus.Overdue:
      return 'red';
    default:
      return 'default';
  }
}; 

 
const handleStatusChange = (termId: number, status: PaymentTermsStatus) => {
  // handleUpdateStatus(termId, status);
};
useEffect(() => {
  if (data?.id) {
    module.fetchPaymentTermsByProjectId(data.id)
      .then(async (terms) => {
        // Assuming each term is a string and you need to add a default `id` and `status`
        const mappedTerms = terms.map((term, index) => ({
          term,
          id: index + 1, // Ensuring IDs are unique; consider fetching real IDs
          status: PaymentTermsStatus.NotStarted // Default status
        }));

        // Array of term IDs for which we need to fetch the status (1, 2, 3, 4, 5)
        const termIdsToFetch = [1, 2, 3, 4, 5];
        
        // Fetch status for each term in termIdsToFetch
        const fetchStatuses = async () => {
          const updatedTerms = await Promise.all(
            mappedTerms.map(async (term) => {
              if (termIdsToFetch.includes(term.id)) {
                try {
                  const status = await fetchTermsAndStatuses(term.id);
                  return { ...term, status };
                } catch (error) {
                  console.error(`Failed to fetch status for term ID ${term.id}:`, error);
                  message.error(`Failed to fetch status for term ID ${term.id}`);
                  return term; // Return the term without changing it if there's an error
                }
              }
              return term; // If term.id is not in termIdsToFetch, return the term as-is
            })
          );

          setPaymentTerms(updatedTerms);
        };

        // Fetch the statuses for the relevant terms
        fetchStatuses();
      })
      .catch((err) => {
        console.error("Failed to fetch payment terms:", err);
        message.error('Failed to fetch payment terms');
      });
  }
}, [data?.id, module]);


const fetchTermsAndStatuses = async (termId: number): Promise<PaymentTermsStatus> => {
  try {
    const response = await apiInstance.get(`/payment-terms/${termId}`);
    console.log("Status Response:", response);

    if (response.data) {
      return response.data.status; // Assuming the API response contains a `status` field
    } else {
      console.error("Unexpected response data format:", response);
      throw new Error("Unexpected response data format");
    }
  } catch (error) {
    console.error("Error fetching payment term status:", error);
    throw error;
  }
};

// Usage
const fetchStatuses = async () => {
  try {
    // Fetch status for specific term IDs
    const termIds = [1]; // Example term ID
    const statuses = new Map<number, PaymentTermsStatus>();
    for (const termId of termIds) {
      const status = await fetchTermsAndStatuses(termId);
      statuses.set(termId, status);
    }
    console.log("Statuses:", statuses);

    // Access a specific status
    const statusForTermId1 = statuses.get(1);
    console.log("Status for term ID 1:", statusForTermId1);
  } catch (error) {
    console.error("Failed to fetch statuses:", error);
  }
};


  const handleCheckboxChange = (id: number) => {
    setSelected((prev) => {
      const isChecked = prev.ids.includes(id);
      return {
        ...prev,
        open: !isChecked,
        ids: isChecked ? prev.ids.filter(itemId => itemId !== id) : [...prev.ids, id]
      };
    });
  };

  
  const updatePaymentTermStatus = async (termId: number, newStatus: PaymentTermsStatus) => {
    try {
      // Optimistically update local state before API call
      setPaymentTerms(prevTerms =>
        prevTerms.map(pt =>
          pt.id === termId
            ? { ...pt, status: newStatus as PaymentTermsStatus }
            : pt
        )
      );
  
      // Call the API to update the status
      const response = await apiInstance.patch(`/payment-terms/${termId}/status`, { status: newStatus });
      const successMessage = response?.data?.message || 'Payment term status updated successfully';
      message.success(successMessage);
  
    } catch (err: any) {
      // Rollback local state if API call fails
      setPaymentTerms(prevTerms =>
        prevTerms.map(pt =>
          pt.id === termId
            ? { ...pt, status: prevTerms.find(pt => pt.id === termId)?.status as PaymentTermsStatus }
            : pt
        )
      );
  
      const errMessage = err.response?.data?.message || 'Failed to update status';
      message.error(errMessage);
    }
  };
 
  

  
  
  
  
  const handleCompleteMilestone = (id: number) => {
    module.completeMilestone(id)
      .then((res) => {
        message.success(res?.data?.message || 'Milestone completed successfully');
        setSelected((prev) => ({
          ...prev,
          open: false,
          ids: prev.ids.filter(itemId => itemId !== id)
        }));
        onRefresh();
      })
      .catch((err) => {
        const errMessage = handleError(err);
        message.error(errMessage || 'Something went wrong');
      });
  };

  return (
    <Card className={styles.info_wrapper} style={{ borderRadius: 5, marginTop: 10 }}>
      {/* <div className={styles.info}>
        <div style={{ backgroundColor: 'var(--color-primary-main)', width: '100%' }}>
          <Typography weight='semi' style={{ color: 'white' }} className='ml-2 my-2'>
            Scope of Work
          </Typography>
        </div>
        {quotation?.length > 0 ? (
          quotation.map((item, index) => (
            <div className={styles.info_item} key={`quotation-${index}`}>
              <p className={styles.info_item_value}>
                <Checkbox disabled /> {item.scopeOfWork}
              </p>
            </div>
          ))
        ) : (
          <CustomEmpty
            description='No scope of work found'
            imageStyle={{ height: 50 }}
          />
        )}
      </div> */}

      <div className={styles.infoWrapperInner}>
        <div className={styles.info}>
          <div style={{ backgroundColor: 'var(--color-primary-main)', width: '100%' }}>
            <Typography weight='semi' style={{ color: 'white' }} className='ml-2 my-2'>
            Scope of  work
            </Typography>
          </div>

          {quotation?.length === 0 && (
            <CustomEmpty
              description='No milestones found'
              imageStyle={{ height: 50 }}
            />
          )}

          {quotation?.map((item) => {
            const milestones = item?.QuotationMilestone;
            return (
              <div key={`quotation-item-${item.id}`}>
                {milestones?.length === 0 && (
                  <CustomEmpty
                    description='No milestones found'
                    imageStyle={{ height: 50 }}
                  />
                )}
                {milestones?.map((milestone, index) => (
                  <div
                    className={styles.milestone_item}
                    key={`milestone-${index}`}
                    style={{ alignItems: "flex-start" }}
                  >
                    {milestone.status !== MilestoneStatus['Not Completed'] ? (
                      <Tooltip title="This milestone is already completed">
                        <CheckOutlined
                          style={{ color: 'var(--color-primary-main)' }}
                        />
                      </Tooltip>
                    ) : (
                      <Popconfirm
                        title="This will mark the milestone as completed. Are you sure?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleCompleteMilestone(milestone.id)}
                      >
                        <Checkbox
                          checked={selected.ids.includes(milestone.id)}
                          onChange={() => handleCheckboxChange(milestone.id)}
                        />
                      </Popconfirm>
                    )}
                    <div className={styles.milestone_item_content}>
                      <p
                        className={styles.milestone_item_value}
                        style={{
                          textDecoration: milestone.status !== MilestoneStatus['Not Completed'] ? 'line-through' : 'none'
                        }}
                      >
                        <span style={{ width: '70%' }}>{milestone.title}</span>
                        <span className={styles.milestone_item_status}>
                          {MilestoneStatus[milestone.status]}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.info}>
        <div style={{ backgroundColor: 'var(--color-primary-main)', width: '100%' }}>
          <Typography weight='semi' style={{ color: 'white' }} className='ml-2 my-2'>
            Payment Terms
          </Typography>
          {/* <div>
      <h1>Payment Terms Statuses</h1>
      <ul>
        {statuses && Array.from(statuses).map(([id, status]) => (
          <li key={id}>Term ID {id}: {status}</li>
        ))}
      </ul>
    </div> */}
        </div>
        {paymentTerms.length === 0 ? (
          <CustomEmpty
            description='No payment terms found'
            imageStyle={{ height: 50 }}
          />
        ) : (
          paymentTerms.map((term, index) => (
            <div className={styles.info_item} key={`payment-term-${index}`}>
           <p className={styles.info_item_value}>
  {term.term} - <Tag color={getTagColor(term.status)}>{term.status}</Tag>
  <Select
  value={term.status}
  onChange={(status: PaymentTermsStatus) => updatePaymentTermStatus(term.id, status)}
  style={{ marginLeft: 8 }}
>
  {Object.values(PaymentTermsStatus).map((status) => (
    <Option key={status} value={status}>
      {status}
    </Option>
  ))}
</Select>

</p>

            </div>
          ))
        )}
      </div>

      <div className={styles.info}>
        
        <div style={{ backgroundColor: 'var(--color-primary-main)', width: '100%' }}>
          <Typography weight='semi' style={{ color: 'white' }} className='ml-2 my-2'>
            Task Overview
          </Typography>
        </div>
        <TaskProject style={{ width: '100%' }} />
      </div>
    </Card>
  );
}
export default ProjectInfoSection;
