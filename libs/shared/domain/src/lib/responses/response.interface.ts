export interface Response<T = any, E = any> {
  data: T;
  error: E;
}
