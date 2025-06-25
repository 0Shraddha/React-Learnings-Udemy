
//We're writting in Nodejs so the sytax different

const redux = require('redux');
const counterReducer = (state = {counter : 0} , action) => {
    //2. reducer function takes 2 input : old/existing state, dispatched action ==> return new state object
    if(action.type === 'increment'){
    return {
            counter : state.counter + 1
        }
    }

    if( action.type === 'decrement'){
        return{
            counter : state.counter - 1
        }
    }
    return state
}
const store = redux.createStore(counterReducer); //1. createStore creates a store
/*
The store is responsible for holding some data,
but exactly what data it holds is decided by the reducer function.

That’s because the reducer creates new versions of the state.
Every time an action is sent to it,
the reducer must return an updated version of the state.
*/

console.log(store.getState());

//3. Now we also need something (or someone) to listen to changes in the store — that’s called a subscription.
/* 
inside it, we can use getState() from the store to get the latest updated state.

This function runs automatically whenever the state changes,
so we can always access the current state after each update.
*/
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log({latestState});
}

store.subscribe(counterSubscriber); //4. We connect the subscriber to Redux using store.subscribe(subscriberFunction).
/*Redux will call this function automatically whenever the state changes — we don’t call it ourselves.*/
/*
In createStore(counterReducer) and subscribe(counterSubscriber);
we are just pointing at counterReducer and counterSubscriber
we are not executing it, it will be executed by REDUX
*/

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement'})