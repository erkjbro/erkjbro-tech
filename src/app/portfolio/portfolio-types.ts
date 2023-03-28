export type ContactFields = {
  title: string;
  href: string;
  text: string;
  logo?: string;
}

export type StaticPageFields = {
  title: string;
  header: string;
  body: string;
}

export type PortfolioFields = StaticPageFields & {
  introduction: string;
}

export type AllFields = PortfolioFields | StaticPageFields | ContactFields;
