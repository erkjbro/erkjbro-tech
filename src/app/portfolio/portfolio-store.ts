import { useEffect, useReducer, useState } from "react";
import { LinkFields, PortfolioFields } from "./portfolio-types";
import ContentfulApi, { ContentOptions } from "./portfolio-api";

const SPACE_ID = import.meta.env.VITE_CONTENT_SPACE_ID;
const API_KEY = import.meta.env.VITE_CONTENT_API_KEY;

const usePortfolioStore = () => {
  type Action = {
    type: "SET_PORTFOLIO";
    payload: PortfolioFields;
  }

  const INITIAL_STATE: PortfolioFields = {
    introduction: "",
    title: "",
    header: "Erik J Brown"
  };

  // TODO: Retrieve link data from Contentful. Could also be set as footer links
  const LINK_DATA: LinkFields[] = [
    { href: "mailto:erkjbro@erikjbrown.tech", text: "Email" },
    { href: "https://www.linkedin.com/in/erkjbro/", text: "LinkedIn" },
    { href: "https://github.com/erkjbro", text: "GitHub" },
    { href: "https://twitter.com/erkjbro", text: "Twitter" },
    { href: "https://www.upwork.com/fl/erkjbro", text: "Upwork" }
  ];

  const reducer = (state: PortfolioFields, action: Action): PortfolioFields => {
    let newState: PortfolioFields = state;
    switch (action.type) {
      case "SET_PORTFOLIO":
        newState = { ...newState, ...action.payload };
        sessionStorage.setItem("portfolio", JSON.stringify(newState));
        return newState;
      default:
        return state;
    }
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [state, dispatch] = useReducer(
    reducer,
    INITIAL_STATE
  );

  useEffect(() => {
    const storedPortfolio = sessionStorage.getItem("portfolio");

    if (storedPortfolio) {
      console.info("Retrieved portfolio data from session storage.");
      setLoading(false);
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
      } catch (error) {
        console.error(error);
        setError("Error retrieving page content.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    portfolio: state,
    links: LINK_DATA,
    loading,
    error
  };
};

export default usePortfolioStore;
