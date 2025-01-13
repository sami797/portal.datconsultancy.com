import { FC, FocusEventHandler, MouseEventHandler } from "react";
import { Button, Input, InputProps } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";

interface EditableInputProps extends InputProps {
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onMouseDown?: MouseEventHandler<HTMLElement>;
  autoFocus?: boolean;
}

const EditableInput: FC<EditableInputProps> = (props) => {
  const { onBlur, onChange, onMouseDown, defaultValue, autoFocus = false, ...rest } = props;

  return (
    <div className={styles.updateTitle}>
      <Input
        bordered={false}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        size="large"
        autoFocus={autoFocus}
        {...rest}
      />
      <div className={styles.buttonWrap}>
        <Button
          type="default"
          onMouseDown={onMouseDown}
          icon={<CheckOutlined style={{ fontSize: 10 }} />}
        />
        <Button
          type="default"
          icon={<CloseOutlined style={{ fontSize: 10 }} />}
        />
      </div>
    </div>
  );
}

export default EditableInput;
