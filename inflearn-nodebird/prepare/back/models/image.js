module.exports((sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image", //mysql에는 users로 저장됨
    {
      //id는 자동으로 생성 됨
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: ":utf8_general_ci",
    }
  );

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
});
