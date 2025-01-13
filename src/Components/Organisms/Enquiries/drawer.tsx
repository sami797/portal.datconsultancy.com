import { useMemo, type FC, useState, useEffect } from 'react';
import {
  Form, Popconfirm, Tooltip, message, Image, Drawer,
  Input,
  AutoComplete
} from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useConditionFetchData, useFetchData } from 'hooks';
import { errorHandler } from '@helpers/error-handler';
import { HandleServerErrors } from '@atoms/ServerErrorHandler';
import CustomErrorAlert from '@atoms/ErrorAlert';
import {
  CustomButton, CustomEmpty, CustomInput, CustomSelect, ImageUploader
} from '@atoms/';
import { CommonModalProps } from '@organisms/Common/common-types';
import Skeletons from '@organisms/Skeletons';
import { EnquiryPermissionsEnum } from '@modules/Enquiry/permissions';
import { EnquiryModule } from '@modules/Enquiry';
import { EnquiryParamTypes, EnquiryType } from '@modules/Enquiry/types';
import styles from "../Common/styles.module.scss";
import componentStyles from "./styles.module.scss";
import { ProjectTypeType } from '@modules/ProjectType/types';
import { EnquiryStatus } from '@helpers/commonEnums';
import CustomTextArea from '@atoms/Input/textarea';
import { QueryType } from '@modules/Common/common.interface';
import { DeleteIcon } from '@icons/delete';
import { PROTECTED_RESOURCE_BASE_URL } from '@helpers/constants';
import TokenService from '@services/tokenService';
import { CountryModule } from '@modules/Country';
import { CountryTypes } from '@modules/Country/types';
import { handleError } from '@helpers/common';

import axiosInstance, { BASE_URL } from "../../../../src/services/axiosInstance";
type EnquiriesModalTypes = "new" | "edit" | "notes" | "attachments";

interface EnquiriesModalProps extends CommonModalProps<EnquiriesModalTypes> {
  permissions: { [key in EnquiryPermissionsEnum]: boolean };
  recordId: number;
  projectTypeData: ProjectTypeType[];
}
type FormFieldValues = {
  id?: number;
  uuid?: string;
  name?: string;
  slug?: string;
  email?: string;
  phone?: string;
  phoneCode?: string;
  message?: string;
  projectTypeId?: number;
  // Other fields
  attachments?: any;
};

type FormValueType = EnquiryType & { note: string; attachments: any };

