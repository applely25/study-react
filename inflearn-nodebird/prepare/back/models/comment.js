module.exports((sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment", //mysql에는 users로 저장됨
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

  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
});