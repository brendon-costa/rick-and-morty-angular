

export interface ResponseListModel<Result> {
  info: ResponseInfoListModel;
  results: Result;
}

export interface ResponseInfoListModel {
  count: number;
  pages: number;
  next: string;
  prev: any;
}
