// intro.js
document.addEventListener('DOMContentLoaded', () => {
    const sound = document.getElementById('yunflix-sound');
    
    // 두둥 사운드 재생
    sound.currentTime = 0;
    sound.play();

    // 2.8초 후 index.html로 이동
    setTimeout(() => {
        window.location.href = 'yunflix.html';
    }, 2800); // 2800ms == 2.8초

    // 새로고침 시 애니메이션 다시 시작
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            window.location.reload();
        }
    });
});
