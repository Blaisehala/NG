export class Quote {


  showDescription:boolean;
  votes:number;
  vote:number;
  constructor(public id:number, public title:string, public description:string,
     public author:string, public yourname:string, public postDate:Date = new Date(), 
     votes:number=0, vote:number=0){
this.showDescription=false;
this.votes=votes||0
this.vote=vote||0
  }
  upvote(){
    this.votes++
  }

  downvote(){
    this.vote++
  }

 

}
