// Simple JavaScript to handle mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const chatItems = document.querySelectorAll('.chat-item');
    const sidebar = document.getElementById('sidebar');
    const chatContentArea = document.getElementById('chatContentArea');
    const backButton = document.getElementById('backButton');
    
    // Handle chat item clicks
    chatItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            chatItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // For mobile: hide sidebar, show chat area
            if (window.innerWidth <= 768) {
                sidebar.classList.add('hidden');
                chatContentArea.classList.add('active');
            }
        });
    });
    
    // Handle back button click
    backButton.addEventListener('click', function() {
        sidebar.classList.remove('hidden');
        chatContentArea.classList.remove('active');
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('hidden');
            chatContentArea.classList.remove('active');
            chatContentArea.style.display = 'flex';
        } else {
            if (document.querySelector('.chat-item.active')) {
                sidebar.classList.add('hidden');
                chatContentArea.classList.add('active');
            }
        }
    });
});