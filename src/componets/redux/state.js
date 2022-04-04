let rerenderEntireTree = () => {
  console.log('State changed');
}

let state = {

    profilePage: {
      postsData:[
        { id: 1, message: "Hi, Max, What's up ?", likesCount: 3 },
        { id: 2, message: "Hi, Sveta, How are you ?", likesCount: 11 },
        { id: 3, message: "Hi, Nika", likesCount: 4 },
        { id: 3, message: "Hi", likesCount: 32 },
        { id: 3, message: "Yo", likesCount: 12 },
      ],
      newPostText:"It-kamustra.com",
    },
    messagesPage:{
        dialogsData:[
          { id: 1, name: "Dimych", url: "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png" },
          { id: 2, name: "Sveta", url: "https://img.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg" },
          { id: 3, name: "Alex", url: "https://media.istockphoto.com/vectors/single-vector-male-avatar-vector-id495628023" },
          { id: 4, name: "Nick", url: "https://s.pfst.net/2017.06/573451667567ddd2477af4c7d5da84dd1139ec803dbe_b.jpg" },
          { id: 5, name: "Anna", url: "https://media.istockphoto.com/vectors/pretty-girl-avatar-flat-cartoon-style-vector-illustration-vector-id1140166223?k=20&m=1140166223&s=170667a&w=0&h=wgeq7igZ8rP0WrzCBGJL70dLF9bPri1nrMXNerQ6kOA="},
          { id: 6, name: "Oleh", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGtUgLB8IdVBnpDGqfSpvwM_Fl6LOhjwnBw&usqp=CAU" },
        ],
  
      messagesData:[
          { id: 1, message: "Hi, how are you ?" },
          { id: 2, message: "What's up ?" },
          { id: 3, message: "Yo" },
        ],
      newMessageText:"Enter your Massage",  
    },
   sidebar:{
      friendsData:[
        {id: 1, name:"Andrew", url:"https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg"},
        {id: 2, name:"Sasha", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULBnK_PHTmCn8xfVZZntw-wMnqRpbDFgZUA&usqp=CAU"},
        {id: 3, name:"Sveta", url:"https://previews.123rf.com/images/artemstepanov/artemstepanov1606/artemstepanov160600062/57844959-vektor-weibliches-gesicht-avatar-schablone-piktogramm-taste-rund-trendy-flache-symbol-mit-frauen-f%C3%BCr.jpg"},
      ],
   },
}

window.state = state; 

export let addPost = () => {

  let newPost ={
    id: 5,
    message: state.profilePage.newPostText,
    likesCount:21,
  }
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

  state.profilePage.newPostText = newText;
  
  rerenderEntireTree(state);
}

export let addMessage = () => {

  let newMessage ={
    id: 5,
    message: state.messagesPage.newMessageText,
  }
  state.messagesPage.messagesData.push(newMessage);
  state.messagesPage.newMessageText = '';
  
  rerenderEntireTree(state);
}

export let updateNewMessage= (newText) => {

  state.messagesPage.newMessageText = newText;
  
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer; //паттерн наблюдатель // publisher-subscriber
}


export default state;