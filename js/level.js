/**
 * Created by sashaz on 19.09.16.
 */
var level = [
    {
        triggerX: 345,
        boxPosition: {x: 350, y: BOX_BOTTOM},
        onTrigger: function (block) {
            block.play('deadly');
        }
    },
    {
        triggerX: 650,
        boxPosition: {x: 700, y: BOX_BOTTOM},
        onTrigger: function (block) {
            block.play('deadly');
            block.y -= 50;
        }
    },
    {
        triggerX: 1000,
        boxPosition: {x: 1050, y: BOX_BOTTOM-50},
        onTrigger: function (block) {
            block.play('deadly');
            block.y += 50;
        }
    },
    {
        triggerX: 1350,
        boxPosition: {x: 1400, y: BOX_BOTTOM},
        onTrigger: function (block) {
            block.play('deadly');
            block.x += 50;
        }
    },
    {
        triggerX: 1790,
        boxPosition: {x: 1800, y: BOX_BOTTOM},
        onTrigger: function (block) {
            block.play('deadly');
            block.x -= 50;
        }
    },
    {
        triggerX: 2090,
        boxPosition: {x: 2100, y: BOX_BOTTOM},
        onTrigger: function (block) {
            player.body.velocity.x = 0;
            player.x -= 5;
            player.play('stop');
            text.x = player.x;
            text.text = 'WIN';
        }
    }
];