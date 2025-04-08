import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../images/mission-vission/image.png"
import "../Style/VissionandMission.css"

const VissionandMission = () => {
  return (
    <div className='mission'>
      <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#f9f9f9' }}>
        {/* Full-width rectangular image */}
        <div className="w-100 mt-5">
          <img
            src={Image}
            alt="Church Vision and Mission"
            className="img-fluid w-100"
            style={{ height: '500px', objectFit: 'cover' }}
          />
        </div>

        <div className="container py-5">
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: '#2c3e50' }}>Vision & Mission</h1>
            <p className="text-muted fst-italic">"Fullness of life community in Christ" <br />
              <span className="text-dark">கிறிஸ்துவில் பரிபூரண வாழ்வு சமூகமாக மாறுதல்</span>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-primary fw-semibold">Vision:</h3>
            <p className="fs-5">
              Becoming a “fullness of life community” with deep God-experience and social commitment
              to work for the coming of the Kingdom of God on earth.
              <br />
              <span className="text-dark">ஆழ்ந்த தெய்வ அனுபவத்துடன் மற்றும் சமூகப் பொறுப்புணர்வுடன், கடவுளின் அரசை நிலவில் உருவாக்க உறுதியாக செயல்படும் பரிபூரண வாழ்வு சமூகமாக மாறுதல்.</span>
            </p>
          </div>

          <div>
            <h3 className="text-primary fw-semibold">Mission:</h3>
            <ol className="fs-5">
              <li>Improving maximum participation in all the liturgical, group and social events and activities of the parish.
                <br />
                <span className="text-dark">பரிஷில் நடைபெறும் அனைத்து பூஜை, குழு, மற்றும் சமூக நிகழ்வுகளில் அதிகபட்சமாக மக்களது பங்கேற்பை மேம்படுத்துதல்.</span>
              </li>
              <li>Becoming a community of disciples of Jesus with deep spirituality enjoying “Abba” experience.
                <br />
                <span className="text-dark">ஆழ்ந்த ஆன்மீக அனுபவத்துடன் இயேசுவின் சீடர்களாக “அப்பா” அனுபவத்தை பகிரும் சமுதாயமாக மாறுதல்.</span>
              </li>
              <li>Developing leadership among the parishioners and creating opportunities for them to involve in the planned good works with a spirit of voluntarism and cooperation.
                <br />
                <span className="text-dark">பரிஷ் உறுப்பினர்களிடம் தலைமைத்துவத்தை வளர்த்தல் மற்றும் திட்டமிட்ட நல்வினைகளில் பங்கேற்க வாய்ப்புகள் ஏற்படுத்துதல்.</span>
              </li>
              <li>Organizing the parish administration with a spirit of democracy and shared responsibility so that things are done effectively.
                <br />
                <span className="text-dark">செயல்திறன் வாய்ந்த நிர்வாகத்திற்காக ஜனநாயகத்துடன் கூடிய பொது பொறுப்புணர்வுடன் நிர்வாகத்தை அமைத்தல்.</span>
              </li>
              <li>Becoming a witnessing Christian community that knows the Word of God and the Teachings of the Church and lives accordingly with Gospel values.
                <br />
                <span className="text-dark">தேவவாக்கினமும் திருச்சபையின் போதனைகளும் தெரிந்து, நற்செய்தியின் மதிப்பீடுகளுடன் வாழும் சாட்சியமான கிறிஸ்தவ சமுதாயமாக மாறுதல்.</span>
              </li>
              <li>Promoting the human and Christian values in personal, family, physical and psychological health, education, social responsibility, justice, peace, love, care, truth, equality etc.
                <br />
                <span className="text-dark">தனிப்பட்ட, குடும்ப, உடல் மற்றும் மன ஆரோக்கியம், கல்வி, சமூக பொறுப்பு, நீதிமுறை, அமைதி, அன்பு, பராமரிப்பு, உண்மை மற்றும் சமத்துவம் போன்ற மனித மற்றும் கிறிஸ்தவ மதிப்பீடுகளை மேம்படுத்துதல்.</span>
              </li>
              <li>Becoming mission-minded Christians who proclaim Jesus to others and form communities of committed disciples.
                <br />
                <span className="text-dark">இயேசுவை அறிவித்து, அர்ப்பணிப்பு உள்ள சீடர்களின் சமுதாயங்களை உருவாக்கும் பணியுடன் கூடிய கிறிஸ்தவர்களாக மாறுதல்.</span>
              </li>
              <li>Creating a community of gifted persons, who discover and develop the gifts of the Holy Spirit and who have developed skills according to their aptitude.
                <br />
                <span className="text-dark">பரிசுத்த ஆவியின் வரங்களை கண்டறிந்து வளர்த்துக்கொண்டு தங்களது திறனுக்கு ஏற்ப திறமைகளை உருவாக்கும் நபர்களின் சமுதாயமாக மாறுதல்.</span>
              </li>
              <li>Becoming transcendent persons constantly in touch with God, living in union with God, humanity and nature, finding meaning in working for the great causes of the Kingdom of God.
                <br />
                <span className="text-dark">தெய்வம், மனிதர்கள் மற்றும் இயற்கையுடன் இணைந்த நிலையில் வாழும் தெய்வீக உணர்வுடைய நபர்களாக மாறி, கடவுளின் அரசின் உயர்ந்த நோக்கங்களுக்காக உழைப்பதில்தான் வாழ்க்கையின் அர்த்தத்தை காண்பது.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VissionandMission;
