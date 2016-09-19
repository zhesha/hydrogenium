/**
 * Created by sashaz on 19.09.16.
 */
var level = [
    {
        triggerX: 295,
        boxPosition: {x: 300, y: BOX_BOTTOM},
        onTrigger: function (block) {
            console.log(2)
        }

    },
    {
        triggerX: 500,
        boxPosition: {x: 550, y: BOX_BOTTOM},
        onTrigger: function (block) {
            console.log("win");
        }

    }
];