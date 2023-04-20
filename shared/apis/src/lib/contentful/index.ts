import { type ContentfulClientApi, createClient } from "contentful";
import type { ContactFields, StaticPageFields, AllFields } from "./types";

export enum ContentTypes {
  ABOUT = "place_id_here",
  PORTFOLIO = "6z4kT13Z1nzOQ9NlxoMIgN",
  CONTACT = "place_id_here",
}

export class ContentfulApi {
  private client: ContentfulClientApi;
  private readonly spaceId: string;
  private readonly accessToken: string;

  constructor(spaceId: string, accessToken: string) {
    this.spaceId = spaceId;
    this.accessToken = accessToken;
    this.client = createClient({
      space: this.spaceId,
      accessToken: this.accessToken,
      environment: "master"
    });
  }

  get(type: ContentTypes.ABOUT): Promise<StaticPageFields>
  get(type: ContentTypes.CONTACT): Promise<ContactFields>
  get(type: ContentTypes.PORTFOLIO): Promise<StaticPageFields>
  public async get(type: ContentTypes): Promise<AllFields> {
    if (!(type && Object.values(ContentTypes).includes(type)))
      throw new Error("Invalid content type");

    const response = await this.client.getEntry(type);

    return response.fields as AllFields;
  }
}
