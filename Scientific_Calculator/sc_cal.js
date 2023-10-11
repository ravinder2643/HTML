let mintra ={
    pname : "shirt",
    site : "myntra",
    price : 200 ,
    arr : [],
   buy :function(Cname,email) {
      console.log(`hii ${Cname} you buy ${this.pname} from ${this.site} of ${this.price} and your ${email}`);
      this.arr.push({Cusname:{Cname},email:{email}})
   }
}
// mintra.buy("Ravi",'ravi@gamil.com');
// console.log(mintra.arr);

let  amazone={
    pname : "paint",
    site : "myntra",
    price : 200 ,
    arr : []
}
let  fpcart={
    pname : "shirt",
    site : "myntra",
    price : 200 ,
    arr : []
}

buy.acall(mintra,'Ravi','ravi@gmail')