export interface Asset {
    createdAt: string;
    id?: string;
    publishedAt: string;
    fileName: string;
    url: string;
    updatedAt: string;
  }
  
  export interface AssetPageProps {
    data: Asset[];
  }
  
