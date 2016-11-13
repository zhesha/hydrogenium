/**
 * Created by sashaz on 13.11.16.
 */
var game = new Phaser.Game(GAME_CANVAS_WIDTH, GAME_CANVAS_HEIGHT, Phaser.AUTO, 'game');

//globals
var background = null,
    trees = null,
    player = null,
    blocks = null,
    jumpKey = null;

var trigger, blockNumber;

var text, gamePhase = "start";

var PhaserGame = function () {};
PhaserGame.prototype = {

    init: function () {
        this.world.resize(GAME_CANVAS_WIDTH*5, GAME_CANVAS_HEIGHT);
    },

    preload: function () {
        this.load.crossOrigin = 'anonymous';

        preload(this.load);
    },

    create: function () {
        create.background();
        create.player();
        create.level();
        text = game.add.text(player.x, game.world.height/2, '', { fontSize: '52px', fill: '#000' });
        //controls.
        jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
    },


    update: function () {
        if (gamePhase == "start") {
            update.start();
        }
        if (gamePhase == "go") {
            update.go();
        }
        if (gamePhase == "end") {
            update.end();
        }
    },

    gameOver: function (player, block) {
        player.body.velocity.x = 0;
        player.x -= 5;
        player.play('stop');
        text.x = player.x;
        text.text = 'GAME OVER';
        gamePhase = "end";
    }

};

game.state.add('Game', PhaserGame, true);
