import React from 'react';
import styles from './JsPractice.module.css'
import {useFormik} from 'formik'
const { includes } = require("lodash");

//1
let  arr = ['onion', 'carbage', 'carrot', 'potato'];
let newArr = arr.map(item => item.length);


//2
const firstLetters = (string) => {
 return string.split(' ').map(word => word.split('')[0]);
};
    
//3 
let str = 'aabbccdd ee ff gg t';
new Set(str);

//4
let post = {
    email: "example.@mail.com",
    pass: 'Password1'
}

let EMAIL_REGEXP = (/.+@+\..+/i);                  
let PASS_REGEXP = (/.+[A-Za-z].+[0-1]/i);
let valid = (post) =>{
    if(EMAIL_REGEXP.test(post.email) & PASS_REGEXP.test(post.pass)){
        return true
    } else {
        return false
    }
}
valid(post);

let RGB_REGEXP = (/#+[0-9a-f]/gi)
let rgbtest = (smth) => {
    if ( RGB_REGEXP.test(smth)){
        return true
    } else {
        return false
}
}
    

//6
let obj1 = {
    name: 'name1',
    surName: 'surname1',
    age: '21'
}
let obj2 = {
    name: 'name1',
    surName2: 'surname2',
    age: '20'
}

let sort =  function (obj1, obj2) {
    for ( let key in obj1){
        if (obj1[key] === obj2[key]){
            delete obj1[key]
        }
        
    }
    return obj1
}

sort(obj1, obj2);




export default function JsPracticeCard() {
    return (
        <div className={styles.container}><span className={styles.imgPost}> <h5>text</h5> </span>
            <div className={styles.imageCont}>
                  <img src='https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg' alt='pic'/>
            </div>
            <div className={styles.infoCont}>
                <h1> Name Surname</h1>
                <p> position</p>
            </div>
            
        </div>
    )
}

//lazy load
let options ={
    //root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0,
}

let callback = function( entries, observer){
    entries.forEach(entry =>{
        
    })

}
let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('.container');//document.getElementByClassName('.container')
//observer.observe(target);//TypeError: Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is not of type 'Element'.




