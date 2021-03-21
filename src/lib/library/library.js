import { Routes } from '../routes';
import { Components } from '../components';
import { Functions } from '../functions';

class Library {
    
  constructor(){
    this.routes = new Routes();
    this.components = new Components();
    this.functions = new Functions();
  }
  
  addRoute(key, value){
    this.routes.set(key, value);
  }
  
  getRoute(key){
    return this.routes.get(key);
  }
  
  getRoutes(){
    return this.routes.getAllElements()
  }
  
  addComponent(key, value){
    this.components.set(key, value);
  }
  
  getComponent(key){
    return this.components.get(key);
  }
  
  getComponents(){
    return this.components.getAllElements();
  }
  
  addFunction(key, value){
    this.functions.set(key, value);
  }
  
  getFunction(key){
    return this.functions.get(key);
  }
  
}

const LibraryInstance = new Library();

export { LibraryInstance as Lib };