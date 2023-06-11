const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis',
};

function createAssemblyLine() {
    return {

        hasClima(myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = function () {
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp++;
                }
                if (myCar.temp > myCar.tempSettings) {
                    myCar.temp--;
                }
            }
        },

        hasAudio(myCar) {
            myCar.currentTrack = {
                name: null,
                artist: null
            }
            myCar.nowPlaying = function () {
                if (myCar.hasOwnProperty('currentTrack')) {
                    console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);
                }
            }

        },

        hasParktronic(myCar) {

            myCar.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                }
                if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                }
                if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            }
        }
    }
}

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.table(myCar);