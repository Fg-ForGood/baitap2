function playVideo() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'flex';
    iframe.src = "https://www.youtube.com/embed/AQn8VTHTUmM?si=VRb9-TqNhD-FmbZJ"; // Thêm autoplay
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    iframe.src = ''; 
}
