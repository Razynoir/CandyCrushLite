(function(){
  if(typeof CandyCrush === "undefined"){
    window.CandyCrush = {};
  }

  var Candy = CandyCrush.Candy = function(row, col, $div){
    this.$div = $div;
    this.row = row;
    this.col = col;
  };

  Candy.prototype.moveDown = function(){
    this.$div.removeClass("row-" + (this.row) + "-col-" + (this.col));
    this.$div.addClass("row-" + (Number(this.row) + 1) + "-col-" + (this.col));

    this.$div.attr("row-index", Number(this.row) + 1);
    this.row = Number(this.row) + 1;
  };

  Candy.prototype.destroy = function(){
    this.$div.remove();
  };

  Candy.prototype.isCandy = function(){
    return true;
  };
})();