import React from 'react';

export default ({giphy}) => {
  console.log("giphy");
  return(
    <li>
      <h1>Hello World</h1>
      <img src={giphy.embed_url} />
    </li>
  );
};
//
// class GiphysIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDelete = this.handleDelete.bind(this);
//   }
//
//   handleDelete(e) {
//     e.preventDefault();
//     this.props.deletePost(this.props.post);
//   }
//
//   render() {
//     return (
//       <li>
//         <h3>{this.props.post.title}</h3>
//         <p>{this.props.post.body}</p>
//         <button onClick={this.handleDelete}>
//           Delete Post
//         </button>
//       </li>
//     );
//   }
// }
//
// export default PostIndexItem;
