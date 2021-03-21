/**
 * 
 * @abstract class
 * 
 */

export class Model {
    constructor(){
        this.content = {}
    }
    //setter
    setContent(key, value){
        this.content[key] = value;
    }
    //getter
    getContent(key){
        return this.content[key];
    }
    //get the hole content object
    getAll(){
        return this.content
    }
    //remove spec key
    removeContent(key){
        delete this.content[key]
    }
    //reset the content
    resetContent(){
        this.content = {}
    }
}