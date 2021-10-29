//Action

const MyBuylaptop=()=>{
    return{
        "type":"BUYLAPTOP",
        "info":{
            ram:'4gb',
            cpu:'i7'
        }
    }
}

const MySelllaptop=()=>{
    return{
        "type":"SELLLAPTOP",
        "info":{
            ram:'6gb',
            cpu:'i7'
        }
    }
}

let initialData ={
    noOflaptop :10
}

//Reducer have receive two arguments
const reducer=(state = initialData ,action)=>{
    switch(action.type){
        case 'BUYLAPTOP':
            return{
                noOflaptop: state.noOflaptop - 1
            }
            break;
        case 'SELLLAPTOP':
            return{
                noOflaptop: state.noOflaptop + 1
            }
            break;

        default:
    }
}


//store
const redux = require('redux')
const createStore = redux.createStore;
const store = createStore(reducer);
console.log(store.getState());


const unsubscribe = store.subscribe(()=>{
    console.log("updated",store.getState())
})
store.dispatch(MyBuylaptop());
store.dispatch(MySelllaptop());
