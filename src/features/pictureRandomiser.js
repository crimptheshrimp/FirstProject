//selects a random picture from the array of pictures to show on the quiz completion page. The pictures are of popular music artists, which is the theme of the quiz.

const pictureRandomiser = () => {
    const pics = [
        "https://assets.capitalfm.com/2025/07/sabrina-carpenter-1740082007-editorial-short-form-0.png",
        "https://assets.capitalfm.com/2025/07/lady-gaga-mayhem-1740084202-editorial-short-form-0.png",
        "https://assets.capitalfm.com/2025/07/billie-eilish-1740082839-editorial-short-form-1.jpg",
        "https://assets.capitalfm.com/2025/07/the-weeknd-1740082648-editorial-short-form-0.jpg",
        "https://assets.capitalfm.com/2025/07/beyonc-1740083452-editorial-short-form-0.png",
        "https://assets.capitalfm.com/2026/03/harry-styles-kiss-disco-1768929222-editorial-short-form-1.jpg",
        "https://assets.capitalfm.com/2020/19/press-photo---pharrell-williams-1589191659-editorial-long-form-0.jpeg",
        "https://images.saymedia-content.com/.image/t_share/MjAwMjEzNTY1NDUyMzMwMzYw/best-female-pop-singers-of-the-2000s-and-2010s.jpg",
        "https://www.tjtoday.org/wp-content/uploads/2024/01/tate-mcrae-scaled.webp"
        
    ];
    const randomIndex = Math.floor(Math.random() * pics.length);
    return pics[randomIndex];
}

export default pictureRandomiser;