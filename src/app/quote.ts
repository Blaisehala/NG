export class Quote {

  showDescription:boolean;
  constructor(public id:number, public title:string, public description:string, public author:string, public yourname:string, public postDate:Date = new Date()){
this.showDescription=false;
  }

 

}
