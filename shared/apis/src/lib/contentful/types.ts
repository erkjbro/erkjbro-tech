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

export type AllFields = StaticPageFields | ContactFields;
