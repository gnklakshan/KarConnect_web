// src/hooks/useAuth.ts

"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter, redirect } from "next/navigation";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const useAuth = () => {
  const router = useRouter();
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // user = null;
      console.log(currentUser);
      setUser(currentUser);
      // user = null;
      if (!currentUser) {
        // Redirect to login if user is not authenticated
        router.push("/auth/signin"); // Adjust the path as needed
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth, router]);
  return { user, setUser }; // Return the user state for use in components
};

// export default function useAuth(Component: any) {
//   return function useAuth(props: any) {
//     const router = useRouter();
//     const auth = getAuth();

//     useLayoutEffect(() => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (!user) {
//           // Redirect to login if user is not authenticated
//           redirect("/"); // Adjust the path as needed
//         }
//       });

//       // Cleanup subscription on unmount
//       return () => unsubscribe();
//     }, [auth, router]);

//     return <Component {...props} />;
//   };
// }

export default useAuth;
