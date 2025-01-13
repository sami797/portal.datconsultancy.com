import { type FC, useState, Dispatch, SetStateAction, useMemo } from 'react';
import { Typography as AntdTypography, Tooltip, message, Table } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { QuotationPermissionsEnum } from '@modules/Quotation/permissions';
import { QuotationTypes } from '@modules/Quotation/types';
import { InvoicePermissionsEnum } from '@modules/Invoice/permissions';
import { ProjectPermissionsEnum } from '@modules/Project/permissions';
import { CustomEmpty, Typography } from '@atoms/';
import { CalenderIcon } from '@icons/';
import { convertDate } from '@helpers/dateHandler';
import InvoiceDrawer from '@organisms/Invoice/Drawer';
import ActionsDropdown from '../../../Components/Organisms/Quotations/Card/actions';

import { QuotationDrawerTypes } from './Drawer/types';
import MilestonesAndInvoices from './Card/Dropdown/milestones';
import ScopeOfWork from './Card/Dropdown/scope-of-work';

import QuotationStatusComp from './status';
import styles from './styles.module.scss';
import { formatCurrency, handleError } from '@helpers/common';
import QuickUpdate from './quick-update';

import NewProject from './new-project';
import { QuotationModule } from '@modules/Quotation';
import { useInvoiceDrawer } from 'hooks';
import Item from 'antd/lib/list/Item';

const { Paragraph } = AntdTypography;

type PermissionType = { [key in QuotationPermissionsEnum]: boolean } & {
  [key in InvoicePermissionsEnum]: boolean
} & {
    [key in ProjectPermissionsEnum]: boolean
  }

interface QuotationsTableProps {
  data: {
    allQuotation: QuotationTypes[]
    onRefresh: <QueryType = any>(query?: QueryType) => void
  }
  permissions: PermissionType
  setQuotationDrawer: Dispatch<SetStateAction<QuotationDrawerTypes>>
  quotationDrawer: QuotationDrawerTypes
  setNewProject: Dispatch<SetStateAction<NewProjectModalTypes>>
  newProject: NewProjectModalTypes
}

type NewProjectModalTypes = {
  isOpen: boolean
  quoteId: number
  submissionById: number
  projectTypeId: number
  loading: boolean
}

type QuickUpdateTypes = {
  open: boolean
  quoteId: number
  initialProjectId: number
  initialSubmissionById: number,
  initialProjectTypeId: number
}

