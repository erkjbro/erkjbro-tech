import { FC, ReactNode, useEffect, useState } from "react";
import { createClient } from "contentful";

import { Hr, Main, PortfolioContainer, StyledList } from "./portfolio-styled";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PortfolioProps {
}

export const Portfolio: FC<PortfolioProps> = (props) => {
  type Link = {
    href: string;
    text: string;
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

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchContent = async () => {
      const response = await client.getEntries({
        content_type: "homepage"
      });
      if (response.items.length > 0) {
        const { introduction } = response.items[0].fields as { introduction: string, title: string };
        setContent(introduction);
      }
    };
    fetchContent();
  }, [client]);

  return (
    <PortfolioContainer>
      <div>
        <h1>Erik J Brown Tech LLC</h1>
      </div>
      <Main>
        {content && (<div>
          {content.split('---').map((p, i) => <p key={i}>{p.trim()}</p>)}
        </div>)}
        <Hr />
        <StyledList>
          {linkData.map(({ href, text }, i) => (
            <HtmlLink href={href} key={i}>{text}</HtmlLink>
          ))}
        </StyledList>
      </Main>
    </PortfolioContainer>
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
