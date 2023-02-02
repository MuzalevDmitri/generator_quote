let nextQuote = document.querySelector('.next')
let info = document.querySelector('.info')
let author = document.querySelector('.author')



const arrayQuote = [
    [" Что разум человека может постигнуть и во что он может поверить, того он способен достичь", 'Наполеон Хилл, журналист и писатель' ],
    ["Стремитесь не к успеху, а к ценностям, которые он дает​", 'Альберт Эйнштейн' ],
    ["Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других", 'Флоренс Найтингейл' ],
    ["Сложнее всего начать действовать, все остальное зависит только от упорства. ", 'Амелия Эрхарт' ],
    ["Надо любить жизнь больше, чем смысл жизни", "какой-то мужик" ],
    ["Зумерочек мой )))000)00)))", "Диянка $Ok_Love__<3", ],
    
]

nextQuote.addEventListener('click', function(){
    let qu = arrayQuote[ Math.floor(Math.random() * arrayQuote.length) ]
    info.innerHTML = qu[0]
    author.innerHTML = qu[1]
})