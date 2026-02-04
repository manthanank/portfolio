export interface UseItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  link?: string;
  tags: string[];
}

export interface UseCategory {
  id: string;
  name: string;
  icon: string;
}
