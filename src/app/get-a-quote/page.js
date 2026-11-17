import { Suspense } from "react";
import GetAQuoteContent from "./GetAQuoteContent";

export default function GetAQuotePage() {
  return (
    <Suspense
      fallback={
        <main
          style={{
            minHeight: "70vh",
            display: "grid",
            placeItems: "center",
            color: "#071a2b",
          }}
        >
          Loading quote form...
        </main>
      }
    >
      <GetAQuoteContent />
    </Suspense>
  );
}
