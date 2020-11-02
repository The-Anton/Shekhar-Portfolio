
  function Circlle(el){
    $(el).circleProgress({  

      fill:{color: '#fffff'},
      value: 0.6

    })
	.on('circle-animation-progress', function(event ,progress, stepValue){
        
        $(this).find('strong2').text(String(stepValue.toFixed(2)*100)+ '%'

        );
    });
  };

  Circlle('.round');