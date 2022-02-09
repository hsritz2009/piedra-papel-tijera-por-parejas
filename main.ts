let jugada = 0
radio.setGroup(51)
basic.forever(function () {
    jugada = randint(1, 3)
    if (jugada == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (jugada == 2) {
        basic.showLeds(`
            # # . . .
            # # # . #
            . . . # .
            # # # . #
            # # . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    }
})
