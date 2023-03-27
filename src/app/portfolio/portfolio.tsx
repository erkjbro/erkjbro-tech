import { FC, ReactNode, useEffect, useReducer, useState } from "react";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";

import { ContactList, PortfolioContent, StyledPortfolio } from "./portfolio.styled";
import { Loader } from "../app";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

const Portfolio: FC<PortfolioProps> = (props) => {
  // TODO: Move Contentful API logic to a separate file / area.
  type Link = {
    href: string;
    text: string;
  }

  type Field = {
    introduction: string;
    title: string;
    header: string;
  }

  // TODO: Retrieve link data from Contentful. Could also be set as footer links
  const linkData: Link[] = [
    { href: "mailto:erkjbro@erikjbrown.tech", text: "Email" },
    { href: "https://www.linkedin.com/in/erkjbro/", text: "LinkedIn" },
    { href: "https://github.com/erkjbro", text: "GitHub" },
    { href: "https://twitter.com/erkjbro", text: "Twitter" },
    { href: "https://www.upwork.com/fl/erkjbro", text: "Upwork" }
  ];

  const client = createClient({
    space: import.meta.env.VITE_CONTENT_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENT_API_KEY
  });

  const INITIAL_CONTENT_STATE: Field = {
    introduction: "",
    title: "",
    header: "Erik J Brown"
  };

  enum actionTypes {
    UPDATE_CONTENT = "UPDATE_CONTENT"
  }

  type Action = {
    type: actionTypes;
    payload: Field;
  }

  const contentReducer = (state: Field, action: Action ): Field => {
    switch (action.type) {
      case actionTypes.UPDATE_CONTENT:
        sessionStorage.setItem("portfolio", JSON.stringify({
          ...state,
          ...action.payload
        }));
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }

  // TODO: Move business logic to a separate store file.
  const [content, dispatchContent] = useReducer(
    contentReducer,
    INITIAL_CONTENT_STATE,
    () => {
      const sessionContent = sessionStorage.getItem("portfolio");
      if (sessionContent) {
        console.info("Retrieved content from session storage.")
        return JSON.parse(sessionContent);
      } else {
        return INITIAL_CONTENT_STATE;
      }
    }
  );

  // TODO: loading and error states should be
  //  part of an async wrapper component.
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const sessionContent = sessionStorage.getItem("portfolio")

        if (sessionContent)
          return;

        const response = await client.getEntries({
          content_type: "homepage",
          order: "sys.createdAt"
        });

        const fields = response.items[0].fields as Field;

        dispatchContent({
          type: actionTypes.UPDATE_CONTENT,
          payload: fields
        });
      } catch (e) {
        console.error(e);
        setError("Error retrieving content.");
      } finally {
        setLoading(false);
      }
    })();
  }, [actionTypes.UPDATE_CONTENT, client]);

  // TODO: Setup Suspense (Loading) and Error Boundary wrappers for
  //  pages with async content.
  return (
    <StyledPortfolio>
      <div>
        <h1>{content?.header}</h1>
      </div>
      {/*TODO: Display error as snackbar notification. */}
      {(!loading && error) ?? <p>{error}</p>}
      {(loading && !error) ? <Loader /> : (
        <>
          <PortfolioContent>
            {content.introduction && (
              <ReactMarkdown>
                {content.introduction}
              </ReactMarkdown>
            )}
            <ContactList>
              {linkData.map(({ href, text }, i) => (
                <HtmlLink href={href} key={i}>{text}</HtmlLink>
              ))}
            </ContactList>
          </PortfolioContent>
          <code>Last edited on {content.title}</code>
        </>
      )}
    </StyledPortfolio>
  );
};

interface HtmlLinkProps {
  children: ReactNode;
  href: string;
}

const HtmlLink: FC<HtmlLinkProps> = ({ href, children }) => {
  const aProps = isValidHttpUrl(href) ? ({
    href,
    hrefLang: "en-US",
    target: "_blank",
    rel: "noopener noreferrer"
  }) : ({
    href,
    target: "_blank"
  });

  return (
    <li><a {...aProps}>
      {children}
    </a></li>
  );
};

const isValidHttpUrl = (val: string): boolean => {
  const re = new RegExp("^(http|https)://", "i");
  return re.test(val);
};

export default Portfolio;
