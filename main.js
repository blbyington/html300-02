  var numString = [];
    $(function numberStrings(){
      $('#numStringForm').on('submit', enterValue())
      numString.push($('#numStringForm :textarea').val());
      console.log(JSON.stringify(numString));
      var sum = 0;
      for (var i = 0; i <numString.length; i++){
      sum = sum + numString[i];
      } 
      if ($.isInteger($'#numStringForm :textarea').val())
      {
      $('#count').text(numString.length);
      $('#sum').text(sum.toFixed());
      $('#average').text(sum/count.toFixed());
      }
      else if (typeof ('#numStringForm :textarea') === 'string'){$('#strings').text(numString.length);
        document.getElementById("strings").innerHTML = myJSON;};
      $('#reset').click(function resetForm(){
          location.reload();

       });
}