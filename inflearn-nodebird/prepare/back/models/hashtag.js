module.exports((sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag", //mysql에는 users로 저장됨
    {
      //id는 자동으로 생성 됨
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: ":utf8mb4_general_ci", // charset, collate 적으면 한글, 이모티콘 저장
    }
  );

  Hashtag.associate = (db) => {};
  return Hashtag;
});
