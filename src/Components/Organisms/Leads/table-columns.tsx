import { FC, useMemo, useState } from "react";
import {
  Table, Typography as AntdTypography, Card, Tooltip, Button, message
} from "antd";
import moment from "moment";
import { convertDate } from "@helpers/dateHandler";
import { CustomButton, Typography } from "@atoms/";
import { TableProps } from "@organisms/Common/common-types";
import { LeadsTypes } from "@modules/Leads/types";
import { LeadsPermissionsEnum } from "@modules/Leads/permissions";
import { UserModule } from "@modules/User";
import { UserTypes } from "@modules/User/types";
import UserDropDown from "./assign-to";
import StatusDropdown from "./status";
import ActionComponent from "./actions";

const { Paragraph } = AntdTypography;

interface LeadsTableProps extends TableProps<LeadsTypes> {
  onAddNoteClick: (record: LeadsTypes) => void;
  
  permissions: { [key in LeadsPermissionsEnum]: boolean };
  rowSelection?: {
    selectedRowKeys: any[];
    onChange: (selectedKeys: any[]) => void;
  };
}

type SearchedUserType = {
  data: UserTypes[];
  loading: boolean;
}

const LeadsTable: FC<LeadsTableProps> = (props) => {
  const {
    tableData, tableLoading, emptyText, reloadTableData,
    onEditIconClick, onAddNoteClick, permissions, rowSelection
  } = props;
  const { updateLeads } = permissions;

  const userModule = useMemo(() => new UserModule(), [])

  const [users, setUsers] = useState<SearchedUserType>({
    data: [], loading: false
  });

  const getUsers = (query?: { name: string }) => {
    setUsers((prev) => ({ ...prev, loading: true }));
    query = {
      name: query?.name || '',
    }

    userModule.getAllRecords(query).then((res) => {
      const data = res?.data?.data;
      setUsers({ data: data, loading: false });
    }).catch((err) => {
      message.error(err?.response?.data?.message || "Something went wrong");
      setUsers((prev) => ({ ...prev, loading: false }));
    })
  }

  const columns = [
    {
      title: "S.No",
      dataIndex: "index",
      key: "index",
      render: (_text: string, _record: {}, index: number) => index + 1,
      width: "60px",
    },
 
    {
      title: "Message/Note",
      dataIndex: "message",
      key: "message",
      render: (message: string, record: LeadsTypes) => {
        const { LeadEnquiryFollowUp, status, id } = record;
        
        return (
          <>
            <div style={{
              backgroundColor: "var(--color-border)",
              padding: "10px",
              borderRadius: "2px",
              fontSize: "var(--font-size-sm)",
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: '8px' }}>
                <div dangerouslySetInnerHTML={{ __html: message }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' ,  }}>
                {LeadEnquiryFollowUp?.length === 0 && (
                  <CustomButton
                    size='xs' fontSize='xs' type='plain' className='mr-2 w-100'
                    onClick={() => onAddNoteClick(record)}
                  >
                    Add Note
                  </CustomButton>
                )}
                <StatusDropdown
                  recordId={id} status={status}
                  permissions={permissions}
                  reloadTableData={reloadTableData}
                  
                />
              </div>
            </div>
            
            {/** Notes */}
            {LeadEnquiryFollowUp?.length > 0 && (
              <Card
                size="small"
                title={
                  <div className="d-flex justify-space-between align-center">
                    <Typography color="dark-main" size="sm" weight='semi'>Notes</Typography>
                    <Tooltip
                      title={updateLeads === false ? "You don't have permission to add notes" : ""}
                    >
                      <Button
                        type="link" size='small'
                        onClick={() => onAddNoteClick(record)}
                        style={{
                          padding: "0px 0.5rem", margin: 0,
                          fontSize: '12px', fontWeight: 500,
                          color: "var(--color-dark-sub)",
                          backgroundColor: "var(--color-inactive)",
                        }}
                        disabled={updateLeads === false}
                      >
                        Manage Notes
                      </Button>
                    </Tooltip>
                  </div>
                }
                headStyle={{ padding: "0px 0.5rem", margin: 0 }}
                className={"mt-2"}
              >
                {LeadEnquiryFollowUp?.length > 0 ? LeadEnquiryFollowUp?.map((item, index) => (
                  <div
                    key={`notes-${index}`} className="mb-2"
                    style={{
                      borderBottom: index === LeadEnquiryFollowUp?.length - 1 ? '' : '1px solid var(--color-border)',
                      paddingBottom: index === LeadEnquiryFollowUp?.length - 1 ? '' : '0.5rem'
                    }}
                  >
                    <div className='d-flex align-center'>
                      <span className="font-size-sm color-dark-800">
                        {item.AddedBy.firstName + " " + item.AddedBy.lastName}
                      </span>
                      <span
                        className="font-size-xs color-dark-sub ml-2"
                        style={{ opacity: 0.7 }}
                      >
                        {moment(item?.addedDate).fromNow()}
                      </span>
                    </div>
                    <Paragraph
                      ellipsis={{ rows: 2, expandable: true }}
                      className="font-size-xs color-dark-sub mb-0"
                    >
                      {item?.note}
                    </Paragraph>
                  </div>
                )) : (
                  <div className="font-size-xs color-dark-sub text-center">No Notes</div>
                )}
              </Card>
            )}
          </>
        );
      },
    },
    // {
    //   title: 'Client Name',
    //   dataIndex: "Client",
    //   key: "client",
    //   render: (client: LeadsTypes['Client']) => client?.name || 'N/A',
    //   width: "150px",
    // },
   
    {
      title: 'Client Info',
      dataIndex: "Client",
      key: "ClientInfo",
      render: (client: LeadsTypes['Client']) => (
        <div>
            <Typography color="dark-sub" size="sm" style={{ fontSize: '24px' }}>
          {`Name: ${client?.name || 'N/A'}`}
        </Typography> 
        <Typography color="dark-sub" className="" size="sm" style={{ fontSize: '24px' }}>
          {`Email: ${client?.email || 'N/A'}`}
        </Typography>
       
        <Typography color="dark-sub" size="sm" style={{ fontSize: '20px' }}>
          {`Phone: ${client?.phone || 'N/A'}`}
        </Typography>
       
      </div>
    ),
    width: "220px",
  },

    {
      title: 'Project Type',
      dataIndex: "ProjectType",
      key: "ProjectType",
      render: (projectType: LeadsTypes['ProjectType']) => projectType?.title || 'N/A',
      width: "180px",
    },

    {
      title: 'Assigned To',
      dataIndex: "AssignedTo",
      key: "AssignedTo",
      render: (AssignedTo: LeadsTypes['AssignedTo'], record: LeadsTypes) => (
        <UserDropDown
          AssignedTo={AssignedTo}
          leadId={record.id}
          permissions={permissions}
          loading={users.loading}
          users={users.data}
          getUsers={getUsers}
          reloadTableData={reloadTableData}
        />
      ),
      width: "180px",
    },
    {
      title: 'Date',
      dataIndex: "added",
      key: "added",
      render: (_user: string, record: LeadsTypes) => (
        <div className="d-flex">
          <div className="my-auto">
            <Typography color="dark-sub" size="sm">
              {`Added: ${convertDate(record?.addedDate, "dd M,yy-t")}`}
            </Typography>
            
            {record?.modifiedDate && (
              <Typography color="dark-sub" size="sm">
                {`Modified: ${convertDate(record?.modifiedDate, "dd M,yy-t")}`}
              </Typography>
            )}
    
            {record?.dueDateForSubmissions && (
              <Typography color="dark-sub" size="sm">
                {`End Date: ${convertDate(record?.dueDateForSubmissions, "dd M,yy-t")}`}
              </Typography>
            )}
          </div>
        </div>
      ),
      width: "15%",
    },
    
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_actions: string, record: LeadsTypes) => (
        <ActionComponent
          record={record}
          onEditIconClick={onEditIconClick}
          reloadTableData={reloadTableData}
          onAddNoteClick={onAddNoteClick}
          permissions={permissions}
        />
      ),
      width: "120px",
    }
  ];

  return (
    <Table
      sticky
      dataSource={tableData}
      columns={columns}
      pagination={false}
      scroll={{ x: 991 }}
      loading={tableLoading}
      rowKey={(record) => `leads-${record.id}`}
      locale={{ emptyText: emptyText }}
      rowSelection={rowSelection}
    />
  );
}

export default LeadsTable;
