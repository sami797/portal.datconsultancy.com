import { FC, Key, Dispatch, useEffect, useMemo, useState, useCallback, SetStateAction } from 'react';
import { Avatar, Table, Tag, Typography as AntdTypography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import { ProjectTypes } from '../../../Modules/Project/types';
import { Typography } from '../../Atoms';
import { ProjectRoleEnum, taskPriority } from '../../../helpers/commonEnums';
import { convertDate } from '../../../helpers/dateHandler';
import { ProjectPermissionsEnum } from '../../../Modules/Project/permissions';
import { ProjectStateType } from '../../../Modules/ProjectState/types';
import { RESOURCE_BASE_URL } from '../../../helpers/constants';
import ActionsDropdown from './Card/actions';
import MembersTooltip from './Card/members-tooltip';
import ChangeStates from './Details/Sections/States';
import { Badge } from 'antd';
import { ProjectEnableStatesType } from "../../../Modules/ProjectEnableStates/types";
import { ProjectStateModal } from '../Projects/Details/Sections/States/modal'
import styles from '../Common/styles.module.scss';
import { UserPermissionsEnum } from "../../../Modules/User/permissions";

import {  TablePaginationConfig } from 'antd';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { TableCurrentDataSource } from 'antd/lib/table/interface';

const { Paragraph } = AntdTypography;

type PermissionType = { [key in ProjectPermissionsEnum]: boolean };

interface ProjectTableProps {
  data: {
    allProjects: ProjectTypes[];
    projectStates: ProjectStateType[];
    onRefresh: <QueryType = any>(query?: QueryType) => void;
  };
  permissions: PermissionType;
  rowSelection: {
    selectedRowKeys: Key[];
    onChange: Dispatch<SetStateAction<Key[]>>;
  };
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<ProjectTypes> | SorterResult<ProjectTypes>[],
    extra: TableCurrentDataSource<ProjectTypes> // Add this
  ) => void;
}
const ProjectTable: FC<ProjectTableProps> = ({ data, permissions, rowSelection, onChange, }) => {
  const { onRefresh, allProjects, projectStates } = data

  // Ensure projectStates is an array before sorting
  const sortedProjectStates = Array.isArray(projectStates) ? [...projectStates].sort((a, b) => a.title.localeCompare(b.title)) : [];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectTypes | null>(null);

  const handleManageStateClick = (record: ProjectTypes) => {
    setSelectedProject(record);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };



  const columns: ColumnsType<ProjectTypes> = [
    {
      title: 'Reference Number',
      dataIndex: 'referenceNumber',
      key: 'referenceNumber',
      render: (referenceNumber) => (
        <Typography color="dark-sub" size="sm">
          {referenceNumber}
        </Typography>
      )
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title: string, record) => {
        const { priority } = record;
        return (
          <>
            <a
              href={`/projects/${record.slug}?id=${record.id}`}
              title="View Project Details"
            >
              <Typography color="dark-main" weight='semi'>
                {title}
              </Typography>
            </a>
            <Paragraph
              ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
              className="mt-1 color-dark-sub mb-0"
            >
              {/* Slug: {record?.slug} */}
            </Paragraph>
            <div className="d-flex mt-1">
          <Tag
            color={taskPriority[priority as keyof typeof taskPriority].color}
            style={{ borderRadius: 15 }}
          >
            {taskPriority[priority as keyof typeof taskPriority].title}
          </Tag>
        </div>
          </>
        )
      },
    },
    
    {
      title: 'Project Type',
      dataIndex: 'xeroReference',
      key: 'projectType',
      render: (xeroReference) => (
        <Typography color="dark-sub" size="sm">
          {xeroReference ? 'Xero' : 'Local'}
        </Typography>
      ),
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
      render: (client: ProjectTypes['Client']) => (
        <div className="d-flex">
          <Avatar
            size="small"
            className="mr-2"
            src={`${RESOURCE_BASE_URL}${client?.logo}`}
            icon={<UserOutlined />}
          />
          <Typography color="dark-main" className="mt-1">
            {client?.name}
          </Typography>
        </div>
      ),
    },

    {
      title: 'Verification',
      key: 'verification',
      render: (_, record) => (
        <div>
          {record.referenceNumber ? (
            <Badge
              color="green"
              text="Xero Verified"
              style={{
                backgroundColor: '#52c41a',
                color: 'white',
                borderRadius: '2px',
                padding: '0 4px',
                width:'110px'
              }}
            />
          ) : (
            <Badge
              color="red"
              text="Unverified"
              style={{
                backgroundColor: '#ff4d4f',
                color: 'white',
                borderRadius: '2px',
                padding: '0 0px',
              }}
            />
          )}
        </div>
      ),
    },
    {
      title: "State",
      dataIndex: "ProjectState",
      key: "ProjectState",
      render: (_projectState: ProjectTypes['ProjectState'], record) => (
        <ChangeStates
          permissions={permissions}
          data={{
            projectStates: projectStates,
            project: {
              data: record,
              onRefresh: onRefresh
            }
          }}
          style={{ padding: "2px 8px" }}
        />
      ),
    },
    

    {
      title: 'State',
      dataIndex: 'ProjectState',
      key: 'ProjectState',
      render: (_, record) => {
        console.log("Record:", record);
        console.log("ProjectEnableStates:", record.ProjectEnableStates);

        const enableStates = record.ProjectEnableStates?.map((enableState) => enableState.pstateId) || [];
        console.log("Enable States:", enableStates);

        const assignedStates = projectStates.filter(state => enableStates.includes(state.id));
        
        console.log("Assigned States:", assignedStates);
    
        return (
          <>
            <Paragraph
              ellipsis={{
                rows: 1,
                expandable: false,
              }}
              className="my-0 color-dark-sub"
            >
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {assignedStates.map((state) => (
                  <li key={state.id} className="font-size-xs ml-0">{state.title}</li>
                ))}
              </ul>
            </Paragraph>
    
            <p
              className="color-dark-main font-weight-bold font-size-sm mb-0 ml-1 cursor-pointer"
              onClick={() => handleManageStateClick(record)}
            >
              Manage State
            </p>
          </>
        );
      },
    },
  
    {
      title: "Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (startDate: ProjectTypes['startDate'], record) => (
        <>
          <Typography color="dark-sub" size="sm">
            {`Start: ${convertDate(startDate, "dd MM yy")}` || "N/A"}
          </Typography>
          <Typography color="dark-sub" size="sm">
            {`End: ${convertDate(record?.endDate, "dd MM yy")}` || "N/A"}
          </Typography>
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <ActionsDropdown
          item={record} permissions={permissions}
          onRefresh={onRefresh}
        />
      )
    },
  ];

  
  return (
    <>
    <Table
      columns={columns}
      dataSource={allProjects}
      pagination={false}
      rowKey="id"
      onChange={onChange} 
      rowSelection={rowSelection}
      style={{ border: '1px solid #d9d9d9', borderRadius: '4px' }}
    />
    {/* Modal for managing project states */}
    <ProjectStateModal
    openModal={isModalVisible}
    onCancel={handleCloseModal}
    projectId={selectedProject?.id || 0}
    reloadTableData={onRefresh}
    permissions={permissions}
    
    currentForm="projectForm" // Provide the relevant form context
    type="edit" // Provide the relevant type
  />
  </>
  );
}
export default ProjectTable;