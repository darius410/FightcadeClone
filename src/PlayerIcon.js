const PlayerIcon = () => (
    <button className="playerIcon hover:w-[90px] ease-in-out duration-150">
        <img src={require("./images/akuma.jpeg")} alt="" className="playerImage" />
        <span className="activeStatus"></span>
    </button>
)

export default PlayerIcon