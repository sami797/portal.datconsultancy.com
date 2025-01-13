import { ComponentType, ReactNode, Suspense } from "react";
import { Button, Result } from "antd";
import { WifiOutlined } from "@ant-design/icons";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./Redux/store";
import setup from "./services/interceptor";
import { routes } from "./routes";
import TokenService from "./services/tokenService";
import { SUPER_ADMIN, YALLAH_USERS } from "./helpers/commonEnums";
import { NavSidebarProvider, TempLoginProvider } from "./context";
import Fallback from "@organisms/Fallback";
import { useOfflineStatus } from "hooks";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleCalendar from "@organisms/GoogleCalender";// Ensure this path is correct

const providerComponents = [
  [Provider, { store }],
  [NavSidebarProvider, {}],
  [TempLoginProvider, {}],
]

type AllProviderProps = {
  components: typeof providerComponents
  children: ReactNode
}

/** This component is used to wrap all the providers */
const AllProviders = ({ components, children }: AllProviderProps) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        const Provider = Comp[0] as ComponentType<any>
        const props = Comp[1]
        return <Provider {...props}>{acc}</Provider>
      }, children)}
    </>
  )
}

const App = () => {
  const offline = useOfflineStatus();
  const access_token = TokenService.getLocalAccessToken();
  let currentPath = window.location.pathname;

  const userData = TokenService.getUserData();
  const slugs = userData?.roles?.slugs
  const isSuperAdmin = slugs?.includes(SUPER_ADMIN) || slugs?.includes(YALLAH_USERS)

  // Redirect logic based on user roles and authentication
  if (currentPath?.includes("/siteSettings") && !isSuperAdmin) {
    window.location.href = "/403";
    return <></>
  }

  if ((!access_token) && (currentPath !== "/login" && !currentPath?.includes("/reset-password/") && !currentPath?.includes("/resources/"))) {
    let currentUrl = encodeURIComponent(window.location.href);
    window.location.href = "/login?redirectUrl=" + currentUrl;
    return <></>
  }

  return (
    <GoogleOAuthProvider clientId="889820433427-0vvq25v96atkibebp1jutc4a9pfahik6.apps.googleusercontent.com">
      {offline ? (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Result
            status="warning" icon={<WifiOutlined />}
            title="You are offline"
            subTitle="Please check your internet connection and try again."
            extra={<Button type="primary" onClick={() => window.location.reload()}>Try Again</Button>}
          />
        </section>
      ) : (
        <Suspense fallback={<Fallback />}>
          <AllProviders components={providerComponents}>
            <Router>
              <Routes>
                {routes.map((item) => (
                  <Route path={item.path} element={item.element} key={item.path} />
                ))}
                <Route path="/calendar" element={<GoogleCalendar />} /> {/* Added calendar route */}
                {/* Add other routes as needed */}
              </Routes>
            </Router>
          </AllProviders>
        </Suspense>
      )}
    </GoogleOAuthProvider>
  );
}

// Axios Interceptors
setup();
export default App;
