import { Model } from '../model';

export class Routes extends Model {
  
  set(key, value){
    this.setContent(key, value);
  }
  
  get(key){
    return this.getContent(key)
  }
  
  getAllElements(){
    return this.getAll();
  }
}