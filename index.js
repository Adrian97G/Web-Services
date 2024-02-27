// Efecto typeWriter
var isTyping = false; 

function typeWriterEffect() {
    if (!isTyping) {
        isTyping = true; 
        
        var text = "¿Necesitas ayuda? Escribenos ya mismo";
        var typingText = document.getElementById('typing-text');
        typingText.innerHTML = '';

        function typeWriter(text, i, typingText) {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(function() {
                    typeWriter(text, i, typingText);
                }, 100);
            } else {
                isTyping = false;
            }
        }

        typeWriter(text, 0, typingText);
    }
}
typeWriterEffect();
setInterval(typeWriterEffect, 9000);

