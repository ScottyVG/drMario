var drMarioGame=drMarioGame||{};drMarioGame.Game=function(){},drMarioGame.Game.prototype={create:function(){this.map=this.game.add.tilemap("drmarioTiled"),this.map.addTilesetImage("tiles","gameTiles"),this.backgroundlayer=this.map.createLayer("backgroundLayer"),this.blockedLayer=this.map.createLayer("blockedLayer"),this.map.setCollisionBetween(1,2e3,!0,"blockedLayer"),this.backgroundlayer.resizeWorld()}};