var elmr_fatiha = document.querySelector('#mr_fatiha'),
    elmr_ikhlas = document.querySelector('#mr_ikhlas'),
    elmr_falaq = document.querySelector('#mr_falaq'),
    elaz_fatiha = document.querySelector('#az_fatiha'),
    elaz_ikhlas = document.querySelector('#az_ikhlas'),
    elaz_falaq = document.querySelector('#az_falaq'),
    elaa_fatiha = document.querySelector('#aa_fatiha'),
    elaa_ikhlas = document.querySelector('#aa_ikhlas'),
    elaa_falaq = document.querySelector('#aa_falaq'),
    elBtn = document.querySelector('.btn_nav'),
    elLi = document.querySelector('#li')



   
    var rec = new webkitSpeechRecognition();
    rec.lang = 'ru-RU';
    
   
    
    
    rec.onerror = function (err) {
        console.log(err, 'error');
    };
    
    rec.onend = function () {
        console.log('Aloqa tugadi');
    };
    
    
    rec.onresult = function (evt) {
    
        var command = evt.results[0][0].transcript;
        console.log(command)

        elLi.textContent = null;

        if(command == 'первый первый стих' || command == 'Первый первый стих'){
            elmr_fatiha.play()
        } else if (command == 'первый второй стих' || command == 'Первый второй стих'){
            elmr_ikhlas.play()
        } else if (command == 'первый третий стих' || command == 'Первый третий стих'){
            elmr_falaq.play()

        } else if (command == 'второй первый стих' || command == 'Второй первый стих'){
            elaz_fatiha.play()
            
        } else if (command == 'второй второй стих' || command == 'Второй второй стих'){
            elaz_ikhlas.play()
            
        } else if (command == 'второй третий стих' || command == 'Второй третий стих'){
            elaz_falaq.play()
            
        } else if (command == 'третий первый стих' || command == 'Третий первый стих'){
            elaa_fatiha.play()
            
        } else if (command == 'третий второй стих' || command == 'Третий второй стих'){
            elaa_ikhlas.play()
            
        } else if (command == 'третий третий стих' || command == 'Третий третий стих'){
            elaa_falaq.play()
            
        } else {
            elLi.textContent = '(Ничего не найдено)'
        }
         ;


        if(command == 'остановить'){
            elmr_falaq.pause();
            elmr_fatiha.pause();
            elmr_ikhlas.pause();
            elaz_falaq.pause();
            elaz_ikhlas.pause();
            elaz_fatiha.pause();
            elaa_falaq.pause();
            elaa_fatiha.pause();
            elaa_ikhlas.pause();

        }
       
    }

    elBtn.addEventListener('click', function(){
        rec.start();
    })








    // elForm.addEventListener('click', function(){
    //     elAAU.play();
    //     // elAud.pause();
    //     // const music = new Audio(elAud);
    //     // music.play();
    //     // music.loop =true;
    //     // music.playbackRate = 2;
    //     // music.pause();qqazszdgfbgtyj//