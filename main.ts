input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
})
music.setVolume(47)
basic.forever(function () {
	
})
