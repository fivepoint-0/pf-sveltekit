export type AnimationName = "boingInUp" |
    "boingOutDown" |
    "bombLeftOut" |
    "bombRightOut" |
    "foolishIn" |
    "holeOut" |
    "openDownLeft" |
    "openDownLeftOut" |
    "openDownLeftReturn" |
    "openDownRight" |
    "openDownRightOut" |
    "openDownRightReturn" |
    "openUpLeft" |
    "openUpLeftOut" |
    "openUpLeftReturn" |
    "openUpRight" |
    "openUpRightOut" |
    "openUpRightReturn" |
    "perspectiveDown" |
    "perspectiveDownReturn" |
    "perspectiveLeft" |
    "perspectiveLeftReturn" |
    "perspectiveRight" |
    "perspectiveRightReturn" |
    "perspectiveUp" |
    "perspectiveUpReturn" |
    "puffIn" |
    "puffOut" |
    "rotateDown" |
    "rotateLeft" |
    "rotateRight" |
    "rotateUp" |
    "slideDown" |
    "slideDownReturn" |
    "slideLeft" |
    "slideLeftReturn" |
    "slideRight" |
    "slideRightReturn" |
    "slideUp" |
    "slideUpReturn" |
    "spaceInDown" |
    "spaceInLeft" |
    "spaceInRight" |
    "spaceInUp" |
    "spaceOutDown" |
    "spaceOutLeft" |
    "spaceOutRight" |
    "spaceOutUp" |
    "swap" |
    "swashIn" |
    "swashOut" |
    "tinDownIn" |
    "tinDownOut" |
    "tinLeftIn" |
    "tinLeftOut" |
    "tinRightIn" |
    "tinRightOut" |
    "tinUpIn" |
    "tinUpOut" |
    "twisterInDown" |
    "twisterInUp" |
    "vanishIn" |
    "vanishOut"

const ANIMATIONS: AnimationName[] = ['boingInUp', 'boingOutDown', 'bombLeftOut', 'bombRightOut', 'foolishIn', 'holeOut', 'openDownLeft', 'openDownLeftOut', 'openDownLeftReturn', 'openDownRight', 'openDownRightOut', 'openDownRightReturn', 'openUpLeft', 'openUpLeftOut', 'openUpLeftReturn', 'openUpRight', 'openUpRightOut', 'openUpRightReturn', 'perspectiveDown', 'perspectiveDownReturn', 'perspectiveLeft', 'perspectiveLeftReturn', 'perspectiveRight', 'perspectiveRightReturn', 'perspectiveUp', 'perspectiveUpReturn', 'puffIn', 'puffOut', 'rotateDown', 'rotateLeft', 'rotateRight', 'rotateUp', 'slideDown', 'slideDownReturn', 'slideLeft', 'slideLeftReturn', 'slideRight', 'slideRightReturn', 'slideUp', 'slideUpReturn', 'spaceInDown', 'spaceInLeft', 'spaceInRight', 'spaceInUp', 'spaceOutDown', 'spaceOutLeft', 'spaceOutRight', 'spaceOutUp', 'swap', 'swashIn', 'swashOut', 'tinDownIn', 'tinDownOut', 'tinLeftIn', 'tinLeftOut', 'tinRightIn', 'tinRightOut', 'tinUpIn', 'tinUpOut', 'twisterInDown', 'twisterInUp', 'vanishIn', 'vanishOut']

function setAnimation(animationName: AnimationName, element: HTMLElement | string, wait: number = 0) {
    if (!(element instanceof HTMLElement)) {
        setTimeout(() => {
            let selected = document.querySelector(element)
            removeAnimations(element)
            selected?.classList.add('magictime', animationName)
        }, wait)
    }
}

function removeAnimations(element: HTMLElement | string) {
    if (!(element instanceof HTMLElement)) {
        let selected = document.querySelector(element)
        selected?.classList.forEach(className => {
            if (ANIMATIONS.includes(className as AnimationName)) {
                selected?.classList.remove(className)
            }
        })
    }
}

export { setAnimation, removeAnimations, ANIMATIONS }