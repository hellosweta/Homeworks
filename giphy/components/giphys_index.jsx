import React from 'react';
import giphysIndexItem from './giphys_index_items.jsx';
// import giphysSearch from './giphys_search_container.jsx';

export default ({giphys}) => {
  const components = giphys.map((giphy, idx) =>
    <div style={{marginTop: "10px"}}><img key={idx} src={giphy.images.fixed_height.url} /></div>
    // <giphysIndexItem giphy={giphy} key={idx} />
  );
  console.log(components);
  return(
    <ul>{components}</ul>
  );
};


// import React from 'react';
// Create GiphysIndex and giphysIndexItems functional components to render the results from your GiphysSearch
//
// import React from 'react';
// import PostIndexItem from './post_index_item';
// import giphysSearch from './giphys_search.jsx';
//
// class PostList extends React.Component {
//   componentDidMount(){
//     this.props.fetchPosts();
//   }
//
//   render() {
//     let posts;
//     if(this.props.posts){
//       posts = Object.keys(this.props.posts).map(id => (
//         <PostIndexItem
//           key={id}
//           post={this.props.posts[id]}
//           deletePost={this.props.deletePost}/>
//         )
//       );
//     }
//
//     return(
//       <div>
//         <ul>
//           {posts}
//         </ul>
//         <PostForm createPost={this.props.createPost}/>
//       </div>
//     );
//   }
// }
//
// export default PostList;
// import React from 'react';
// import PostIndexItem from './post_index_item';
// import PostForm from './post_form';
//
// class PostList extends React.Component {
//   componentDidMount(){
//     this.props.fetchPosts();
//   }
//
//   render() {
//     let posts;
//     if(this.props.posts){
//       posts = Object.keys(this.props.posts).map(id => (
//         <PostIndexItem
//           key={id}
//           post={this.props.posts[id]}
//           deletePost={this.props.deletePost}/>
//         )
//       );
//     }
//
//     return(
//       <div>
//         <ul>
//           {posts}
//         </ul>
//         <PostForm createPost={this.props.createPost}/>
//       </div>
//     );
//   }
// }
//
// export default PostList;
