import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  postsData:[
    { id: 1, message: "Hi, Max, What's up ?", likesCount: 3 },
    { id: 2, message: "Hi, Sveta, How are you ?", likesCount: 11 },
    { id: 3, message: "Hi, Nika", likesCount: 4 },
    { id: 3, message: "Hi", likesCount: 32 },
  ],
}


test('length of post should be incremented', () => { 
  
  //Initial start data
  let action = addPostActionCreator('it-kamustra');
  

//2. action
  let newState = profileReducer(state,action);

//3. expactation
  expect(newState.postsData.length).toBe(5);
  expect(newState.postsData[4].message).toBe('it-kamustra');
 })


 test('message of post should be correct ', () => { 
  
  //Initial start data
  let action = addPostActionCreator('it-kamustra');
  
  
//2. action
  let newState = profileReducer(state,action);

//3. expactation
  expect(newState.postsData[4].message).toBe('it-kamustra');
 })


 test('after deleting length of messages should be decrement ', () => { 
  
  //Initial start data
  let action = deletePost(1);
  
  
//2. action
  let newState = profileReducer(state,action);

//3. expactation
  expect(newState.postsData.length).toBe(3);
 })


 test('after deleting length shouldnt be decremented id is incorrect ', () => { 
  
  //Initial start data
  let action = deletePost(1000);
  
  
//2. action
  let newState = profileReducer(state,action);

//3. expactation
  expect(newState.postsData.length).toBe(4);
 })