const EnquiriesModal: FC<EnquiriesModalProps> = (props) => {
  const {
    type, visible, onCancel, onRefresh, recordId, projectTypeData,
    permissions: { readEnquiry, createEnquiry, updateEnquiry }
  } = props;
  const access_token = TokenService.getLocalAccessToken();

  const [form] = Form.useForm<FormValueType>();

  const module = useMemo(() => new EnquiryModule(), []);
  const countryModule = useMemo(() => new CountryModule(), []);

  const [nameOptions, setNameOptions] = useState<string[]>([]); // List of names for auto-complete

  const [existingNameDetails, setExistingNameDetails] = useState<any>(null); 
// Initialize with false
  const [errors, setErrors] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingg, setLoadingg] = useState(false);
  const condition = useMemo(() => {
    if (type === "edit" || type === "attachments") {
      return readEnquiry && visible && recordId > 0;
    }
    return false
  }, [type, visible])

  // Fetch Data by id
  const {
    data, loading, error, onRefresh: onRefreshDataById
  } = useConditionFetchData<EnquiryType>({
    method: () => module.getRecordById(recordId),
    condition: condition,
  })

  // Fetch Countries
  const { data: countries } = useFetchData<CountryTypes[]>({
    method: countryModule.getAllRecords,
  })

  const titleText = useMemo(() => {
    if (type === "new") {
      return "New Enquiry";
    } else if (type === "edit") {
      return "Edit Enquiry";
    } else if (type === "attachments") {
      return "Attachments";
    }
  }, [type])

  const handleErrors = (err: any) => {
    const error = errorHandler(err);
    if (typeof error.message == "string") {
      setErrors(error.message);
    } else {
      let errData = HandleServerErrors(error.message, []);
      form.setFields(errData);
      setErrors("");
    }
  };

  const handleAlertClose = () => setErrors("");

  const onFinish = (values: Partial<FormValueType>) => {
    setIsSubmitting(true);
    const { note, attachments, phone, phoneCode, ...rest } = values;
    const formData = new FormData();

    // add attachments to form data 
    const files: File[] = attachments?.fileList?.map((file: any) => {
      return file.originFileObj
    });

    if (files?.length) {
      for (let i = 0; i < files.length; i++) {
        formData.append('files[]', files[i]);
      }
    }

    switch (type) {
      case "new": {
        const data = {
          ...rest,
          phoneCode: phoneCode && phone ? String(phoneCode) : undefined,
          phone: phone ? String(phone) : undefined,
          slug: "admin-panel-enquiry",
          source: "manual",
        };

        if (createEnquiry === true) {
          module.createRecord(data).then((res) => {
            const { data } = res?.data;
            if (data?.id) {
              formData.append("enquiryId", data?.id?.toString());
              if (files?.length > 0) {
                module.uploadFile(formData).catch((err) => {
                  const errorMessage = handleError(err);
                  message.error(errorMessage || "Something went wrong while uploading attachments");
                });
              }
              onRefresh<QueryType<EnquiryParamTypes>>({ status: EnquiryStatus.Active });
              onCancel();
              setIsSubmitting(false);
            } else {
              setIsSubmitting(false);
              message.error("Something went wrong");
            }
          }).catch((err) => {
            handleErrors(err);
            setIsSubmitting(false);
          });
        } else {
          setIsSubmitting(false);
          message.error("You don't have enough permission to create a new enquiry");
        }
        break;
      }
      case "edit": {
        if (updateEnquiry === true) {
          const data = {
            ...rest,
            phoneCode: phoneCode && phone ? String(phoneCode) : undefined,
            phone: phone ? String(phone) : undefined,
          }
          module.updateRecord(data, recordId).then((res) => {
            if (res?.data?.data) {
              onRefresh();
            }
            onCancel();
            setIsSubmitting(false);
          }).catch((err) => {
            handleErrors(err);
            setIsSubmitting(false);
          });
        } else {
          setIsSubmitting(false);
          message.error("You don't have enough permission to update an enquiry");
        }
        break;
      }
      case "attachments": {
        if (files?.length > 0) {
          formData.append("enquiryId", recordId.toString());
          module.uploadFile(formData).then(() => {
            setIsSubmitting(false);
            onRefreshDataById();
            onRefresh();
            // clear attachments
            form.setFieldsValue({ attachments: null });
          }).catch((err) => {
            handleErrors(err);
            setIsSubmitting(false);
          });
        } else {
          setIsSubmitting(false);
          message.error("Please add attachments");
        }
      }
    }
  }

  const onRemoveFile = (id: number) => {
    module.removeFile(id).then((res) => {
      onRefreshDataById();
      onRefresh();
      message.success(res?.data?.message || 'File removed successfully');
    });
  };
  const fetchNames = async (query: string) => {
    try {
      setLoadingg(true);
      const response = await axiosInstance.get('/enquiry');
      const { data } = response;

      // Filter names based on the query
      const filteredNames = data.data
        .filter((enquiry: { name: string }) => enquiry.name.toLowerCase().includes(query.toLowerCase()))
        .map((enquiry: { name: string }) => enquiry.name);

      setNameOptions(filteredNames);
      setErrors('');
    } catch (error) {
      console.error('Error fetching data:', error); // Log error details for debugging
      setErrors('Failed to fetch enquiry data.');
    } finally {
      setLoadingg(false);
    }
  };

  // Handle name selection from auto-complete
  const handleSelect = async (name: string) => {
    try {
      setLoadingg(true);
      const response = await axiosInstance.get('/enquiry');
      const { data } = response;

      // Find the selected name details
      const selectedName = data.data.find((enquiry: { name: string }) => enquiry.name === name);

      if (selectedName) {
        setExistingNameDetails(selectedName);
      }
    } catch (error) {
      console.error('Error fetching details:', error); // Log error details for debugging
      setErrors('Failed to fetch enquiry details.');
    } finally {
      setLoadingg(false);
    }
  };

  useEffect(() => {
    error && handleErrors(error);
  }, [error])

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        ...data,
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        phoneCode: data?.phoneCode,
        message: data?.message,
        projectTypeId: data?.projectTypeId,
      });
    } else {
      form.setFieldValue("phoneCode", "971");
    }
  }, [data])

  return (
    <Drawer
      open={visible} onClose={() => onCancel()} closable={true}
      title={titleText} destroyOnClose={true}
      width={window.innerWidth > 768 ? 700 : "100%"}
      bodyStyle={{ padding: "0px 25px" }}
      footer={(
        <div className={componentStyles.footer}>
          <CustomButton size="normal" fontSize="sm" onClick={onCancel} type="plain">
            Cancel
          </CustomButton>
          <CustomButton
            type="primary" size="normal" fontSize="sm" htmlType="submit"
            loading={isSubmitting} onClick={() => form.submit()}
          >
            Submit
          </CustomButton>
        </div>
      )}
    >
      {loading ? (
        <Skeletons items={2} />
      ) : (
        <Form className={styles.form} onFinish={onFinish} form={form}>
          {errors && (
            <CustomErrorAlert
              description={errors}
              isClosable
              onClose={handleAlertClose}
            />
          )}

          <>
            {type !== "attachments" && (
              <>
         <Form.Item
        name="name"
        rules={[{ required: true, message: "Please add name" }]}
        validateStatus={existingNameDetails ? "success" : ""}
        help={existingNameDetails ? "" : "Name not found"}
      >
        <AutoComplete
          options={nameOptions.map(name => ({ value: name }))}
          onSearch={fetchNames}
          onSelect={handleSelect}
          placeholder="Enter name"
          disabled={loading}
        >
          <Input size="large" />
        </AutoComplete>
      </Form.Item>
                <div>
                  <div>
                    <Form.Item name="phone">
                      <CustomInput
                        size="w100" label={"Phone"} type="number" defaultValue={data?.phone}
                        style={{ width: "100%", border: "1px solid transparent" }}
                        addonBefore={
                          <Form.Item
                            name="phoneCode" style={{ marginBottom: 0 }} initialValue={"971"}
                          >
                            <CustomSelect
                              options={countries?.reverse().map((item) => {
                                return {
                                  value: item.phoneCode,
                                  label: `${item.flag}${item.phoneCode}`
                                }
                              })}
                              placeholder="Select Country"
                              style={{ width: 90, }}
                            />
                          </Form.Item>
                        }
                      />
                    </Form.Item>
                  </div>

                  <Form.Item name="email">
                    <CustomInput size="w100" label={"Email"} type="text" />
                  </Form.Item>
                </div>

                <div>
                  <Form.Item
                    name={"projectTypeId"}
                    rules={[{ required: true, message: "Please select project type" }]}
                  >
                    <CustomSelect
                      options={projectTypeData?.map((item) => {
                        return {
                          value: item.id,
                          label: item.title
                        }
                      })}
                      placeholder="Select Project Type"
                      label="Project Type"
                      asterisk
                    />
                  </Form.Item>
                </div>

                <div>
                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: "Please add message" }]}
                  >
                    <CustomTextArea label='Message' asterisk />
                  </Form.Item>
                </div>
              </>
            )}


            {type === "attachments" && (
              <>
                {(!loading && data?.Attachments?.length === 0) && (
                  <CustomEmpty
                    description="No attachments found"
                    className='d-flex flex-column'
                  />
                )}

                {!loading && data?.Attachments?.map((item, idx) => {
                  return (
                    <div key={`${item.title}-${idx}`} className={componentStyles.manage_media_photo}>
                      <div className={componentStyles.manage_media_photo_image}>
                        {item.mimeType?.includes('image') ? (
                          <Image
                            src={`${PROTECTED_RESOURCE_BASE_URL}${item.file}?authKey=${access_token}`}
                            alt={item.title}
                            width={100} height={70}
                            style={{ borderRadius: 5, objectFit: 'cover' }}
                            preview={false}
                          />
                        ) : (
                          <Image
                            src='/images/doc.png' alt={`Document-${idx}`}
                            width={100} height={70} preview={false}
                            style={{ objectFit: 'contain' }}
                          />
                        )}

                        <div className={componentStyles.manage_media_photo_content}>
                          <span
                            style={{ cursor: 'pointer' }}
                            className={componentStyles.manage_media_photo_name_label}
                          >
                            {item.title}
                          </span>
                        </div>
                        <div className={componentStyles.media_photo_actions}>
                          <Tooltip title="Download">
                            <a
                              href={`${PROTECTED_RESOURCE_BASE_URL}${item.file}?authKey=${access_token}&download=true`}
                              target='_blank' style={{ color: "var(--color-dark-sub)" }}
                              download={item.title}
                            >
                              <CloudDownloadOutlined style={{ fontSize: 22, cursor: "pointer", marginTop: 5 }} />
                            </a>
                          </Tooltip>
                          <Popconfirm
                            title="Are you sure to delete this file?"
                            onConfirm={() => onRemoveFile(item.id)}
                            okText="Yes" cancelText="No" placement='left'
                          >
                            <DeleteIcon cursor={'pointer'} width={20} />
                          </Popconfirm>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </>
            )}

            {type !== "edit" && (
              <div className={type === "attachments" ? "mt-5" : ""}>
                <ImageUploader title='Attachments' name="attachments" multiple />
              </div>
            )}
          </>
          {/* )} */}
        </Form>
      )}
    </Drawer>
  );
}
export default EnquiriesModal;