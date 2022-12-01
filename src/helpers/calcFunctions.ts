

export function cacher(index: number, img: HTMLImageElement, tab: string[]) {
    setTimeout(function(){
        img.setAttribute("src", `${tab[index]}`)
        img.style.transition = "opacity 1.5s ease-in-out !important";
    }, index * 2000)
}
export function timme(tab: string[], img: HTMLImageElement){
    for(let i = 0; i < tab.length ;i++){
         cacher(i, img, tab)
    }
}
