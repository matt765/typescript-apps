import { FunctionComponent, useEffect, useState, SVGProps } from "react";
import { usePathname } from "next/navigation"; // Changed from 'next/router'
import Link from "next/link"; // Added Link import
import styles from "../../styles/SideMenuItem.module.scss";

type Props = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
  isSideMenuOpen: boolean;
};

export const SideMenuItem = ({
  icon: IconComponent,
  title,
  path,
  isSideMenuOpen,
}: Props) => {
  const pathname = usePathname(); // Added usePathname hook
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (pathname === path) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, path, title]);

  const itemClasses = [
    styles.menuItem,
    isActive ? styles.active : "",
    // For specific light/dark overrides not covered by CSS vars
  ]
    .join(" ")
    .trim();

  const titleClasses = [
    styles.title,
    // isActive ? styles.activeTitle : '', // if active title needs specific style not covered by .active .title
  ]
    .join(" ")
    .trim();

  const getIconClassName = () => {
    if (title === "Solar System") {
      return styles.planetIcon;
    }
    if (title === "Wrecking Ball") {
      return styles.wreckingBallIcon;
    }
    return undefined;
  };

  return (
    <Link href={path} className={itemClasses} title={title}>
      <div className={styles.iconContainer}>
        <IconComponent className={getIconClassName()} />
      </div>
      {isSideMenuOpen && <span className={titleClasses}>{title}</span>}
    </Link>
  );
};
