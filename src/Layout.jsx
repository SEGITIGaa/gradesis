import { RightBar, Sidebar } from "./pages/exporter";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="font-roboto w-full overflow-y-scroll">{children}</div>
      <RightBar/>
    </div>
  );
};

export default Layout;
