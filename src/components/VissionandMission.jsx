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
            <h1 className="fw-bold" style={{ color: '#2c3e50' }}>விருதுவாக்கு (motto)</h1>
            <p className="text-muted fst-italic">"Fullness of life community in Christ" <br />
            <span className="text-dark">இலட்சியப் பார்வை:<br />
            </span>
              <span className="text-dark">ஆழ்ந்த இறையனுபவமும், பூவுலகில் இறையாட்சி மலர்ந்திட உழைக்கும் சமுதாய அர்ப்பணமும் மிக்க "நிறைவாழ்வு சமூகமாக" உருவாதல்.
              </span>
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
              <li>பங்கின் அனைத்து வழிபாடு, குழு மற்றும் சமூக நிகழ்வுகளிலும் செயல்பாடுகளிலும் மக்களின் உயர்ந்தபட்ச பங்கேற்பினை வளர்த்தல், (improving maximum participation in all the liturgical, group and social events and activities of the parish.)
                <br />
                {/* <span className="text-dark">பரிஷில் நடைபெறும் அனைத்து பூஜை, குழு, மற்றும் சமூக நிகழ்வுகளில் அதிகபட்சமாக மக்களது பங்கேற்பை மேம்படுத்துதல்.</span> */}
              </li>
              <li>ஆழ்ந்த அருள்வாழ்வில் "அப்பா" அனுபவத்தில் மகிழும் இயேசுவின் சீடர்களின் சமூகமாதல். (Becoming a community of disciples of Jesus with deep spirituality enjoying "Abba" experience.)
                <br />
                {/* <span className="text-dark">ஆழ்ந்த ஆன்மீக அனுபவத்துடன் இயேசுவின் சீடர்களாக “அப்பா” அனுபவத்தை பகிரும் சமுதாயமாக மாறுதல்.</span> */}
              </li>
              <li>
              3. பங்கு மக்கள் மத்தியில் தலைமைப் பண்பினை வளர்த்து, அவர்கள் தன்னார்வத்துடனும், கூட்டுறவுடனும் திட்டமிட்டு நற்செயல்களில் ஈடுபடும் வாய்ப்புகளை உருவாக்குதல். (Developing leadership among the parishioners and creating opportunities for them to involve in the planned goodworks with a spirit of voluntarism and cooperation.)
                <br />
                {/* <span className="text-dark">பரிஷ் உறுப்பினர்களிடம் தலைமைத்துவத்தை வளர்த்தல் மற்றும் திட்டமிட்ட நல்வினைகளில் பங்கேற்க வாய்ப்புகள் ஏற்படுத்துதல்.</span> */}
              </li>
              <li>கூட்டுப்பொறுப்புடனும் மக்களாட்சித் தன்மையுடனும் இணைந்து சிந்தித்து, இறைத்திருவுளத்தைத் தேர்ந்துதெளிந்து, நீர்மானங்கள் எடுத்து, ஆற்றலோடு செயல்படுத்தும் நிர்வாகப் பண்பாட்டினை வளர்த்தல், (Developing a culture of administration that takes decisions by discerning God's will with a spirit of democracy and shared responsibility and carries them out effectively.)
                <br />
                {/* <span className="text-dark">செயல்திறன் வாய்ந்த நிர்வாகத்திற்காக ஜனநாயகத்துடன் கூடிய பொது பொறுப்புணர்வுடன் நிர்வாகத்தை அமைத்தல்.</span> */}
              </li>
              <li>இறைவாக்கினையும் கத்தோலிக்கத் திருஅவையின் போதனைகளையும் அறிந்து, சமூக விழிப்புணர்வுடன், சமுதாயமாற்றப் பணியாற்றும் கிறிஸ்தவ சமூகமாதல். (Becoming a conscientized Christian community that knows the Word of God and the Teachings of the Catholic Church and works for social change.)
                <br />
                {/* <span className="text-dark">தேவவாக்கினமும் திருச்சபையின் போதனைகளும் தெரிந்து, நற்செய்தியின் மதிப்பீடுகளுடன் வாழும் சாட்சியமான கிறிஸ்தவ சமுதாயமாக மாறுதல்.</span> */}
              </li>
              <li>கடவுளின் அன்பை பிரதிபலிக்கும் வகையில், மனிதர்களின் உடலியல் மற்றும் உளவியல் , (Imitating God's Love by fulfilling the physical and psychological needs of all.)
                {/* <span className="text-dark">தனிப்பட்ட, குடும்ப, உடல் மற்றும் மன ஆரோக்கியம், கல்வி, சமூக பொறுப்பு, நீதிமுறை, அமைதி, அன்பு, பராமரிப்பு, உண்மை மற்றும் சமத்துவம் போன்ற மனித மற்றும் கிறிஸ்தவ மதிப்பீடுகளை மேம்படுத்துதல்.</span> */}
              </li>
              <li>நற்செய்தியின் மதிப்பீடுகளை (நம்பிக்கை, அன்பு, நீதி, உண்மை, சமத்துவம். மன்னிப்பு, அமைதி. எதிர்நோக்கு, மகிழ்ச்சி) அடித்தளமாகக் கொண்ட குடும்பங்களாகவும் சமூகங்களாகவும் வளர்தல், (Becoming families and communities founded on the Gospel values such as faith, hope, love, justice, peace, truth, equality and forgiveness.)
                <br />
                {/* <span className="text-dark">இயேசுவை அறிவித்து, அர்ப்பணிப்பு உள்ள சீடர்களின் சமுதாயங்களை உருவாக்கும் பணியுடன் கூடிய கிறிஸ்தவர்களாக மாறுதல்.</span> */}
              </li>
              <li>தூய ஆவியின் கொடைகளைப் பெற்றவர்களாகவும், நமது இயல்பு நாட்டத்திற்கேற்ப திறன்களை வளர்த்துக்கொண்டவர்களாகவும் பணியாற்றும் மனிதர்களின் ஆற்றல்மிக்க एकाकी. (Becoming a powerful community of persons who enjoy the gifts of the Holy Spirit and who have developed skills akin to their aptitude.)
                <br />
                {/* <span className="text-dark">பரிசுத்த ஆவியின் வரங்களை கண்டறிந்து வளர்த்துக்கொண்டு தங்களது திறனுக்கு ஏற்ப திறமைகளை உருவாக்கும் நபர்களின் சமுதாயமாக மாறுதல்.</span> */}
              </li>
              <li>இறைவனோடும், மனுக்குலத்தோடும், இயற்கையோடும் ஒன்றிப்பு எய்தி, இறையாட்ச்சியின் உன்னத இலட்சியங்களுக்காக உழைக்கும் தற்கடத்தல் மனிதர்களாகவும் சமூகங்களாகவும் 2. (Becoming transcendent persons and communities, who in union with God, humanity and nature, finds meaning in working for the great causes of the Kingdom of God.)
                <br />
                {/* <span className="text-dark">தெய்வம், மனிதர்கள் மற்றும் இயற்கையுடன் இணைந்த நிலையில் வாழும் தெய்வீக உணர்வுடைய நபர்களாக மாறி, கடவுளின் அரசின் உயர்ந்த நோக்கங்களுக்காக உழைப்பதில்தான் வாழ்க்கையின் அர்த்தத்தை காண்பது.</span> */}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VissionandMission;
