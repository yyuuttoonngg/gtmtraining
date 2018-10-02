// errors/issues
// 1. var swarm is defined but never called
// 2. on the line of : } catch(e){
// missing } and code block to handle error after '{'
// 3. if(seaCreatureCount === seaCreatureTotal)
// should be '==' because seaCreatureCount is number and seaCreatureTotal string
// 4. function createSeaCreature is missing
// 5. method .move on object aliveSeaCreatures[i] is missing, it should be part of function createSeaCreature
// 6. for (var i = 1; i < aliveSeaCreatures.length; i++) {
//   should be  var i = 0, because aliveSeaCreatures' index starts from 0
// 7. setInterval(moveCreatures, 1000);
// return moveCreaturesId;
// should be moveCreaturesId = setInterval(moveCreatures, 1000)
// 8 	if(randomPickIndex >= 0) {} can be deleted since randomPickIndex is always >= 0
// 9 function addSeaCreature (){} should use function declaration, if using function expression, it has to be defined before while loop. Because as function expression, only the variable name is being hoisted to the top, so when it's being called in the while loop, it's not a function. Using function declaration can make javascript to hoist the whole function, thus solve this problem.
// 10 switch(randomPickIndex) should be switch(seaCreature)

(function(){
	try {
		var seaCreatures = ['crab','octopus','sea cucumber', 'shark'];
		var aliveSeaCreatures = [];
		var pickSeaCreature = true;
		var seaCreatureCount = 0;
    var seaCreatureTotal = '100';

    while(pickSeaCreature) {	
      seaCreatureCount += 1;
      addSeaCreature()   
			if(seaCreatureCount == seaCreatureTotal)
				pickSeaCreature = false;
    }

		function addSeaCreature (){
      var randomPickIndex =Math.round(Math.random(seaCreatures.length));
      var seaCreature = seaCreatures[randomPickIndex];
      var xPos = Math.random()*window.screen.width;
      var yPos = Math.random()*window.screen.height;
      var onSeaBed = false;
      
      switch(seaCreature) {
        case 'crab' : 
        case 'sea cucumber' : 
          onSeaBed = true;
          yPos = 0;
      }
      var createSeaCreature = (index,x,y) => {
        let creature = {
          name: seaCreatures[index],
          move: function(x,y){
            // function to update creature's location
          }
        }
        return creature;
      }
      var creature = createSeaCreature(seaCreature, xPos, yPos);
      aliveSeaCreatures.push(creature);
    }

		var moveCreaturesId;
		var moveCreatures = function(){
			for (var i = 0; i < aliveSeaCreatures.length; i++) {
        aliveSeaCreatures[i].move();
			}
			if(moveCreaturesId)
				clearInterval(moveCreaturesId);
      moveCreaturesId = setInterval(moveCreatures, 1000);
		}
		moveCreatures();
	} catch(e){
    // code to handle errors
  }
})()



