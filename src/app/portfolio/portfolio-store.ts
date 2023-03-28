import { useEffect, useReducer, useState } from "react";
import type { ContactFields, PortfolioFields } from "./portfolio-types";
import ContentfulApi, { ContentOptions } from "./portfolio-api";

const SPACE_ID: string = import.meta.env.VITE_CONTENT_SPACE_ID;
const API_KEY: string = import.meta.env.VITE_CONTENT_API_KEY;

export enum FetchStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

// TODO: Convert to a static page store for an api lib component.
export type PortfolioStoreTuple = [FetchStatus, PortfolioFields, ContactFields[]];

const usePortfolioStore = (): PortfolioStoreTuple => {
  // TODO: Convert to StaticPageFields.
  const INITIAL_STATE: PortfolioFields = {
    introduction: "",
    title: "",
    body: "",
    header: "Erik J Brown"
  };

  // TODO: Move to a footer component (or someplace else), and fetch from Contentful.
  const LINK_DATA: ContactFields[] = [
    { title: "", href: "mailto:erkjbro@erikjbrown.tech", text: "Email" },
    { title: "", href: "https://www.linkedin.com/in/erkjbro/", text: "LinkedIn" },
    { title: "", href: "https://github.com/erkjbro", text: "GitHub" },
    { title: "", href: "https://twitter.com/erkjbro", text: "Twitter" },
    { title: "", href: "https://www.upwork.com/fl/erkjbro", text: "Upwork" }
  ];

  type ActionTypes = "SET_PORTFOLIO";
  type Actions = {
    type: ActionTypes;
    payload?: PortfolioFields;
  }

  const reducer = (state: PortfolioFields, action: Actions): PortfolioFields => {
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
        const data = await api.get(ContentOptions.HOMEPAGE);

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

  return [status, state, LINK_DATA];
};

export default usePortfolioStore;