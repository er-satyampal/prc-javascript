/*const test = {
    prop: 42,
    func: function() {
      return this.prop;
    }
  };
  
  console.log(test.func());
  // expected output: 42  
document.getElementById('box').innerHTML = man.final_result();*/



//const a = {
//    b : 3,
//};
//document.getElementById('box').innerHTML = a.b;


const a = {
    b : 3,
    final : function () {
        return a;
    }

};
document.getElementById('box').innerHTML = a.final;