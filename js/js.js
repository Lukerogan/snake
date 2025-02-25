let lastRenderTime = 0
const SNAKE_SPEED = 1

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return

    }
    console.log(secondsSinceLastRender)
    lastRenderTime = currentTime
}


window.requestAnimationFrame(main)