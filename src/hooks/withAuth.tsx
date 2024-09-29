// src/hooks/withAuth.tsx
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth"; // Assuming you have useAuth hook

// Define a type for the component's props
type WithAuthProps = {
  [key: string]: any; // You can specify your props here, or use 'any' for flexibility
};

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return function AuthWrapper(props: P) {
    useAuth(); // Use your auth hook to check user state

    return <Component {...props} />;
  };
};

export default withAuth;
