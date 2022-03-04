const alertShow = () => {
    alert(`Open your book mmma is coming`);
};

const confirmShow = () => {
    const yourComment = confirm(`Never afraid Without Allah`);
    if (yourComment === true) {
        alert(`Say, There is no good without Allah`);
    } else {
        alert(`Inshaallah Allah is enough for believer.`)
    }
    console.log(yourComment);
}

const promptShow = () => {
    const yourOpinion = prompt(`Write your name`);
    console.log(yourOpinion);

}