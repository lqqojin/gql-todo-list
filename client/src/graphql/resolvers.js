// 백엔드로 보내지 않음 로컬에서 처리
export const toggleLikeTodo  = (_, {id, isLiked}, {cache}) => {
    console.log(id);
    cache.writeData({id:`Todo:${id}`, data:  {isLiked: !isLiked, medium: 'lalalala'} });
};

export const isLiked = () => false
