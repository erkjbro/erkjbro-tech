import { useEffect, useReducer, useState } from "react";
// import { defer } from "react-router-dom";

import { FetchStatus } from "@erkjbro-tech/shared/meta";
import { ContentfulApi, ContentTypes } from "@erkjbro-tech/shared/apis";
import type { StaticPageFields } from "@erkjbro-tech/shared/apis";

const SPACE_ID: string = import.meta.env.VITE_CONTENT_SPACE_ID;
const API_KEY: string = import.meta.env.VITE_CONTENT_API_KEY;

// TODO: Convert to a static page store for an api lib component.
export type PortfolioStoreTuple = [FetchStatus, StaticPageFields];

const usePortfolioStore = (): PortfolioStoreTuple => {
  const INITIAL_STATE: StaticPageFields = {
    title: "",
    body: "",
    header: "Erik J Brown"
  };

  type ActionTypes = "SET_PORTFOLIO";
  type Actions = {
    type: ActionTypes;
    payload?: StaticPageFields;
  }

  const reducer = (state: StaticPageFields, action: Actions): StaticPageFields => {
    const newState = Object.assign({}, state, action.payload);
    switch (action.type) {
      case "SET_PORTFOLIO":
        sessionStorage.setItem("portfolio", JSON.stringify(newState));
        return newState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.LOADING);

  useEffect(() => {
    const storedPortfolio = sessionStorage.getItem("portfolio");

    if (storedPortfolio) {
      console.info("Retrieved portfolio data from session storage.");
      setStatus(FetchStatus.SUCCESS);
      return dispatch({
        type: "SET_PORTFOLIO",
        payload: JSON.parse(storedPortfolio)
      });
    }

    (async () => {
      try {
        const api = new ContentfulApi(SPACE_ID, API_KEY);
        const data = await api.get(
          ContentTypes.PORTFOLIO
        );

        dispatch({
          type: "SET_PORTFOLIO",
          payload: data
        });
        setStatus(FetchStatus.SUCCESS);
      } catch (error) {
        console.error(error);
        setStatus(FetchStatus.ERROR);
      }
    })();
  }, []);

  return [status, state];
};

export default usePortfolioStore;
