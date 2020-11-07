function Circlle(el){
    $(el).circleProgress({  

      fill: {
      gradient: ["green", "orange","red"], gradientAngle: Math.PI*2.3/4
    }

    })
	.on('circle-animation-progress', function(event ,progress, stepValue){
        
        $(this).find('strong2').text(String(stepValue.toFixed(2)*100)+ '%'

        );
    });
  };




  Circlle('.round');