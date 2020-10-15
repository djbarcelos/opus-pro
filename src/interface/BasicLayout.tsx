import ProLayout, {
    MenuDataItem,
    BasicLayoutProps as ProLayoutProps,
    Settings,
  } from '@ant-design/pro-layout';

export interface BasicLayoutProps extends ProLayoutProps {
    breadcrumbNameMap: {
      [path: string]: MenuDataItem;
    };
    route: ProLayoutProps['route'] & {
      authority: string[];
    };
    settings: Settings;
    // dispatch: Dispatch;
  }