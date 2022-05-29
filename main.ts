let speler = 0
let meteoorx = 0
input.onButtonPressed(Button.A, function () {
    led.unplot(speler, 4)
    speler += -1
    led.plot(speler, 4)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    speler = 2
    led.plot(speler, 4)
    meteoorx = randint(0, 4)
    for (let meteoory = 0; meteoory <= 4; meteoory++) {
        led.plot(meteoorx, meteoory)
        basic.pause(200)
        led.unplot(meteoorx, meteoory)
    }
    if (speler == meteoorx) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(speler, 4)
    speler += 1
    led.plot(speler, 4)
})
