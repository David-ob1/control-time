    const  stopwatch = document.getElementById("stopwatch")
    const playPauseButton = document.getElementById("play-pause")
    const seconsSphere = document.getElementById("seconds-sphere")
    

    let stopwatchInterval
    let runningTime = 0

    const playPause = () => {
        const isPaused = !playPauseButton.classList("running")

        if(isPaused){

            playPauseButton.classList.add("running")
            // playPauseButton.classList.toggle("running")

            start();
        }else {
            playPauseButton.classList.remove("running")
            // playPauseButton.classList.toggle("running")

            pause();

        }

    }

    const pause = ()=> {
        seconsSphere.style.animationPlayState = "paused"
        clearInterval(stopwatchInterval)

    }

    const stop = () => {
        seconsSphere.style.transform = 'rotate(-90deg) translateX(60px)'
        seconsSphere.style.animation = "none"
        playPauseButton.classList.remove('running')

        runningTime = 0
        clearInterval(stopwatchInterval)
        stopwatch.textContent = '00:00'
    }


    const start = ()=>{
        seconsSphere.style.animation = "rotacion 60s linear infinite"
        let startTime = Date.now() - runningTime
        seconsSphere.style.animationPlayState = "running"

        stopwatchInterval = setInterval(() =>{
            runningTime = Date.now () - startTime;
            stopwatch.textContent = calculateTime(runningTime)

        },1000 )

    }

    const calculateTime = runningTime => {
        const total_seconds = Math.floor(runningTime / 100)
        const total_minutes = Math.floor(total_seconds / 60)

        const display_seconds = (total_seconds % 60).toString().padStart(2,"0")
        const display_minutes = total_minutes.toString().padStart(2,"0")

        return `${display_minutes}:${display_seconds}`
    }