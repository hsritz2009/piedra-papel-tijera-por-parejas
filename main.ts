input.onGesture(Gesture.Shake, function () {
    jugada = randint(1, 3)
    radio.sendNumber(jugada)
    if (jugada == 1) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(1500)
        if (receivedString == 1) {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(4)
        } else if (receivedString == 2) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        }
    } else if (jugada == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (jugada) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    jugada23 = randint(1, 3)
    if (jugada23) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(1500)
        if (receivedString == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else if (receivedString == 2) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(4)
        }
    } else if (jugada23 == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (jugada23) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (false) {
    	
    } else {
    	
    }
})
let jugada23 = 0
let jugada = 0
radio.setGroup(51)
