export interface BaseModel {
  create(data: any): Promise<any>;
  getAll(): Promise<any[]>;
  getById(id: number): Promise<any>;
  update(id: number, data: any): Promise<any>;
  delete(id: number): Promise<any>;
}
