export type TabType = 'Work' | 'Side';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: TabType;
  notionPageId: string;
  tags?: string[];
  period?: string;
};

export type NotionBlock = {
  id: string;
  type: string;
  [key: string]: any;
};

export type NotionContent = {
  blocks: NotionBlock[];
};
