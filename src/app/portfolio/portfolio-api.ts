import { type ContentfulClientApi, createClient } from "contentful";
import { type PortfolioFields } from "./portfolio-types";

export enum ContentOptions {
  HOMEPAGE = "homepage",
  ABOUT = "about",
  CONTACT = "contact",
  PORTFOLIO = "portfolio"
}

class ContentfulApi {
  private client: ContentfulClientApi;
  private readonly spaceId: string;
  private readonly accessToken: string;

  constructor(spaceId: string, accessToken: string) {
    this.spaceId = spaceId;
    this.accessToken = accessToken;
    this.client = createClient({
      space: this.spaceId,
      accessToken: this.accessToken
    });
  }

  get(type: ContentOptions.HOMEPAGE): Promise<PortfolioFields>
  public async get(type = "homepage") {
    const response = await this.client.getEntries({
      content_type: type,
      order: "sys.createdAt"
    });
    return response.items[0].fields;
  }
}

export default ContentfulApi;
