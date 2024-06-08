"use client";

import API_ENDPOINTS from "@/libs/configApiUrl";
import { create } from "@/services/general.api";
import { useEffect } from "react";

function HitInsightPost({ idx }: { idx: number }) {
  useEffect(() => {
    if (idx) {
      const url = `${API_ENDPOINTS.INSIGHTS}/${idx}/hits`;
      create(url);
    }
  }, [idx]);

  return <></>;
}

export default HitInsightPost;
