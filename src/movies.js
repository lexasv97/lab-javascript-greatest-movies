// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const mapped = moviesArray.map((obj) => {
        return obj.director
    });
    return mapped;
}

//mapped is a new array with all the director names
//mapped === 'Steven Spielberg' will pull out the d

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const mappedSpiel = moviesArray.filter((el)=>{
        return el.director.includes('Steven Spielberg');
    })
        const spiel = mappedSpiel.filter((title) => {
            return title.genre.includes('Drama');
        });

        return spiel.length;
    }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const avg = moviesArray.reduce((sum,b) => {
        if (!b.score){
            b.score = 0        
        }
        return sum + b.score;
    },0);
    return Math.round((avg/moviesArray.length)*100)/100;
}

//!b.score evaluates to undefined; better to use !b.score than b.score === undefined, the latter which was not recognized by Jasmine.

//good example of when to use an if method.


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const spiel = moviesArray.filter((obj) => {
        return obj.genre.includes('Drama');
    });
    if (spiel.length === 0){
        return 0;
    }
    return scoresAverage(spiel);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArray2 = moviesArray.map(el => el);
    const newArr = moviesArray2.sort((a,b) => {
        if (a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArray2 = moviesArray.map(el => el.title);
    let moviesArray3 = moviesArray2.sort((a,b) =>{
        return a.localeCompare(b)
    });
    return moviesArray3.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArr = moviesArray.map(el =>{
        if (el.duration.indexOf("h")>=0 && el.duration.indexOf('min')>=0){
            const hours = Number(el.duration[0]);
            const minutes = Number(el.duration[3]+el.duration[4]);
            const total = hours * 60 + minutes;
            return {el,duration: total};
        } else if (el.duration.indexOf("h")>=0) {
            const hours = Number(el.duration[0]);
            const total = hours * 60;
            return {el,duration:total}
        } else if (el.duration.indexOf('min')>=0) {
            const minutes = Number(el.duration[0]+el.duration[1]);
            return {el,duration: minutes}
        }
    })
return newArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
