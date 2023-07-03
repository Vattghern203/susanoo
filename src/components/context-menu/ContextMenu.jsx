export function ContextMenu() {

    const contextMenu = document.querySelector(".wrapper")
    const shareMenu = document.querySelector(".share-menu")

    document.addEventListener("contextmenu", event => {
        event.preventDefault()

        let x = event.offsetX
        let y = event.offsetY

        let winWidth = window.innerWidth
        let winHeight = window.innerHeight

        let cmWidth = contextMenu.offsetWidth
        let cmHeight = contextMenu.offsetHeight

        if (x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
            shareMenu.style.left = "-200px"

        }

        else {

            shareMenu.style.right = "-200px"
            shareMenu.style.left = ""
        }

        x = x > winWidth - cmWidth ? winWidth - cmWidth : x
        y = y > winHeight - cmHeight ? winHeight - cmHeight : y

        contextMenu.style.left = `${x}px`
        contextMenu.style.top = `${y}px`
        contextMenu.style.visibility = "visible"
    })

    document.addEventListener("click", () => contextMenu.style.visibility = "hidden")

    return (

        <div class="wrapper">
            <div class="content">
                <ul class="menu">
                    <li class="item">
                        <em class="uil uil-eye"></em>
                        <span>Preview</span>
                    </li>
                    <li class="item share">
                        <div>
                            <em class="uil uil-share"></em>
                            <span>Share</span>
                        </div>
                        <em class="uil uil-angle-right"></em>
                        <ul class="share-menu">
                            <li class="item">
                                <em class="uil uil-twitter-alt"></em>
                                <span>Twitter</span>
                            </li>
                            <li class="item">
                                <em class="uil uil-instagram-alt"></em>
                                <span>Instagram</span>
                            </li>
                            <li class="item">
                                <em class="uil uil-telegram-alt"></em>
                                <span>Telegram</span>
                            </li>
                            <li class="item">
                                <em class="uil uil-dribbble"></em>
                                <span>Dribbble</span>
                            </li>
                        </ul>
                    </li>
                    <li class="item">
                        <em class="uil uil-link-alt"></em>
                        <span>Get Link</span>
                    </li>
                    <li class="item">
                        <em class="uil uil-edit"></em>
                        <span>Rename</span>
                    </li>
                    <li class="item">
                        <em class="uil uil-trash-alt"></em>
                        <span>Delete</span>
                    </li>
                </ul>
                <div class="setting">
                    <li class="item">
                        <em class="uil uil-setting"></em>
                        <span>Setting</span>
                    </li>
                </div>
            </div>
        </div>

    )
}