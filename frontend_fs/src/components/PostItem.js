import React from 'react';

const PostItem = ({ post }) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {/* Ajouter des boutons ou des actions comme éditer, supprimer, liker ici */}
        </div>
    );
};

export default PostItem;
