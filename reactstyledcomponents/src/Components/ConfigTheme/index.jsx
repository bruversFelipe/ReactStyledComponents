import React, { useState } from "react";
import ConfigThemeStyle from "./style";
import Drawer from "antd/lib/drawer";
import Icon from "antd/lib/icon";

const Options = React.lazy(() => import("./Options"));

const ConfigTheme = () => {
  const [visible, setDrawer] = useState(false);

  const showDrawer = () => {
    setDrawer(true);
  };

  const cancelDrawer = () => {
    setDrawer(false);
  };
  return (
    <React.Fragment>
      <ConfigThemeStyle onClick={showDrawer}>
        <Icon type="setting" />
      </ConfigThemeStyle>
      <Drawer visible={visible} onClose={cancelDrawer} title="Config Theme">
        <React.Suspense fallback={<span>loading...</span>}>
          <Options />
        </React.Suspense>
      </Drawer>
    </React.Fragment>
  );
};

export default ConfigTheme;
