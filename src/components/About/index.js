import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            你好，我是勇勝。大學就讀淡江大學統計系，除了商管必修的經濟、會計和統計學外，也同時學到程式語言數據分析軟體:SAS和Python，在校成績並不是名列前茅，但對於學習保有熱忱，也能融會貫通課程教導的知識，在畢業後的時間，在線上課程網站Udemy上，上課程學習JavaScript，課程中除了理論還有實作的專案，製作的過程雖具有挑戰，但是自己喜歡用邏輯解決問題的方式，完成後也獲得滿滿成就感。
          </p>
          <p align="LEFT">
            學生時期擔任過吉他社的活動長幹部，擔任幹部不單像社員一樣參與活動表演，要包辦整個社團活動執行，從一開始的企劃發想到找場地和廠商協助，甚至到最後請觀眾回饋，都是活動長的職責範圍，很感謝學長姐給我這個機會，為團隊盡一份心力，也提升自己的領導力，還有解決問題的能力。這些灌溉我的養分，讓我能帶未來的工作上，從大二開始，除了平時上課外，會利用假日的時間做兼職，在飛利浦股份有限公司擔任通路銷售員，工作近兩年的時間，主要工作內容:
            1.在賣場、百貨公司做產品銷售，透過實體店面銷售，與客人面對面交談，需透過對答的方式，了解顧客需求和預算限制，需良好的溝通協調能力，推廣產品也要負責售後服務，讓消費者安心。2.
            公司一個月會舉一次教育訓練，工作一年後除了原本的受訓外，多了教導新進員工的責任，協助主管舉辦教育訓練，也要負責檔期的籌畫，主要負責有2020年的「父親節送禮-刮鬍刀」檔期，有達成當年的業績目標，更超越去年同期5%。
          </p>
          <p>
            今年在5月中從義務役退伍後成為職場新鮮人，對自己的期待是立即踏入職場發揮所學；並且在工作中督促自己要不斷進步，持續精進軟體能力，要保持持續學習，像塊海綿一樣不停吸收，提升自己的能力和競爭力，才有辦法繼續在產業深耕。在未來的職場生涯，求自己的表現能盡善盡美，不遺餘力的學習，自己被付予的任務能使命必達，對公司帶來更多的貢獻，並與公司共同成長，同時提升個人競爭力，對於工作內容專業知識部分，如有不足肯願意花時間持續到融會貫通為止。
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
