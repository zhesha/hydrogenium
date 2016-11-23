/**
 * Created by sashaz on 19.09.16.
 */
var create = {
    background: function () {
        background = game.add.tileSprite(0, 0, GAME_CANVAS_WIDTH, GAME_CANVAS_HEIGHT, 'background');
        background.fixedToCamera = true;

        trees = game.add.tileSprite(0, GAME_CANVAS_HEIGHT - TREE_HEIGHT, GAME_CANVAS_WIDTH, TREE_HEIGHT, 'trees');
        trees.fixedToCamera = true;
    },

    player: function () {
        player = game.add.sprite(50, GAME_CANVAS_HEIGHT-PLAYER_HEIGHT, 'dude');

        game.physics.arcade.enable(player);

        player.body.gravity.y = PLAYER_GRAVITY;
        player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        player.animations.add('stop', [1], 10, true);
        player.animations.add('right', [2, 3, 4, 5], 15, true);
        game.camera.follow(player);
    },

    level: function () {
        blocks = game.add.group();
        blocks.enableBody = true;
        var block;

        level.forEach(function (box) {
            block = game.add.sprite(box.boxPosition.x, box.boxPosition.y, 'block');
            block.animations.add('calm', [0], 10, true);
            block.animations.add('deadly', [1], 10, true);
            block.play('calm');
            blocks.add(block);
            //blocks.create(box.boxPosition.x, box.boxPosition.y, 'block');
        });
        blockNumber = 0;
        trigger = new Phaser.Line(level[0].triggerX, 0, level[0].triggerX, GAME_CANVAS_WIDTH);
    }
};