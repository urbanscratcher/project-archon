"use client";

import API_ENDPOINTS from "@/libs/configApiUrl";
import { create } from "@/services/general.api";
import { useEffect } from "react";
import InsightPostContent from "./components/InsightPostContent";

function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  useEffect(() => {
    if (idx) {
      try {
        const url = `${API_ENDPOINTS.INSIGHTS}/${idx}/hits`;
        create(url);
      } catch (error) {
        console.error("Errors in hitInsight: ", error);
        throw error;
      }
    }
  }, [idx]);

  return (
    <main className="py-[96px]">
      <InsightPostContent idx={idx} />
    </main>
  );
}

export default InsightPage;
