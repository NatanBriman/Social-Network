const API_REQUEST_DELAY = 200;

const api = {
  posts: {
    async getAllPosts() {
      const POSTS = [
        {
          id: 'bc050084-fa9b-19c9-a16b-9e5b8277bab1',
          author: {
            id: 1,
            username: 'Example Name',
            image:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          date: new Date(),
          image:
            'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
          description: 'This is the description...',
        },
        {
          id: 'bc050054-fa9b-19c9-a16b-9e5b8277bab1',
          author: {
            id: 1,
            username: 'Example Name',
            image:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          date: new Date(),
          image:
            'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
          description: 'This is the description...',
        },
        {
          id: 'bc052084-fa9b-19c9-a16b-9e5b8277bab1',
          author: {
            id: 1,
            username: 'Example Name',
            image:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          date: new Date(),
          image:
            'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
          description: 'This is the description...',
        },
        {
          id: 'bc150084-fa9b-19c9-a16b-9e5b8277bab1',
          author: {
            id: 1,
            username: 'Example Name',
            image:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
          },
          date: new Date(),
          image:
            'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
          description: 'This is the description...',
        },
      ];

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(POSTS);
        }, API_REQUEST_DELAY);
      });
    },
  },
  recommendedFriends: {
    async getAllRecommendedFriends() {
      const RECOMMENDED_FRIENDS = [
        {
          id: 2,
          username: 'Natan Briman',
          image:
            'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          id: 3,
          username: 'Rotem Avraham',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
        },
        {
          id: 4,
          username: 'Ruti Sinay',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU',
        },
      ];

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(RECOMMENDED_FRIENDS);
        }, API_REQUEST_DELAY);
      });
    },
  },
};

export default api;
