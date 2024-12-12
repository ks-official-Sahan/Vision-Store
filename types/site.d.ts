type NavItemProps = {
  currentPath: string;
  title: string;
  path?: string;
  isSideBarItem?: boolean;
};

type NavBarProps = {
  title: string;
  currentPath: string;
  opened: boolean;
  toggle: () => void;
  data: Navigation;
  type: "user" | "admin";
};

type SideBarProps = {
  currentPath: string;
  title: string;
  opened: boolean;
  close: () => void;
  data: Navigation;
  type: "user" | "admin";
};

type Navigation = {
  navbar: {
    path: string;
    title: string;
  }[];
  sidebar: {
    path: string;
    title: string;
  }[];
};
