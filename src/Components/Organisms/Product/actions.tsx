import { FC, useMemo, useState } from "react";
import { Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ActionComponentProps } from "@organisms/Common/common-types";
import styles from "@organisms/Common/styles.module.scss";
import { ProductType } from "@modules/Product/types";
import { ProductPermissionsEnum } from "@modules/Product/permissions";
import { ProductModule } from "@modules/Product";

interface _ActionComponentProps extends ActionComponentProps {
  record: ProductType;
  permissions: { [key in ProductPermissionsEnum]: boolean };
}

const ActionComponent: FC<_ActionComponentProps> = (props) => {
  const {
    record, onEditIconClick, reloadTableData, permissions: { deleteProduct }
  } = props;

  const module = useMemo(() => new ProductModule(), []);

  const [actionState, setActionState] = useState({ confirmLoading: false, openPopConfirm: false });

  const showPopconfirm = () => setActionState((prev) => ({ ...prev, openPopConfirm: true }));

  const handleDelete = () => {
    setActionState((prev) => ({ ...prev, confirmLoading: true }));

    if (deleteProduct === false) {
      message.error("You don't have permission to delete this record, please contact your admin.");
      setActionState((prev) => ({ ...prev, confirmLoading: false, openPopConfirm: false }));
      return;
    }

    module.deleteRecord(record.id).then(() => {
      setActionState((prev) => ({ ...prev, openPopConfirm: false, confirmLoading: false }));
      reloadTableData();
    }).catch((err) => {
      const errorMessage = err?.response?.data?.message
      message.error(errorMessage || "Something went wrong, please try again later.");
      setActionState((prev) => ({ ...prev, confirmLoading: false, openPopConfirm: false }));
    });
  };

  return (
    <div className={styles.actions}>
      <span onClick={() => onEditIconClick(record)}>
        <img src="/images/editicon.svg" alt="Edit Icon" />
      </span>
      <Popconfirm
        open={actionState.openPopConfirm}
        placement="rightBottom" title="Are you sure?"
        onConfirm={handleDelete}
        onCancel={() => setActionState({ ...actionState, openPopConfirm: false })}
        okButtonProps={{ loading: actionState.confirmLoading }}
        okText="Yes" cancelText="No"
        onOpenChange={(visible) => {
          if (!visible) {
            setActionState({ ...actionState, openPopConfirm: false });
          }
        }}
      >
        <DeleteOutlined className={styles.bg__red} onClick={showPopconfirm} />
      </Popconfirm>
    </div>
  );
};

export default ActionComponent;