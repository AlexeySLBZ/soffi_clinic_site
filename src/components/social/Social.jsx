import React, {PureComponent} from 'react';
import instagram from "./Instagram.svg"
import telegram from "./Telegram.svg"
import whatsAp from "./WhatsApp.svg"
import vk from "./VK.svg"
import youTube from "./YouTube.svg"
import "./social.css"

class Social extends PureComponent {
  render() {
    return (

      <address>
        <ul style={{"margin":"0"}} className="social-icons">
          <li>
            <a href="https://instagram.com/cosmetolog_sulaberidze_samara?igshid=YmMyMTA2M2Y=" title="instagram"
               target="_blank" rel="noopener">
              <img className="social-icon-image" src={instagram}/>
            </a>
          </li> <li>
            <a href="https://telegram.im/@Asiya_sulaberidze" title="telegram" target="_blank" rel="noopener">
              <img className="social-icon-image" src={telegram}/>
            </a>
          </li> <li>
            <a href="https://api.whatsapp.com/send?phone=79297072871" title="WhatsApp" target="_blank" rel="noopener">
              <img className="social-icon-image" src={whatsAp}/>
            </a>
          </li> <li>
            <a href="https://vk.com/kosmetolog_ar" title="VK" target="_blank" rel="noopener">
              <img className="social-icon-image" src={vk}/>
            </a>
          </li><li>
            <a href="https://www.youtube.com/@asiyasulaberidze6231" title="YouTube" target="_blank" rel="noopener">
              <img className="social-icon-image" src={youTube}/>
            </a>
          </li>
        </ul>
     </address>
    );
  }
}

export default Social;
