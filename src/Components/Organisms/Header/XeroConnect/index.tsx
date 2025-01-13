import { FC, useEffect, useMemo, useState } from 'react';
import { Badge, Popover, message, Button, Form } from 'antd';
import { XeroModule } from '@modules/Xero';
import styles from './styles.module.scss';
import { XeroPermissionsEnum } from '@modules/Xero/permissions';

interface XeroConnectProps {
  permissions: { [key in XeroPermissionsEnum]: boolean }
}

/** Xero Connect component */
const XeroConnect: FC<XeroConnectProps> = (props) => {
  const { permissions } = props
  const xeroModule = useMemo(() => new XeroModule(), [])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getConsentUrl = () => {
    setIsLoading(true);
    xeroModule.getConsentUrl().then((res) => {
      const { consentUrl } = res.data?.data || {};
      if (consentUrl) {
        window.location.href = consentUrl;
      } else {
        message.error("No Consent URL Found");
      }
    }).catch(() => {
      message.error("Failed to get consent URL.");
    }).finally(() => {
      setIsLoading(false);
    });
  }

  const checkLogin = () => {
    xeroModule.checkLoginStatus().then((res) => {
      const loginStatus = res.data?.data || false;
      if (loginStatus) {
        setIsLoggedIn(true);
      }
    }).catch((err) => {
      console.error("Error checking Xero login status", err.message);
    });
  }

  const handleDisconnect = () => {
    setIsLoading(true);
    xeroModule.disconnectFromXero().then(() => {
      message.success("Disconnected from Xero successfully");
      setIsLoggedIn(false);
    }).catch((err:any) => {
      message.error(`Failed to disconnect from Xero: ${err.message}`);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <Popover
      destroyTooltipOnHide
      overlayClassName='change-width'
      title={
        <div className={styles.title}>Xero Connection Status</div>
      }
      content={
        <div className='text-center'>
          {!isLoggedIn ? (
            <>
              Not connected yet <br />
              {permissions.loginToXero ? (
                <Button
                  type="ghost" size='small'
                  onClick={getConsentUrl}
                  loading={isLoading} // Show loading when consent URL is being fetched
                >
                  Connect now
                </Button>
              ) : "Please contact your administrator to connect to Xero."}
            </>
          ) : (
            <>
              Connected to Xero <br />
              <Button
                type="dashed" size='small'
                onClick={handleDisconnect}
                loading={isLoading} // Show loading when disconnecting
              >
                Disconnect
              </Button>
            </>
          )}
        </div>
      }
    >
      <Badge
        count={
          <div
            style={{
              background: isLoggedIn ? "radial-gradient(#1C6758, #367E18, #5BB318)" : "#F5222D",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)",
              fontSize: 20, width: 20, height: 20, borderRadius: '50%',
            }}
          />
        }
      />
    </Popover>
  );
};

export default XeroConnect;