const QuotationsTable: FC<QuotationsTableProps> = (props) => {
  const {
    data, permissions, setQuotationDrawer, setNewProject, newProject,
  } = props;
  const { onRefresh, allQuotation } = data

  const module = useMemo(() => new QuotationModule(), []);

  // Invoice Drawer State
  const { drawer, setDrawer } = useInvoiceDrawer()

  // Quick Update Modal State
  const [quickUpdate, setQuickUpdate] = useState<QuickUpdateTypes>({
    open: false, quoteId: 0, initialProjectId: 0, initialSubmissionById: 0,
    initialProjectTypeId: 0
  })

  /** Function to delete a lead */
  const onDelete = (id: number) => {
    if (permissions.deleteQuotation === true) {
      module.deleteRecord(id).then(() => onRefresh()).catch((err) => {
        const errorMessages = handleError(err)
        message.error(errorMessages || "Something went wrong, please try again later.")
      })
    } else {
      message.error("You don't have permission to delete this quotation, Please contact your admin")
    }
  };

  const onEdit = (record: QuotationTypes) => {
    if (permissions.updateQuotation === false) {
      message.error("You don't have permission to update record");
      return;
    }

    setQuotationDrawer(() => ({
      open: true, type: "edit",
      quoteId: record?.id, leadId: record?.leadId,
      submissionById: record?.Lead?.SubmissionBy?.id
    }))
  };

  const columns = [
    {
      title: 'Quote Number',
      dataIndex: 'quoteNumber',
      key: 'quoteNumber',
      render: (text: string, record: QuotationTypes) => (
        <Typography
          onClick={() => setQuotationDrawer((prev) => ({
            ...prev, open: true, quoteId: record?.id,
            type: "preview", quotation: record
          }))}
          color='dark-main' size='sm'
          className={styles.quotation_item_header_title}
        >
          {text || "No Quote Number"}
        </Typography>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'total',
      key: 'total',
      render: (amount: number) => formatCurrency(amount || 0),
    },
    {
      title: 'Client Name',
      dataIndex: ['Lead', 'Client', 'name'],
      key: 'clientName',
      render: (name: string) => <Typography color="dark-sub" size="sm">{name}</Typography>,
    },
    {
      title: 'Client Email',
      dataIndex: ['Lead', 'Client', 'email'],
      key: 'clientEmail',
      render: (email: string) => (
        <Paragraph
          ellipsis={{ rows: 1, expandable: false }}
          copyable={{ text: email }}
          className="font-size-xs color-dark-sub"
        >
          {email}
        </Paragraph>
      ),
    },
    {
      title: 'Client Phone',
      dataIndex: ['Lead', 'Client', 'phone'],
      key: 'clientPhone',
      render: (phone: string, record: QuotationTypes) => (
        phone !== "undefined" && phone && (
          <Paragraph
            ellipsis={{ rows: 1, expandable: false }}
            copyable={{ text: `${record.Lead.Client.phoneCode}${phone}` }}
            className="font-size-xs color-dark-sub"
          >
            {`+${record.Lead.Client.phoneCode}${phone}`}
          </Paragraph>
        )
      ),
    },
    {
      title: 'Dates',
      key: 'dates',
      render: (record: QuotationTypes) => (
        <>
          {record?.sentDate && (
            <div className="d-flex align-center">
              <CalenderIcon className="mr-2" width={13} />
              <Typography color="dark-sub" size="xs">
                {`Sent: ${convertDate(record.sentDate, "dd MM yy")}` || "N/A"}
              </Typography>
            </div>
          )}
          {record?.addedDate && (
            <div className="d-flex align-center">
              <CalenderIcon className="mr-2" width={13} />
              <Typography color="dark-sub" size="xs">
                {`Created: ${convertDate(record.addedDate, "dd MM yy")}` || "N/A"}
              </Typography>
            </div>
          )}
          {record?.modifiedDate && (
            <div className="d-flex align-center">
              <CalenderIcon className="mr-2" width={13} />
              <Typography color="dark-sub" size="xs">
                {`Modified: ${convertDate(record.modifiedDate, "dd MM yy")}` || "N/A"}
              </Typography>
            </div>
          )}
        </>
      ),
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (item: QuotationTypes) => {
          console.log('Rendering ActionsDropdown for item:', item);
          return (
            <ActionsDropdown
              item={item}
              onDelete={() => onDelete(item.id)}
              onEdit={() => onEdit(item)}
              setNewProject={setNewProject}
              setQuickUpdate={setQuickUpdate}
            />
          );
        },
      }
      
  ];
  return (
    <>
      {allQuotation?.length === 0 && (
        <CustomEmpty description="No quotation found" className='my-5' />
      )}
      <Table
        columns={columns}
        dataSource={allQuotation}
        rowKey="id"
        pagination={false}
        className={styles.quotations_table}
      />

      {/** Invoice Drawer */}
      {drawer.open && (
        <InvoiceDrawer
          drawer={drawer}
          setDrawer={setDrawer}
          onRefresh={onRefresh}
          permissions={permissions}
        />
      )}

      {/** Quick Update */}
      {quickUpdate?.open && (
        <QuickUpdate
          open={quickUpdate.open}
          quickUpdate={quickUpdate}
          onClose={() => {
            setQuickUpdate({
              open: false, quoteId: 0, initialProjectId: 0,
              initialSubmissionById: 0, initialProjectTypeId: 0
            })
            onRefresh()
          }}
        />
      )}

      {/** Create Project Modal */}
      {newProject?.isOpen && (
        <NewProject
          setNewProject={setNewProject}
          newProject={newProject}
          onRefresh={onRefresh}
          permissions={permissions}
        />
      )}
    </>
  );
}

export default QuotationsTable;
