import React from "react";
import Link from "next/link";
import SidebarDropdown from "@/components/Sidebar/SidebarDropdown";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const { setUser } = useAuth();
  const handleClick = () => {
    console.log("4");
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    console.log("4", updatedPageName);

    return setPageName(updatedPageName);
  };
  const handleActionClick = () => {
    if (item.label === "Log Out") {
      // item.action(); // Trigger the action if it exists/ Call the action function if it exists

      const auth = getAuth();

      const users = auth.currentUser;

      console.log("5");
      setUser(null);
      // setUser(null);

      localStorage.removeItem("authToken"); // Clear authentication tokens
      localStorage.removeItem("userDetails");
      console.log("User is signed out: ");

      signOut(auth)
        .then(() => {
          // Sign-out successful
          window.location.href = "/auth/signin"; // Redirect to login page
        })
        .catch((error) => {
          // Handle error
          console.error("Error signing out: ", error);
        });
    }
  };

  const handleCombinedClick = (e: React.MouseEvent) => {
    // e.preventDefault(); // Prevent default link behavior

    if (item.label === "Log Out") {
      e.preventDefault();
      handleActionClick();
    }
    console.log("3");

    handleClick(); // Call the original handleClick for updating the state

    // Trigger the action if there is one
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleCombinedClick}
          className={`${isItemActive ? "bg-graydark dark:bg-meta-4" : ""} group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
        >
          {item.icon}
          {item.label}
          {item.children && (
            <svg
              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                pageName === item.label.toLowerCase() && "rotate-180"
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                fill=""
              />
            </svg>
          )}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              pageName !== item.label.toLowerCase() && "hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
