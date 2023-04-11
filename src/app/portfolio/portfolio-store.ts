// import { useEffect, useReducer, useState } from "react";
import { defer } from "react-router-dom";

// import { FetchStatus } from "@erkjbro-tech/shared/meta";
import { ContentfulApi, ContentTypes } from "@erkjbro-tech/shared/apis";
// import type { StaticPageFields } from "@erkjbro-tech/shared/apis";

const SPACE_ID: string = import.meta.env.VITE_CONTENT_SPACE_ID;
const API_KEY: string = import.meta.env.VITE_CONTENT_API_KEY;

export const portfolioLoader = async ({ params }: { params: unknown }) => {
  console.log(params);

  const storedPortfolio = sessionStorage.getItem("portfolio");

  if (storedPortfolio) {
    console.info("Retrieved portfolio data from session storage.");
    return defer({
      payload: JSON.parse(storedPortfolio)
    });
  }

  const api = new ContentfulApi(SPACE_ID, API_KEY);
  const data = await api.get(
    ContentTypes.PORTFOLIO
  );

  sessionStorage.setItem(
    "portfolio",
    JSON.stringify(data)
  );

  return defer({
    payload: data
  });
};
