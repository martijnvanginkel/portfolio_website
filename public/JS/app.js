const swup = new Swup();

/* Preload gifs */
new Image().src = "/images/word_game_thumbnail.gif";




/* Typewriter effect */
const waitForTimer = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const typeWriter = async (source, dest, speed) => {
    let i = 0;

    if (dest == null) {
        return ;
    }

    const goType = async () => {
        dest.innerHTML += source[i];
        i++;
        if(i < source.length){
            await waitForTimer(speed);
            await goType();
        }
    }
    await goType();
}


document.addEventListener("DOMContentLoaded", async () => {
    const header = document.getElementById('intro_header');
    const paragraph = document.getElementById('intro_paragraph');
    const link = document.getElementById('intro_link');
    const title = "Hi I'm Martijn";
    const sub_title = `Im a developer with a wide-range of skills. Go checkout my `;

    await typeWriter(title, header, 50);
    await typeWriter(sub_title, paragraph, 40);
    typeWriter('work', link, 40);
});


document.querySelector('.about_link').addEventListener('click', () => {

    const element = document.querySelector('#about_title');

    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });   
})