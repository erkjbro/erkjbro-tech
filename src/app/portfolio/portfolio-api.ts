import { type ContentfulClientApi, createClient } from "contentful";
import type { ContactFields, PortfolioFields, StaticPageFields, AllFields } from "./portfolio-types";

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

  get(type: ContentOptions.ABOUT): Promise<StaticPageFields>
  get(type: ContentOptions.CONTACT): Promise<ContactFields>
  get(type: ContentOptions.HOMEPAGE): Promise<PortfolioFields>
  get(type: ContentOptions.PORTFOLIO): Promise<PortfolioFields>
  public async get(type: ContentOptions): Promise<AllFields> {
    if (!(type && Object.values(ContentOptions).includes(type)))
      throw new Error("Invalid content type");

    const response = await this.client.getEntries({
      content_type: type,
      order: "sys.createdAt"
    });

    return response.items[0].fields as AllFields;
  }
}

export default ContentfulApi;
