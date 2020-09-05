import store from './store/index';
import addArticle from './actions/index';

//  export the store and the action we created as global variables
window.store = store; 
window.AddArticle = addArticle; 


// try these codes in the console  at  http://localhost:3000/
// store.getState()                //  ==> {articles: Array(0)} 
// store.subscribe(() => console.log('Look here , Redux!!'));
// store.dispatch(AddArticle({title:'Redux for beginners', id: 1 }));
// store.dispatch(AddArticle({title:'Redux for beginners', id: 2 }));