export interface BookDTO {
  id: string;
  title: string;
  author: string;
  release_date: Date;
}

export interface FindBookDTO {
  title: string;
}
