import Login from "@/Components/ui/Login";
import Home from "@/Containers/Home";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import { useEffect } from "react";

type IndexProps = {
  setUseTestAadhaar: (state: boolean) => void;
  useTestAadhaar: boolean;
};

export default function Index({ setUseTestAadhaar, useTestAadhaar }: IndexProps) {
  // Use the Country Identity hook to get the status of the user.
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log(anonAadhaar.status);
    }
  }, [anonAadhaar]);

  return (
    <div>
      {latestProof ? (
        <Home />
      ) : (
        <Login setUseTestAadhaar={setUseTestAadhaar} useTestAadhaar={useTestAadhaar} />
      )}
    </div>
  );
}
