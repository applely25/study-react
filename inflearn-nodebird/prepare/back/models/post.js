module.exports((sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post", //mysql에는 users로 저장됨
    {
      //id는 자동으로 생성 됨
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: ":utf8mb4_general_ci", // charset, collate 적으면 한글, 이모티콘 저장
    }
  );

  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag);
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    db.Post.belongsTo(db.Post, { as: "Retweet" });
  };
  return Post;
});
