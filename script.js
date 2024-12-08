document.addEventListener('DOMContentLoaded', () => {
    const dynamicText1 = document.getElementById('dynamic-text-1');
    const dynamicText2 = document.getElementById('dynamic-text-2');
    const dynamicText3 = document.getElementById('dynamic-text-3');
  
    const phrases = [
        "Welcome to my portfolio",
        "I am Jihene Kachouri",
        "ECU Tester"
    ];
  
    let phraseIndex = 0;
    let charIndex = 0;
  
    function typeText() {
        if (charIndex < phrases[phraseIndex].length) {
            if (phraseIndex === 0) {
                dynamicText1.textContent += phrases[phraseIndex][charIndex];
            } else if (phraseIndex === 1) {
                dynamicText2.textContent += phrases[phraseIndex][charIndex];
            } else if (phraseIndex === 2) {
                dynamicText3.textContent += phrases[phraseIndex][charIndex];
            }
            charIndex++;
            setTimeout(typeText, 100); 
        } else {
            setTimeout(() => {
               
                if (phraseIndex === 0) {
                    dynamicText1.textContent = "";
                } else if (phraseIndex === 1) {
                    dynamicText2.textContent = "";
                } else if (phraseIndex === 2) {
                    dynamicText3.textContent = "";
                }
                
                charIndex = 0; 
                phraseIndex = (phraseIndex + 1) % phrases.length; 
                typeText(); 
            }, 1500); 
        }
    }
  
    typeText();
});
