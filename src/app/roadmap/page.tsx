import "../../styles/roadmap.css";

function RoadMap() {
    return (
        <div>
            <h1 className="roadmap-title">RoadMap</h1>

            <p className="roadmap-text">
                RoadMap은{" "}
                <span className="white">교내 유일 웹 개발 동아리</span>이며,
                <br />웹 개발을 학습하고 함께 실습하며{" "}
                <span className="white">웹 개발자로서의 역량</span>을 쌓아나가는
                동아리입니다.
                <br />
                <br />
                여러분의 웹 사이트를 만들고 동아리 자체 서버와 도메인으로 웹을
                호스팅하여
                <br />전 세계에서 여러분의 웹 페이지에 접속해{" "}
                <span className="white">마법 같은 경험</span>을 할 수 있도록
                만듭니다.
                <br />
                <br />
                또한 동아리 내부에서 개인·팀 프로젝트를 통해{" "}
                <span className="white">리더십 및 협업 능력</span>을 향상시키고,
                <br />
                해커톤과 같은 대회에 참가하여{" "}
                <span className="white">부원들의 실력</span>과{" "}
                <span className="white">RoadMap의 명성</span>을 높입니다.
            </p>

            <a href="../">
                <button className="back">Go Back</button>
            </a>
        </div>
    );
}

export default RoadMap;
