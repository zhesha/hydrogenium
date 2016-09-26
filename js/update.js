/**
 * Created by sashaz on 26.09.16.
 */
var update = {
    start: function () {
        text.text = 'Press space to jump';
        if (jumpKey.isDown && player.body.y >= GAME_CANVAS_HEIGHT-PLAYER_HEIGHT) {
            text.text = "";
            gamePhase = "go";
            player.body.velocity.x = PLAYER_VELOCITY;
            player.play('right');
        }
    },
    go: function () {
        background.tilePosition.x = -(game.camera.x * 0.7);
        trees.tilePosition.x = -(game.camera.x * 0.9);

        game.physics.arcade.overlap(player, blocks, function () {
            gamePhase = "end";
        }, null, this);
        if (Phaser.Line.intersects(new Phaser.Line(player.x, player.y, player.x + PLAYER_WIDTH, player.y), trigger)) {
            level[blockNumber].onTrigger(blocks.children[blockNumber]);
            blockNumber++;
            if (blockNumber >= level.length) {
                return;
            }

            trigger = new Phaser.Line(level[blockNumber].triggerX, 0, level[blockNumber].triggerX, GAME_CANVAS_WIDTH);
        }

        if (jumpKey.isDown && player.body.y >= GAME_CANVAS_HEIGHT-PLAYER_HEIGHT)
        {
            player.body.velocity.y = PLAYER_JUMP_VELOCITY;
        }
    },
    end: function () {
        player.body.velocity.x = 0;
        player.play('stop');
        text.x = player.x;
        text.text = 'GAME OVER';
    }
};