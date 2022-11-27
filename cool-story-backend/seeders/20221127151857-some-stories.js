'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Apple",
          content: "In lorem elit, dignissim vitae enim et, posuere mollis tortor. Pellentesque ac quam lacus. Maecenas pharetra feugiat neque a malesuada. Integer eu vulputate odio. Aliquam at lorem sed elit aliquam sodales. Maecenas vitae tristique quam, in consequat nibh. Nulla condimentum ligula in risus aliquet tincidunt. Nulla facilisis purus leo, vel porta magna maximus vitae. Fusce gravida nibh nulla, at varius risus tincidunt eget. Pellentesque auctor condimentum sapien at condimentum. Morbi posuere purus sit amet lorem porta pulvinar. Quisque commodo magna ut urna posuere eleifend. Phasellus vitae placerat enim, blandit ornare nulla. Proin tempus tristique felis vel venenatis. Donec vehicula blandit laoreet. Nunc lacinia libero vel justo ornare gravida.",
          imageUrl: "https://cdn.pixabay.com/photo/2013/12/11/03/13/puzzle-226743__340.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          name: "Banana",
          content: "Aenean maximus lectus nec arcu maximus elementum. Aliquam tempor placerat tempus. Suspendisse augue lorem, lobortis vitae vehicula sed, condimentum in mauris. Mauris maximus auctor mollis. Maecenas est felis, viverra et nulla ac, aliquam consectetur ipsum. Curabitur condimentum pulvinar urna, vitae imperdiet magna viverra a. Sed egestas quam vulputate, tristique dui eu, venenatis sapien. Ut mi elit, maximus sit amet scelerisque sit amet, sodales ut felis. Nam laoreet ac libero tincidunt congue. Etiam nulla libero, luctus et sapien vel, sodales faucibus ligula. Nullam pharetra mi id tempor rutrum. Morbi eu sapien sit amet eros vestibulum fringilla.",
          imageUrl: "https://cdn.pixabay.com/photo/2016/07/29/14/33/ballet-1553359__340.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },  
        {
          name: "Coco",
          content: "Nulla non nulla commodo, tincidunt nulla porta, lobortis urna. Pellentesque accumsan turpis nisl, ac blandit lectus pellentesque quis. Donec condimentum.",
          imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401__340.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },  
        {
          name: "Mango",
          content: "In lacinia tortor ac urna dictum tempor. Praesent in enim vel leo ullamcorper elementum lobortis ultrices metus. Vestibulum nec efficitur turpis. Vestibulum fringilla, augue id vehicula varius, purus lectus lobortis dui, vel ornare velit libero et massa. Nam eget aliquam neque. Curabitur in elit vulputate, posuere augue et, semper metus. Vivamus blandit dictum bibendum. Fusce eleifend quis lorem ut elementum. Etiam ac egestas mauris. Nullam a mauris a nisi rhoncus consectetur. Curabitur ac dui luctus, pharetra diam sit amet, cursus dui. Phasellus feugiat ipsum ut mauris luctus, ut rutrum justo lacinia. Nam eleifend semper congue. Aliquam et purus erat.",
          imageUrl: "https://cdn.pixabay.com/photo/2022/09/08/09/10/rings-7440500__340.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },  
        {
          name: "Live",
          content: "Sed posuere, risus eu consequat mollis, ex felis molestie mauris, vel faucibus tortor purus et ex. Aenean eu scelerisque diam, ut luctus dui. Nam erat felis, luctus id eros nec, viverra imperdiet nulla. Praesent ut maximus nisi. Fusce eleifend, sem sed interdum commodo, leo felis interdum lacus, non varius purus tortor vitae nunc. Nulla id dapibus justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean dapibus ante et maximus viverra.",
          imageUrl: "https://cdn.pixabay.com/photo/2017/05/13/11/01/car-history-free-2309305__340.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stories", null, {});
  }
};
