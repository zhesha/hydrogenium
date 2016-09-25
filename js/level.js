/**
 * Created by sashaz on 19.09.16.
 */
var level = [
    {
        triggerX: 345,
        boxPosition: {x: 350, y: BOX_BOTTOM},
        onTrigger: function (block) {}
    },
    {
        triggerX: 650,
        boxPosition: {x: 700, y: BOX_BOTTOM},
        onTrigger: function (block) {
            block.y -= 50;
        }
    },
    {
        triggerX: 1000,
        boxPosition: {x: 1050, y: BOX_BOTTOM},
        onTrigger: function (block) {
            block.x += 50;
        }
    },
    {
        triggerX: 1450,
        boxPosition: {x: 1500, y: BOX_BOTTOM},
        onTrigger: function (block) {
            block.x -= 50;
        }
    },
    {
        triggerX: 1790,
        boxPosition: {x: 1800, y: BOX_BOTTOM},
        onTrigger: function (block) {
            player.body.velocity.x = 0;
            player.x -= 5;
            player.play('stop');
            gameOverText = game.add.text(player.x, GAME_CANVAS_HEIGHT/2, '', { fontSize: '52px', fill: '#000' });
            gameOverText.text = 'WIN';
        }

    }
];