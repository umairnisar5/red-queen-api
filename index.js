/* Background animations */
var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };
  
  var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
  };
  
  var background1 = document.getElementById('background1');
  var background2 = document.getElementById('background2');
  
  var background1Movement = background1.animate(
  sceneryFrames, sceneryTimingBackground);
  background1Movement.currentTime = background1Movement.effect.timing.duration / 2;
  
  var background2Movement = background2.animate(
  sceneryFrames, sceneryTimingBackground);
  
  var foreground1 = document.getElementById('foreground1');
  var foreground2 = document.getElementById('foreground2');
  
  var foreground1Movement = foreground1.animate(
  sceneryFrames, sceneryTimingForeground);
  foreground1Movement.currentTime = foreground1Movement.effect.timing.duration / 2;

  
var foreground2Movement = foreground2.animate(
    sceneryFrames, sceneryTimingForeground);
    
    var spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }   
    ];
    
    var redQueen_alice_sprite = document.getElementById('red-queen_and_alice_sprite');
    
    var redQueen_alice = redQueen_alice_sprite.animate(
    spriteFrames, {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    });
    