export interface AllFranchiseType {
  id: number;
  name: string;
  description: string;
  logo_url: string;
  lvl: number;
  investment: string;
  paysh: string;
  royalty: string;
  year_of_foundation: number;
  geography: string;
  profit: string;
  payback: number;
  url_franchise: string;
  presentation: string;
  model_of_finance: string;
  favorite: boolean;
  available: boolean;
  dogovor: string;
  photos: string[];
  category: AllFranchiseCategoryType[];
  package_of_services: AllFranchiseServicesType[];
}

interface AllFranchiseCategoryType {
  id: number;
  name: string;
  summ: number;
}

interface AllFranchiseServicesType {
    id: number;
    name: string;
}

export interface AllFranchiseScheme {
    franchiseArr?: AllFranchiseType[]
}
