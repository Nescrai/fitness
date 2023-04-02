export enum SelectedPage {
  Home = "home",
  About = "about",
  Gallery = "gallery",
  Benefits = "benefits",
  Classes = "classes",
  Contact = "contact",
}

export interface BenefitType {
  icon: JSX.Element
  title: string;
  description: string;
}