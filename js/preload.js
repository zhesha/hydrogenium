/**
 * Created by sashaz on 13.11.16.
 */
function preload (load) {
    var prefix = "assets/";

    if (platform.isIOS) {
        prefix = "";
    }

    load.image('trees', prefix + 'trees-h.png');
    load.image('background', prefix + 'clouds-h.png');
    load.spritesheet('death', prefix + 'death.png', 52, 51);
    load.spritesheet('block', prefix + 'block.png', BLOCK_SIZE, 38);
    load.spritesheet('dude', prefix + 'dude.png', PLAYER_WIDTH, PLAYER_HEIGHT);
}